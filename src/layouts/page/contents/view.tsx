import { LayoutProps } from "@/common/models";

import styles from "./styles.module.scss";

export const PageContents = ({ children }: LayoutProps) => (
  <div className={styles.container}>{children}</div>
);
