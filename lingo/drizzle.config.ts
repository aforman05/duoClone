import "dotenv/config";
import type { defineConfig } from "drizzle-kit";

export default ({
    dialect: "postgresql",
    out: "./drizzle",
    schema: "./db/schema.ts",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});