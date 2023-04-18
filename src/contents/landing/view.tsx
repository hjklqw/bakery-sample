import Image from "next/image";

import { brandFont, stylizedFont } from "@/common/fonts";

import styles from "./styles.module.scss";
import { WheatLogo } from "./wheatLogo";
import Link from "next/link";

export const LandingPage = () => {
  return (
    <>
      <div className={styles.banner}>
        New products available for Mother&apos;s Day 2023!
        <Link href="/special">Shop now! &rarr;</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/special">Special</Link>
        <Link href="/contact">Contact</Link>
      </nav>
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
