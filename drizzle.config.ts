import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/lib/db/schema.ts",
  driver: "pg",
  out: "./drizle",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
} satisfies Config;
