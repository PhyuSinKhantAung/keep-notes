import { connectToDB } from '@/lib/mongodb';
import UserModel from '@/models/User';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const options = {
  providers: [
    GoogleProvider({
      async profile(profile) {
        connectToDB();

        let userId;
        try {
          const existingUser = await UserModel.findOne({
            email: profile.email,
          });

          if (!existingUser) {
            const newUser = await UserModel.create({ email: profile.email });
            userId = newUser._id;
          } else {
            userId = existingUser._id;
          }
        } catch (err: any) {
          throw new Error(err);
        }

        return {
          ...profile,
          id: userId,
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }: any) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.image = token.image;
      }
      return session;
    },
    async redirect({ url, baseUrl }: any) {
      return baseUrl;
    },
  },
};
