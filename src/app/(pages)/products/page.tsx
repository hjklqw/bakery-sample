import { PageContents } from "@/layouts/page/contents";
import { PageHeader } from "@/layouts/page/header";

import { ProductsPage } from "@/contents/products";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Products"
        headerImage={{
          src: "/products-header.jpg",
          basePosY: 77,
          filterStyle: "contrast(50%)",
        }}
      />
      <PageContents maxWidthOverride="1200px">
        <ProductsPage />
      </PageContents>
    </>
  );
}
