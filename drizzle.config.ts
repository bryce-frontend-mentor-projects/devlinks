import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/lib/db/schema.ts",
  driver: "pg",
  out: "./drizle",
  dbCredentials: {
    connectionString:
      "postgres://default:3He6WsAwELnx@ep-silent-hall-92993129-pooler.us-east-1.postgres.vercel-storage.com/verceldb?sslmode=require",
  },
} satisfies Config;
