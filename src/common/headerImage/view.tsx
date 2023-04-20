"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";

const SCROLL_COMPRESSION_FACTOR = 27;

export type Props = {
  basePosY: number;
  src: string;
  filterStyle?: string;
};

/** Adds a parallax effect to the header image while keeping NextJS optimization. */
export const HeaderImage = ({ src, basePosY, filterStyle }: Props) => {
  const [objectPosY, setObjectPosY] = useState<number>(basePosY);

  const onScroll = useCallback(
    (e: Event) => {
      const target = e.target as HTMLBodyElement;
      setObjectPosY(() => {
        const newValue =
          basePosY - target.scrollTop / SCROLL_COMPRESSION_FACTOR;
        if (newValue > 0) return newValue;
        return 0;
      });
    },
    [basePosY]
  );

  useEffect(() => {
    const body = document.getElementsByTagName("body")?.[0];
    body.addEventListener("scroll", onScroll);
    return () => body.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <Image
      src={src}
      alt="header"
      priority
      fill
      className={styles.bgImage}
      style={{ objectPosition: `50% ${objectPosY}%`, filter: filterStyle }}
    />
  );
};
