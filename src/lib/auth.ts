import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db/schema";
import { NextAuthOptions } from "next-auth";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import CognitoProvider from "next-auth/providers/cognito";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // adapter: DrizzleAdapter<PostgresJsDatabase>(db),
  secret: process.env.NEXTAUTH_SECRET!,
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER,
    }),
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
};
