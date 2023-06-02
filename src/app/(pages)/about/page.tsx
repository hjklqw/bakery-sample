import { PageContents } from "@/layouts/page/contents";
import { PageHeader } from "@/layouts/page/header";

import { AboutPage } from "@/contents/about";

export default function Page() {
  return (
    <>
      <PageHeader
        title="About"
        headerImage={{
          src: "/about-header.jpg",
          filterStyle: "contrast(60%)",
        }}
      />
      <PageContents maxWidthOverride="1500px">
        <AboutPage />
      </PageContents>
    </>
  );
}
