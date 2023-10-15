import ChevronDownIcon from "@/app/icons/IconChevronDown";
import GithubIcon from "@/app/icons/IconGithub";
import { authOptions } from "@/lib/auth";
import {
  GetObjectCommand,
  ListObjectsCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const s3Client = new S3Client({ region: "us-east-1" });
  const imageKey = "sample.png";
  const bucket = process.env.S3_BUCKET;

  const command = new GetObjectCommand({ Bucket: bucket, Key: imageKey });
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

  return signedUrl;
}

export default async function Home() {
  const data = await getData();
  const session = await getServerSession(authOptions);
  console.log("SESSION", session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GithubIcon />

      <a href="/api/auth/signup">Sign up</a>
      <div>
        {session !== null ? (
          <h1>{session.userName}</h1>
        ) : (
          <a href="/api/auth/signin/cognito">Sign in</a>
        )}
      </div>
      <Image src={data} height={198} width={198} alt="Profile Image" />
      <ChevronDownIcon />
    </main>
  );
}
