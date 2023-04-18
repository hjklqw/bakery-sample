import Link from "next/link";

import styles from "./styles.module.scss";

import { Nav } from "./nav";

type Props = {
  children: React.ReactNode;
};

export const GlobalLayout = ({ children }: Props) => (
  <>
    <div className={styles.banner}>
      New products available for Mother&apos;s Day 2023!
      <Link href="/special">Shop now! &rarr;</Link>
    </div>
    <Nav />
    <main>{children}</main>
  </>
);
