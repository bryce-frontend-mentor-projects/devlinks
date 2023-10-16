import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db/schema";
import { NextAuthOptions } from "next-auth";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import CognitoProvider from "next-auth/providers/cognito";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // adapter: DrizzleAdapter<PostgresJsDatabase>(db),
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("CREDS", credentials);
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return user;
      },
    }),
    // CognitoProvider({
    //   clientId: process.env.COGNITO_CLIENT_ID!,
    //   clientSecret: process.env.COGNITO_CLIENT_SECRET!,
    //   issuer: process.env.COGNITO_ISSUER,
    // }),
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!,
    // }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      console.log("ASESSION: ", session, token);
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT", token, user);

      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
