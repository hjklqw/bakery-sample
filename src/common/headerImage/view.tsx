import styles from "./styles.module.scss";

export type Props = {
  src: string;
  filterStyle?: string;
};

/** Adds a parallax effect to the header image. */
export const HeaderImage = ({ src, filterStyle }: Props) => {
  return (
    <div
      className={styles.bgImage}
      style={{
        filter: filterStyle,
        backgroundImage: `url('${src}')`,
      }}
    />
  );
};
