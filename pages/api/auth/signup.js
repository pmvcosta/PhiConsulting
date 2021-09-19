import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  //Check validity of inputs
  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message:
        'Invalid Input - And Password should be at least 5 characters long',
    });
  }

  const client = await connectToDatabase();

  //retrieve the database
  const db = client.db();

  //Check if user's email is already registered
  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'User already exists!' });

    //close database connection
    client.close();
    return;
  }

  //retrieve users collection (if already existent), or create it
  //db.collection('users');

  //Should encrypt or use hashes to secure passwords. Don't store plain passwords
  // Like so:

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created User!' });
  client.close();

  //Error handling is not implemented here, I can take care of it later...
}

export default handler;
