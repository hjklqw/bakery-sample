import { stylizedFont } from "@/common/fonts";

import styles from "./styles.module.scss";

type Props = {
  text: string | JSX.Element;
  author: string;
  className?: string;
};

export const Quote = ({ text, author, className }: Props) => (
  <figure
    className={`${styles.wrapper} ${stylizedFont.className} ${className || ""}`}
  >
    <span className={styles.bg} />
    <span className={styles.bg} />
    <blockquote>{text}</blockquote>
    <figcaption>{author}</figcaption>
  </figure>
);
