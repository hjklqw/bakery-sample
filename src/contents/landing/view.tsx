import Image from "next/image";
import Link from "next/link";

import { brandFont, stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/wheatLogo";

import styles from "./styles.module.scss";
import { categories, commitments } from "./data";

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
          <h2 className={stylizedFont.className}>Our products</h2>
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

      <section className={`${styles.section} ${styles.highlighted}`}>
        <header>
          <h2 className={stylizedFont.className}>Our commitment to you</h2>
          <p>Our imaginary values, bringing you the best product possible.</p>
        </header>
        <div className={styles.commitments}>
          {commitments.map((c) => (
            <div key={c.name}>
              <span className={styles.border} />
              <div className={styles.icon}>{c.icon}</div>
              <p className={styles.valueName}>{c.name}</p>
              <p className={styles.valueDesc}>{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header>
          <h2 className={stylizedFont.className}>Our story</h2>
          <p>How we got here, why we&apos;re baking, and the road ahead.</p>
        </header>
        <div className={styles.story}>
          <section>
            <p>
              Michelle Poon founded this bakery on April of 2023 when she was
              thinking about samples to put onto her portfolio. And what better
              than to create something that involves hours of looking through
              stock images of delicious bread?
            </p>
            <p>
              Bread is great. Here&apos;s another sentence to pad out this
              paragraph. Not using the patented placeholder text makes things
              look more realistic, though most likely no one will ever read
              this. Soft, toasted bread with a chewy texture is the best.
            </p>
            <Link href="/about">
              <button type="button">Read more &rarr;</button>
            </Link>
          </section>
          <section className={styles.storyImageContainer}>
            <Image src="/story.jpg" alt="Story" fill />
          </section>
        </div>
      </section>
    </>
  );
};
