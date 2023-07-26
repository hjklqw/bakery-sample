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
  return safeEmailApiCall(() =>
    client.request({
      url: `/v3/marketing/contacts`,
      method: "PUT",
      body,
    })
  );
}

/**
 * Sends an email with the given parameters.
 * @returns `null` when succeeded, and an error message otherwise.
 */
export async function sendEmail(params: {
  to: string;
  templateId: string;
  dynamicTemplateData?: { [key: string]: any };
}) {
  const msg: sgMail.MailDataRequired = {
    to: params.to,
    from: {
      name: "Imaginary Bakery",
      email: env.SENDGRID_SENDER,
    },
    templateId: params.templateId,
    dynamicTemplateData: params.dynamicTemplateData,
  };
  return safeEmailApiCall(() => sgMail.send(msg));
}

/**
 * Makes an API call with try/catch handlers.
 * @returns `null` when succeeded, and an error message otherwise.
 */
async function safeEmailApiCall(
  makeCall: () => Promise<[sgMail.ClientResponse, {}]>
) {
  try {
    await makeCall();
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
