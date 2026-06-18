import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Altman · OpenAI — Investment",
  description:
    "OpenAI 공동 창업자이자 CEO 샘 알트먼. 기업가치 $852B, 주간 900M+ 사용자, ARR $25B+. 안전한 AGI를 향한 다음 시대를 함께 만들 투자 파트너를 찾습니다.",
  openGraph: {
    title: "Sam Altman · OpenAI — Investment",
    description:
      "안전한 AGI를 향한 다음 시대. OpenAI 투자·파트너십 제안을 환영합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
