import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

import { ApiResponse } from "@/common/models";
import { sendEmail, emailSchema } from "@/utils/email";
import { env } from "@/utils/env";
import { escapeInput } from "@/utils/form";

const requestSchema = z.object({
  name: z.string(),
  email: emailSchema,
  company: z.string().optional().default("None"),
  subject: z.string().optional().default("(No subject)"),
  message: z
    .string()
    .transform((text) => escapeInput(text).replaceAll("\n", "<br>")),
});

export async function POST(req: NextRequest) {
  const parsed = requestSchema.safeParse(await req.json());
  if (!parsed.success) {
    const res: ApiResponse = {
      success: false,
      error: parsed.error.issues?.[0]?.message || "Please reenter your email.",
    };
    return NextResponse.json(res);
  }

  const errorMessage = await sendEmail({
    to: env.SENDGRID_SENDER,
    templateId: env.SENDGRID_CONTACT_EMAIL_TEMPLATE_ID,
    dynamicTemplateData: parsed.data,
  });

  const res = errorMessage
    ? { success: false, error: errorMessage }
    : { success: true };

  return NextResponse.json(res);
}
