import Image from "next/image";
import Link from "next/link";

import { brandFont, stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/wheatLogo";

import styles from "./styles.module.scss";
import { categories } from "./data";

export const LandingPage = () => {
  return (
    <>
      <header className={styles.header}>
        <Image
          src="/site-header.jpg"
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

      <section className={styles.section}>
        <header>
          <h2 className={stylizedFont.className}>Products</h2>
          <p>Explore all the delicious options we have to offer.</p>
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
              <span className={`${styles.fancyName} ${brandFont.className}`}>
                {c.name}
              </span>
              <span className={styles.normalName}>{c.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
