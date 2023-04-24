import Image from "next/image";
import Link from "next/link";

import { brandFont, stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/assets/wheatLogo";
import { PageFrame } from "@/common/assets/pageFrame";
import { HeaderImage } from "@/common/headerImage";
import { Routes } from "@/common/routes";
import { categories } from "@/common/data";

import styles from "./styles.module.scss";

import { Section } from "./section";
import { commitments } from "./data";

export const LandingPage = () => {
  return (
    <>
      <header className={styles.header}>
        <HeaderImage
          src="/site-header.jpg"
          basePosY={80}
          filterStyle="contrast(68%) brightness(88%)"
        />
        <h1 className={brandFont.className}>Imaginary Bakery</h1>
        <p role="doc-subtitle" className={stylizedFont.className}>
          Smells like a dream.
        </p>
        <WheatLogo className={styles.wheat} />
        <PageFrame className={styles.pageFrame} />
      </header>

      <Section
        title="Our products"
        subtitle="Explore all the delicious options we have to offer."
      >
        <div className={styles.categories}>
          {categories.map((c) => (
            <Link href={`${Routes.PRODUCTS}/${c.slug}`} key={c.name}>
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
      </Section>

      <Section
        title="Our commitment to you"
        subtitle="Our imaginary values, bringing you the best product possible."
        isHighlighted
      >
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
      </Section>

      <Section
        title="Our story"
        subtitle="How we got here, why we're baking, and the road ahead."
      >
        <div className={styles.story}>
          <section className="p">
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
            <Link href={Routes.ABOUT}>
              <button type="button">Read more &rarr;</button>
            </Link>
          </section>
          <section className={styles.storyImageContainer}>
            <Image src="/story.jpg" alt="Story" fill priority />
          </section>
        </div>
      </Section>
    </>
  );
};
