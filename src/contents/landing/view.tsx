import Image from "next/image";

import { brandFont, stylizedFont } from "@/common/fonts";

import styles from "./styles.module.scss";
import { WheatLogo } from "./wheatLogo";

export const LandingPage = () => {
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/hand-holding-bread.jpg"
          alt="header"
          priority
          fill
          className={styles.bgImage}
        />
        <h1 className={brandFont.className}>Imaginary Bakery</h1>
        <p role="doc-subtitle" className={stylizedFont.className}>
          Smells like a dream.
        </p>
        <WheatLogo className={styles.wheat} />
      </header>
    </>
  );
};
