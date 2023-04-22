"use client";

import { useCallback, FormEvent, useState } from "react";
import { AiOutlineSend as SendIcon } from "react-icons/ai";

import styles from "./styles.module.scss";

import { getFormValues } from "@/utils/form";
import { ApiResponse } from "@/common/models";

export const formFieldIds = {
  name: "name",
  email: "email",
  company: "company",
  subject: "subject",
  message: "message",
};

export const ContactForm = () => {
  const [isFormSent, setFormSent] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = getFormValues(formFieldIds, form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const apiResonse: ApiResponse = await res.json();

    if (!apiResonse.success) {
      setErrorMessage(
        apiResonse.error || "An unknown error occured. Please try again later."
      );
      setLoading(false);
      return;
    }

    setErrorMessage(undefined);
    setFormSent(true);
    setLoading(false);
  }, []);

  if (isFormSent) {
    return (
      <p style={{ textAlign: "center" }}>
        Thank you for your message! I have received it and will most likely
        respond shortly.
      </p>
    );
  }

  return (
    <>
      {errorMessage && (
        <div className={styles.errorMessage}>
          <b>Error:</b> {errorMessage}
        </div>
      )}
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            name={formFieldIds.name}
            placeholder="Name"
            required
            disabled={isLoading}
          />
          <input
            type="email"
            name={formFieldIds.email}
            placeholder="Email"
            required
            disabled={isLoading}
          />
        </div>
        <div className={styles.row}>
          <input
            type="text"
            name={formFieldIds.company}
            placeholder="Company (Optional)"
            disabled={isLoading}
          />
          <input
            type="text"
            name={formFieldIds.subject}
            placeholder="Subject (Optional)"
            disabled={isLoading}
          />
        </div>
        <div className={styles.row}>
          <textarea
            name={formFieldIds.message}
            placeholder="Message"
            required
            disabled={isLoading}
          />
        </div>
        <button type="submit" className="withIcon" disabled={isLoading}>
          Send <SendIcon />
        </button>
      </form>
    </>
  );
};
