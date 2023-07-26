import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.scss";

import { brandFont, stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/assets/wheatLogo";
import { PageFrame } from "@/common/assets/pageFrame";
import { LayoutProps } from "@/common/models";
import { Routes } from "@/common/routes";
import { TestId } from "@/common/testIds";

import { Nav } from "./nav";
import { NewsletterSubscription } from "./newsletterSubscription";
import { SocialLink } from "./socialLink";
import { hours } from "./data";

export const GlobalLayout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <div className={styles.banner} data-testid={TestId.SPECIAL_BANNER}>
      New products available for Mother&apos;s Day 2023!
      <Link href={Routes.SPECIAL}>Shop now! &rarr;</Link>
    </div>
    <Nav />

    <main>{children}</main>

    <footer className={styles.footer}>
      <PageFrame className={styles.pageFrame} />

      <section className={styles.logoSection}>
        <p className={`${brandFont.className} ${styles.shopName}`}>
          Imaginary Bakery
        </p>
        <p className={`${stylizedFont.className} ${styles.subtitle}`}>
          Smells like a dream.
        </p>
        <WheatLogo className={styles.wheat} />
      </section>

      <section>
        <p className={styles.header}>Hours</p>
        <div>
          {hours.map((h) => (
            <div key={h.date} className={styles.row}>
              <span>{h.date}</span>
              <span>{h.times}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={styles.header}>Location</p>
        <div className={styles.row}>Imaginary Bakery Ltd.</div>
        <div className={styles.row}>12345 Somewhere Drive</div>
        <div className={styles.row}>Delicious City, SW A1B 2C3</div>
        <div className={styles.row}>Possibly Canada</div>
        <div className={styles.spacer} />
        <div className={styles.row}>
          <BsTelephone strokeWidth={0.5} />
          <a href="tel:+13214567890">+1 321-456-7890</a>
        </div>
        <div className={styles.row}>
          <HiOutlineMail fontSize="1.1rem" />
          <a href="mailto:imaginary_bakery@email.com">
            imaginary_bakery@email.com
          </a>
        </div>
      </section>

      <section>
        <NewsletterSubscription />
        <div className={styles.social}>
          <SocialLink
            href="https://michellepoon.ca/"
            name="Portfolio Home"
            icon={FaGlobe}
          />
          <SocialLink
            href="https://github.com/hjklqw/bakery-sample"
            name="Github"
            icon={FaGithub}
          />
          <SocialLink
            href="https://www.linkedin.com/in/michellepoon-dev"
            name="LinkedIn"
            icon={FaLinkedin}
          />
        </div>
      </section>
    </footer>

    <section className={styles.copyright}>© Michelle Poon, 2023</section>
  </div>
);
