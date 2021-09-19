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

  const userEmail = session.user.email;
  const campaignName = req.body.campaignName;
  const fundMethod = req.body.fundMethod;
  const platform = req.body.platform;
  const fundGoal = req.body.fundGoal;
  const fundDeadline = req.body.fundDeadline;
  const addNotes = req.body.addNotes;

  //const payMethod = req.body.payMethod;
  let campaign;
  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    res.status(404).json({ message: 'User not found!' });
    client.close();
    return;
  }

  const campaigns = user.campaigns;

  if (!campaigns) {
    console.log('CAMPAIGNS DOES NOT EXIST');
    const result = await usersCollection.updateOne(
      { email: userEmail },
      {
        $set: {
          campaigns: [
            {
              campaignName: campaignName,
              fundMethod: fundMethod,
              platform: platform,
              fundGoal: fundGoal,
              fundDeadline: fundDeadline,
              addNotes: addNotes,
            },
          ],
        },
      }
    );
  } else {
    campaigns.forEach((item) => {
      if (item.campaignName === campaignName) {
        campaign = item;
      }
    });

    if (!campaign) {
      const result = await usersCollection.updateOne(
        { email: userEmail },
        {
          $push: {
            campaigns: {
              campaignName: campaignName,
              fundMethod: fundMethod,
              platform: platform,
              fundGoal: fundGoal,
              fundDeadline: fundDeadline,
              addNotes: addNotes,
            },
          },
        }
      );
    } else {
      res.status(403).json({
        message: 'A campaign with the name specified already exists!',
      });
      client.close();
      return;
    }
  }

  //Can add some error handling based on the value of "result"

  client.close();
  res.status(200).json({ message: 'Campaign Submitted' });
};
