import { useSession } from "next-auth/react";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  return (
    <main className={`${instrumentSans.className}`}>
      <h1>Home</h1>
    </main>
  );
}
