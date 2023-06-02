import { PageContents } from "@/layouts/page/contents";
import { PageHeader } from "@/layouts/page/header";

import { ContactPage } from "@/contents/contact";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Contact"
        headerImage={{
          src: "/contact-header.jpg",
          filterStyle: "contrast(60%)",
        }}
      />
      <PageContents maxWidthOverride="1000px">
        <ContactPage />
      </PageContents>
    </>
  );
}
