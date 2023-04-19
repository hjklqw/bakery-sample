import { LayoutProps } from "@/common/models";
import { baseFont } from "@/common/fonts";
import "@/common/global.scss";

import { GlobalLayout } from "@/layouts/global";

export const metadata = {
  title: "Imaginary Bakery",
  description: "A sample website for a delicious bakery.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={baseFont.className}>
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
