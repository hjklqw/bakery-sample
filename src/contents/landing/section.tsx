import { stylizedFont } from "@/common/fonts";
import { WheatLogo } from "@/common/wheatLogo";

import styles from "./styles.module.scss";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  isHighlighted?: boolean;
};

export const Section = ({
  title,
  subtitle,
  children,
  isHighlighted,
}: Props) => (
  <section
    className={`${styles.section} ${isHighlighted ? styles.highlighted : ""}`}
  >
    <header>
      <h2 className={stylizedFont.className}>{title}</h2>
      <p>
        <WheatLogo />
        {subtitle}
      </p>
    </header>
    {children}
  </section>
);
