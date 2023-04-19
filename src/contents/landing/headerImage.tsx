"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.scss";

const BASE_IMAGE_POSITION_Y = 80;
const SCROLL_COMPRESSION_FACTOR = 27;

/** Adds a parallax effect to the header image while keeping NextJS optimization. */
export const HeaderImage = () => {
  const [objectPosY, setObjectPosY] = useState<number>(BASE_IMAGE_POSITION_Y);

  const onScroll = useCallback((e: Event) => {
    const target = e.target as HTMLBodyElement;
    setObjectPosY(() => {
      const newValue =
        BASE_IMAGE_POSITION_Y - target.scrollTop / SCROLL_COMPRESSION_FACTOR;
      if (newValue > 0) return newValue;
      return 0;
    });
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName("body")?.[0];
    body.addEventListener("scroll", onScroll);
    return () => body.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <Image
      src="/site-header.jpg"
      alt="header"
      priority
      fill
      className={styles.bgImage}
      style={{ objectPosition: `50% ${objectPosY}%` }}
    />
  );
};
