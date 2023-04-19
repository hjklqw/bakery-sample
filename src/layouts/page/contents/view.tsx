import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  maxWidthOverride?: string;
};

export const PageContents = ({ children, maxWidthOverride }: Props) => (
  <div className={styles.container} style={{ maxWidth: maxWidthOverride }}>
    {children}
  </div>
);
