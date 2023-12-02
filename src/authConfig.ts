import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnNotesPage = nextUrl.pathname.startsWith("/notes");
      if (isOnNotesPage) {
        if (isLoggedIn) return true;

        return false;
      } else if (isLoggedIn) {
        return true;
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
