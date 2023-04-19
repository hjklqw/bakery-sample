import Image from "next/image";

import { brandFont } from "@/common/fonts";
import { WheatLogo } from "@/common/wheatLogo";

import styles from "./styles.module.scss";

type Props = {
  title: string;
  imageSrc: string;
};

export const PageHeader = ({ title, imageSrc }: Props) => (
  <header className={styles.header}>
    <Image
      src={imageSrc}
      alt="header"
      priority
      fill
      className={styles.bgImage}
    />
    <h1 className={brandFont.className}>{title}</h1>
    <WheatLogo className={styles.wheat} />
  </header>
);
