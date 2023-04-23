import Image from "next/image";
import Link from "next/link";
import { HiOutlineLightBulb as NoteIcon } from "react-icons/hi";

import { stylizedFont } from "@/common/fonts";
import { Quote } from "@/common/quote";
import { WheatLogo } from "@/common/assets/wheatLogo";

import styles from "./styles.module.scss";
import { categories } from "../landing";

export const ProductsPage = () => (
  <div className={styles.pageWrapper}>
    <section className={`${styles.section} ${styles.intro}`}>
      <header>
        <h2 className={stylizedFont.className}>Fresh and warm</h2>
        <WheatLogo />
      </header>
      <div>
        <div className="p">
          <p>
            All our products are freshly baked every morning, in-store, using a
            wood-burning oven and the finest ingredients.
          </p>
          <p>
            We use no commercial mixes and create everything from scratch,
            in-house.
          </p>
          <div className={styles.quote}>
            <Quote
              text="Insert famous and relevant quote about bread here"
              author="Someone very smart"
              noBackground
            />
          </div>
          <p>
            Morbi eu commodo nulla. Phasellus dapibus neque massa, nec dignissim
            nulla consequat vel. Quisque volutpat quis magna nec gravida. Nunc
            sed ante mollis, bibendum libero a, vulputate mauris.
          </p>
          <p>
            Quisque pharetra blandit urna nec sagittis. Suspendisse tempus
            eleifend tempor, etiam iaculis nec arcu non dignissim.
          </p>
          <p>Nulla vestibulum pretium odio, vel rutrum magna hendrerit at.</p>
        </div>
        <div className={styles.image}>
          <Image src="/products.jpg" alt="Our products" fill priority />
        </div>
      </div>
    </section>

    <section className={`${styles.section} ${styles.browse}`}>
      <header>
        <h2 className={stylizedFont.className}>Browse</h2>
        <WheatLogo />
      </header>
      <div className={styles.categories}>
        {categories.map((c) => (
          <Link href={c.route} key={c.name}>
            <Image
              src={c.imageUrl}
              fill
              alt={c.name}
              style={{ objectPosition: c.imagePosition }}
            />
            <div className={styles.name}>{c.name}</div>
          </Link>
        ))}
      </div>
    </section>

    <section className={`${styles.section} ${styles.note}`}>
      <NoteIcon />
      <b>Note:</b>
      <span>All of our products are subject to availability.</span>
    </section>
  </div>
);
