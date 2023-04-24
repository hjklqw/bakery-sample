"use client";

import { useState } from "react";
import Image from "next/image";

import { Product } from "@/common/models";

import styles from "./styles.module.scss";
import { ProductModal } from "./modal";

type Props = {
  category: {
    items: Product[];
    slug: string;
  };
};

export const Gallery = ({ category }: Props) => {
  const [currProduct, setCurrProduct] = useState<Product>();

  return (
    <div className={styles.gallery}>
      {category.items.map((item) => (
        <article key={item.slug} onClick={() => setCurrProduct(item)}>
          <Image
            src={`/${category.slug}/${item.slug}.jpg`}
            width={250}
            height={250}
            alt={item.name}
          />
          <span className={styles.name}>{item.name}</span>
          <span className={styles.price}>{item.price}</span>
        </article>
      ))}

      {currProduct && (
        <ProductModal
          product={currProduct}
          imageSrc={`/${category.slug}/${currProduct.slug}.jpg`}
          onClose={() => setCurrProduct(undefined)}
        />
      )}
    </div>
  );
};
