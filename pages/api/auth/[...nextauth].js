import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from '../../../lib/mongodb';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId:
        process.env.NODE_ENV === 'development'
          ? process.env.GOOGLE_CLIENT_ID
          : process.env.GOOGLE_CLIENT_ID_PROD,
      clientSecret:
        process.env.NODE_ENV === 'development'
          ? process.env.GOOGLE_CLIENT_SECRET
          : process.env.GOOGLE_CLIENT_SECRET_PROD,
    }),
    // ...add more providers here
  ],
  secret: '+VjM8LLpe7Jr987XSNFA7NWMt+U4qPCTTJYOOEfOtCw=',
};
export default NextAuth(authOptions);
