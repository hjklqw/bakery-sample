"use client";

import { useCallback, useRef, useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

import styles from "./styles.module.scss";

import { ApiResponse } from "@/common/models";

export const NewsletterSubscription = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSubscribed, setSubscribed] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubscribeClicked = useCallback(async () => {
    if (inputRef.current?.value === "") {
      setErrorMessage("Please enter your email.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputRef.current?.value.trim(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const apiResonse: ApiResponse = await res.json();

    if (!apiResonse.success) {
      setErrorMessage(
        apiResonse.error || "An unknown error occured. Please try again later."
      );
      setLoading(false);
      return;
    }

    if (inputRef.current) inputRef.current.value = "";
    setErrorMessage(undefined);
    setSubscribed(true);
    setLoading(false);
  }, []);

  return (
    <section>
      {isSubscribed ? (
        <div className={styles.message}>
          You are now subscribed!
          <MdMarkEmailRead />
          <small>
            If you don&apos;t receive an email, please check your spam folder.
          </small>
        </div>
      ) : (
        <>
          <div className={styles.message}>
            Join our mailing list for updates, special offers, and more!
          </div>
          <div
            className={`${styles.controls} ${errorMessage ? styles.error : ""}`}
          >
            <input placeholder="Email" ref={inputRef} disabled={isLoading} />
            <button
              type="button"
              onClick={onSubscribeClicked}
              disabled={isLoading}
            >
              Subscribe
              <AiTwotoneMail />
            </button>
          </div>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
        </>
      )}
    </section>
  );
};
