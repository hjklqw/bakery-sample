import { stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/assets/wheatLogo";

import styles from "./styles.module.scss";

type Props = {
  headerText: string;
  children: React.ReactNode;
  className?: string;
};

export const ContentSection = ({ headerText, children, className }: Props) => (
  <section className={`${styles.section} ${className || ""}`}>
    <header>
      <h2 className={stylizedFont.className}>
        <WheatLogo />
        {headerText}
        <WheatLogo />
      </h2>
    </header>
    {children}
  </section>
);
