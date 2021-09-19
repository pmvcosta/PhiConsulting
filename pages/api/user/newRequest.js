//Creating our own API routes and requests
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../lib/db';

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

  let request;
  const userEmail = session.user.email;
  const campaignName = req.body.campaignName;
  const reqName = req.body.reqName;
  const reqType = req.body.reqType;
  const maxSpend = req.body.maxSpend;
  const reqDeadline = req.body.reqDeadline;
  const addNotes = req.body.addNotes;
  const payMethod = req.body.payMethod;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
    client.close();
    return;
  }

  //Should we store requests within campaigns?
  //const campaign = ...?
  //const requests = user.campaign.requests;

  const requests = user.requests;

  if (!requests) {
    const result = await usersCollection.updateOne(
      { email: userEmail },
      {
        $set: {
          requests: [
            {
              campaignName: campaignName,
              reqName: reqName,
              reqType: reqType,
              maxSpend: maxSpend,
              reqDeadline: reqDeadline,
              addNotes: addNotes,
              payMethod: payMethod,
            },
          ],
        },
      }
    );
  } else {
    console.log('Requests does not exist');
    requests.forEach((item) => {
      if (item.reqName === reqName) {
        request = item;
      }
    });
    if (!request) {
      const result = await usersCollection.updateOne(
        { email: userEmail },
        {
          $push: {
            requests: {
              campaignName: campaignName,
              reqName: reqName,
              reqType: reqType,
              maxSpend: maxSpend,
              reqDeadline: reqDeadline,
              addNotes: addNotes,
              payMethod: payMethod,
            },
          },
        }
      );
    } else {
      res.status(403).json({
        message: 'A request with the name specified already exists!',
      });
      client.close();
      return;
    }
  }

  //Can add some error handling based on the value of "result"

  client.close();
  res.status(200).json({ message: 'Campaign Submitted' });
};
