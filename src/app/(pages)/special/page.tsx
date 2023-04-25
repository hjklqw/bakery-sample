import { PageContents } from "@/layouts/page/contents";
import { PageHeader } from "@/layouts/page/header";

import { SpecialPage } from "@/contents/special";

export default function Page() {
  return (
    <>
      <PageHeader
        title="Mother's Day"
        headerImage={{
          src: "/special-header.jpg",
          basePosY: 50,
          filterStyle: "brightness(80%) contrast(80%)",
        }}
        wheatLogoAdjustments={{ marginTop: "-2rem" }}
      />
      <PageContents>
        <SpecialPage />
      </PageContents>
    </>
  );
}
