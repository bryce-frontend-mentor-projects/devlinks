import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

export default async function Admin() {
  const session = await getServerSession(authOptions);

  console.log("SESSION", session);

  // if (!session) {
  //
  //   signIn("cognito");
  // }
  return <main>Admin</main>;
}