//Creating our own API routes and requests
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword, hashPassword } from '../../../lib/auth';

export default async (req, res) => {
  if (req.method !== 'PATCH') {
    return; //Only continue for PATCH requests
  }

  const session = await getSession({ req: req });

  if (!session) {
    //401 is the standard code for lack of authentication
    res.status(401).json({ message: 'Not authenticated!' });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
    client.close();
    return;
  }

  //The hashed password
  const currentPassword = user.password;

  const passwordsAreEqual = await verifyPassword(oldPassword, currentPassword);

  if (!passwordsAreEqual) {
    res.status(403).json({
      message: 'The password you entered does not match your current one!',
    });
    client.close();
    return;
  }

  //Password check passes, can change password
  const hashedNewPassword = await hashPassword(newPassword);

  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedNewPassword } }
  );

  //Can add some error handling based on the value of "result"

  client.close();
  res.status(200).json({ message: 'Password updated!' });
};
