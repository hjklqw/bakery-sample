import styles from "./styles.module.scss";

export type Props = {
  basePosY: number;
  src: string;
  filterStyle?: string;
};

/** Adds a parallax effect to the header image. */
export const HeaderImage = ({ src, basePosY, filterStyle }: Props) => {
  return (
    <div
      className={styles.bgImage}
      style={{
        filter: filterStyle,
        backgroundImage: `url('${src}')`,
        backgroundPosition: `50% ${basePosY}%`,
      }}
    />
  );
};
