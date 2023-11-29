import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import { authConfig } from "./authConfig";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { connectToDB } from "@/lib/mongodb";
import UserModel from "@/models/User";

const getUser = async (email: string): Promise<any | undefined> => {
  try {
    connectToDB();

    const user = await UserModel.findOne({ email });
    return user;
  } catch (e) {
    console.error("Failed to fetch user:", e);
    throw new Error("Failed to fetch user.");
  }
};

interface Credentials {
  email: string;
  password: string;
}

const login = async (credentials: Credentials): Promise<any> => {
  try {
    const { email, password } = credentials;

    const user = await getUser(email);
    // TODO can throw error
    if (!user) return null;

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    // TODO can throw error
    if (!isCorrectPassword) return null;

    return user;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to login.");
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const credentials = parsedCredentials.data;
          const user = await login(credentials);
          console.log("user", user);
          return user;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        token.name = token.name;
        token.email = token.email;
      }

      return session;
    },
  },
});
