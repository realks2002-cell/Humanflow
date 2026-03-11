import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "제일비엠시",
  description: "대한민국 HR서비스 리딩 기업 제일비엠시",
  openGraph: {
    title: "제일비엠시",
    description: "사람이 제일입니다 - 대한민국 HR서비스 리딩 기업",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
