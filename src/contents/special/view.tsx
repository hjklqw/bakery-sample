import Image from "next/image";

import { ContentSection } from "@/common/contentSection";
import { Gallery } from "@/contents/productCategory";

import styles from "./styles.module.scss";

import { newItems, specialCategorySlug } from "./data";

export const SpecialPage = () => (
  <div className={styles.pageWrapper}>
    <ContentSection headerText="A Special Offer">
      <div className={styles.offer}>
        <Image
          src="/special-header.jpg"
          fill
          alt=""
          style={{ objectPosition: "50% 90%" }}
        />
        <p className={styles.header}>20% off</p>
        <p>
          Get <b>20% off</b> when you spend over $50 this{" "}
          <b>May 12th - 14th!</b>
        </p>
        <p>No coupon needed&mdash;just come in-store!</p>
      </div>
    </ContentSection>

    <ContentSection headerText="A Special Gift">
      <div className={styles.gift}>
        <div className={styles.offer}>
          <Image
            src="/special-header.jpg"
            fill
            alt=""
            style={{ transform: "scaleX(-1)", objectPosition: "50% 10%" }}
          />
          <p className={styles.header}>Free rose</p>
          <p>
            On <b>May 14th only</b>, get a <b>free rose</b> with your order when
            you spend $80 or more! (One per customer)
          </p>
          <p>Again, no coupon needed&mdash;just come in-store!</p>
        </div>
        <Image src="/rose.jpg" alt="Rose" priority width={600} height={900} />
      </div>
    </ContentSection>

    <ContentSection headerText="New Products">
      <p>
        <b>Exclusive</b> to the week of May 14th, we&apos;ve added the following
        three new items!
      </p>
      <p>
        Click on an item to view its description, ingredients, and possible
        allergens:
      </p>
      <div className={styles.galleryWrapper}>
        <Gallery category={{ items: newItems, slug: specialCategorySlug }} />
      </div>
    </ContentSection>
  </div>
);
