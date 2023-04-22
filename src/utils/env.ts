import { z } from "zod";

const schema = z.object({
  SENDGRID_API_KEY: z.string(),
  SENDGRID_SENDER: z.string().email(),
  SENDGRID_SUBSCRIBERS_LIST_ID: z.string(),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    JSON.stringify(parsed.error.format(), null, 4)
  );
  process.exit(1);
}

/** Typesafe and checked environment variables */
export const env = parsed.data;
