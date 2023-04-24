import Image from "next/image";

import { Modal } from "@/common/modal";
import { Product } from "@/common/models";
import { brandFont } from "@/common/fonts";

import styles from "./styles.module.scss";

type Props = {
  product: Product;
  imageSrc: string;
  onClose: () => void;
};

export const ProductModal = ({ product, imageSrc, onClose }: Props) => (
  <Modal onClose={onClose}>
    <div className={styles.modalContents}>
      <Image src={imageSrc} width={500} height={500} alt={product.name} />
      <section className={styles.info}>
        <span className={`${styles.fancyName} ${brandFont.className}`}>
          {product.name}
        </span>
        <span className={styles.name}>{product.name}</span>

        <label>Price</label>
        <span className={styles.price}>{product.price}</span>

        <label>Description</label>
        <span className={styles.description}>
          {product.description || "Coming soon!"}
        </span>

        <label>Ingredients</label>
        <span className={styles.description}>
          {product.ingredients || "Coming soon!"}
        </span>

        {product.allergens && (
          <>
            <label>Allergens</label>
            <span className={styles.description}>{product.allergens}</span>
          </>
        )}
      </section>
    </div>
  </Modal>
);
