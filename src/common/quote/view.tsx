import { stylizedFont } from "@/common/fonts";

import styles from "./styles.module.scss";

type Props = {
  text: string | JSX.Element;
  author: string;
  className?: string;
  noBackground?: boolean;
};

export const Quote = ({ text, author, className, noBackground }: Props) => (
  <figure
    className={`${styles.wrapper} ${stylizedFont.className} ${
      noBackground ? styles.noBackground : ""
    } ${className || ""}`}
  >
    {!noBackground && (
      <>
        <span className={styles.bg} />
        <span className={styles.bg} />
      </>
    )}
    <blockquote>{text}</blockquote>
    <figcaption>{author}</figcaption>
  </figure>
);
