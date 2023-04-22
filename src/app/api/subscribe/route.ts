import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";

import { ApiResponse } from "@/common/models";
import { addEmailSubscriber, emailSchema } from "@/utils/email";

const requestSchema = z.object({
  email: emailSchema,
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

  const email = parsed.data.email;

  const errorMessage = await addEmailSubscriber(email);

  const res = errorMessage
    ? { success: false, error: errorMessage }
    : { success: true };

  return NextResponse.json(res);
}
