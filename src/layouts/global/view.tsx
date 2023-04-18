import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import styles from "./styles.module.scss";

import { Nav } from "./nav";
import { hours } from "./data";
import { brandFont, stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/wheatLogo";

type Props = {
  children: React.ReactNode;
};

export const GlobalLayout = ({ children }: Props) => (
  <div className={styles.wrapper}>
    <div className={styles.banner}>
      New products available for Mother&apos;s Day 2023!
      <Link href="/special">Shop now! &rarr;</Link>
    </div>
    <Nav />

    <main>{children}</main>

    <footer className={styles.footer}>
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
    </footer>

    <section className={styles.copyright}>© Michelle Poon, 2023</section>
  </div>
);
