"use client";

import { useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

import { Routes } from "@/common/routes";
import { TestId } from "@/common/testIds";

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
      <nav
        className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(false)}
        data-testid={TestId.GLOBAL_NAV}
      >
        <Link href={Routes.HOME}>Home</Link>
        <Link href={Routes.ABOUT}>About</Link>
        <Link href={Routes.PRODUCTS}>Products</Link>
        <Link href={Routes.SPECIAL}>Special</Link>
        <Link href={Routes.CONTACT}>Contact</Link>
      </nav>
    </div>
  );
};
