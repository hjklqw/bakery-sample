"use client";

import { useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

import styles from "./styles.module.scss";

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <div className={styles.mobileNavToggler}>
        <button onClick={() => setMenuOpen((v) => !v)}>
          {isMenuOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/special">Special</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};
