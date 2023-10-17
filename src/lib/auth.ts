import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, users } from "@/lib/db/schema";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { eq } from "drizzle-orm";

export const authOptions: NextAuthOptions = {
  // adapter: DrizzleAdapter<PostgresJsDatabase>(db),
  secret: process.env.NEXTAUTH_SECRET!,
  debug: true,
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("CREDS", credentials);

        try {
          console.log("PREFOUND USER!!!!");
          const foundUser = await db
            .select()
            .from(users)
            .where(eq(users.email, credentials!.username));

          console.log("FOUNDUSER", foundUser);
          if (foundUser && foundUser.length !== 0) {
            const user = foundUser[0];
            return user;
          }
        } catch (error) {
          console.log("ERROR", error);
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      console.log("SESSION CALLBACK", session, token);
      return session;
    },
    async jwt({ token, user }) {
      console.log("JWT CALLBACK", token, user);

      return token;
    },
  },
  pages: {
    signIn: "/signin",
    newUser: "/register",
  },
};
