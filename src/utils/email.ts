import { z } from "zod";
import sgMail from "@sendgrid/mail";
import client from "@sendgrid/client";

import { env } from "./env";

sgMail.setApiKey(env.SENDGRID_API_KEY);
client.setApiKey(env.SENDGRID_API_KEY);

/**
 * Adds the given email to the subscriptions list.
 * @returns `null` when succeeded, and an error message otherwise.
 */
export async function addEmailSubscriber(email: string) {
  const body = {
    contacts: [{ email }],
    list_ids: [env.SENDGRID_SUBSCRIBERS_LIST_ID],
  };
  try {
    await client.request({
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body,
    });
    return null;
  } catch (error: any) {
    let errorMessage = "";
    try {
      errorMessage = JSON.parse(error.errors)?.[0].message;
    } catch {
      errorMessage = error.toString();
    }
    return errorMessage;
  }
}

const INVALID_EMAIL_TYPE_MESSAGE = "Please enter a valid email address.";

/** A validator for emails, with custom error messages */
export const emailSchema = z
  .string({
    required_error: "Please enter your email.",
    invalid_type_error: INVALID_EMAIL_TYPE_MESSAGE,
  })
  .email({ message: INVALID_EMAIL_TYPE_MESSAGE });
