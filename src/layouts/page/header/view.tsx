import { brandFont } from "@/common/fonts";
import { WheatLogo } from "@/common/assets/wheatLogo";
import { PageFrame } from "@/common/assets/pageFrame";
import { HeaderImage, HeaderImageProps } from "@/common/headerImage";

import styles from "./styles.module.scss";

type Props = {
  title: string;
  headerImage: HeaderImageProps;
};

export const PageHeader = ({ title, headerImage }: Props) => (
  <header className={styles.header}>
    <HeaderImage {...headerImage} />
    <h1 className={brandFont.className}>{title}</h1>
    <WheatLogo className={styles.wheat} />
    <PageFrame className={styles.pageFrame} />
  </header>
);
