import { CSSProperties } from "react";

import { brandFont } from "@/common/fonts";
import { WheatLogo } from "@/common/assets/wheatLogo";
import { PageFrame } from "@/common/assets/pageFrame";
import { HeaderImage, HeaderImageProps } from "@/common/headerImage";

import styles from "./styles.module.scss";

type Props = {
  title: string;
  headerImage: HeaderImageProps;
  wheatLogoAdjustments?: CSSProperties;
};

export const PageHeader = ({
  title,
  headerImage,
  wheatLogoAdjustments,
}: Props) => (
  <header className={styles.header}>
    <HeaderImage {...headerImage} />
    <h1 className={brandFont.className}>{title}</h1>
    <WheatLogo className={styles.wheat} style={wheatLogoAdjustments} />
    <PageFrame className={styles.pageFrame} />
  </header>
);
