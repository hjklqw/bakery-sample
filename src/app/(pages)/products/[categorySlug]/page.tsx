import { redirect } from "next/navigation";

import { categories } from "@/common/data";
import { Routes } from "@/common/routes";
import { PageContents } from "@/layouts/page/contents";
import { PageHeader } from "@/layouts/page/header";

import { ProductCategoryPage } from "@/contents/productCategory";

type Params = {
  categorySlug: string;
};

type Props = {
  params: Params;
};

export default function Page({ params: { categorySlug } }: Props) {
  const categoryData = categories.find((c) => c.slug === categorySlug);

  if (categoryData === undefined) {
    redirect(Routes.PRODUCTS);
  }

  return (
    <>
      <PageHeader
        title={categoryData.name}
        headerImage={{
          src: categoryData.headerImageUrl,
          filterStyle:
            categoryData.headerImageSettings?.filterStyle || "contrast(50%)",
        }}
      />
      <PageContents maxWidthOverride="1200px">
        <ProductCategoryPage category={categoryData} />
      </PageContents>
    </>
  );
}

export async function generateStaticParams(): Promise<Params[]> {
  return categories.map((c) => ({
    categorySlug: c.slug,
  }));
}
