import { stylizedFont } from "@/common/fonts";
import { ProductCategory } from "@/common/models";

import styles from "./styles.module.scss";

import { Gallery } from "./gallery";

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
    <Gallery category={{ items: category.items, slug: category.slug }} />
  </div>
);
