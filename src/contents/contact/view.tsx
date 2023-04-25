import { AiTwotonePushpin as NoteIcon } from "react-icons/ai";

import styles from "./styles.module.scss";

import { stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/assets/wheatLogo";

import { ContactForm } from "./form";

export const ContactPage = () => (
  <div className={styles.wrapper}>
    <section className="p no-indent">
      <p>
        Interested in getting a website like this? Or a website like any of
        my&nbsp;
        <a
          href="https://michellepoon.ca/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          other samples
        </a>
        ? Then contact me using the form below!
      </p>
      <p className={styles.note}>
        <NoteIcon title="note" />
        <span>
          <b>Note</b>: This is a real form hooked up to my email, so please
          refrain from sending test data. Please enter a real email address If
          you would like a reply!
        </span>
      </p>
    </section>

    <h2 className={`${stylizedFont.className} ${styles.header}`}>
      Say Hi!
      <WheatLogo />
    </h2>

    <ContactForm />
  </div>
);
