import Image from "next/image";

import { stylizedFont } from "@/common/fonts";
import { ProductCategory } from "@/common/models";

import styles from "./styles.module.scss";

type Props = {
  category: ProductCategory;
};

export const ProductCategoryPage = ({ category }: Props) => (
  <div className={styles.pageWrapper}>
    <header className={styles.header}>
      <h2 className={stylizedFont.className}>{category.tagline}</h2>
      {category.description.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </header>
    <div className={styles.gallery}>
      {category.items.map((item) => (
        <article key={item.slug}>
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
    </div>
  </div>
);
