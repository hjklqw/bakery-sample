import { baseFont } from "@/common/fonts";
import "@/common/global.scss";

export const metadata = {
  title: "Imaginary Bakery",
  description: "A sample website for a delicious bakery.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={baseFont.className}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
