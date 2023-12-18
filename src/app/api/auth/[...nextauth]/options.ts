import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const options = {
  providers: [
    GitHubProvider({
      profile(profile): any {
        console.log('Profile GitHub: ', profile);

        let userRole = 'GitHub User';
        if (profile?.email == 'jake@claritycoders.com') {
          userRole = 'admin';
        }

        return {
          ...profile,
          id: profile.s,
          role: userRole,
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      profile(profile) {
        console.log('Profile Google: ', profile);
        console.log('id', profile.sub);

        let userRole = 'Google User';
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
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
      console.log;
      if (user) {
        token.role = user.role;
        token.image = user.image;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.image = token.image;
        session.user.id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }: any) {
      return baseUrl;
    },
  },
};
