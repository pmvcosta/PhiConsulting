//This is a catch all rout for api/auth...
//API route needs to export a function

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

//There's a wealth of providers, check NextAuth documentation

//Export a NextAuth() function with configuration as the argument
export default NextAuth({
  session: {
    //This determines how the session is managed
    jwt: true,
    maxAge: 1 * 24 * 60 * 60, //idle session expires after one day
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        //If user isn't found
        if (!user) {
          client.close();
          throw new Error('User not found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        //If password is deemed as invalid
        if (!isValid) {
          client.close();
          throw new Error('Password is incorrect');
        }

        client.close();

        //returning an object notifies NextAuth that authorize went through
        // properly, and user is logged in
        //can include user email in this object, that will be encoded into the
        // token, not wise to include the password.
        return { email: user.email };
      },
    }),
  ],
});
