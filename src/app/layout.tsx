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
  title: "김도현 · Frontend Developer",
  description:
    "복잡한 요구사항을 가볍고 안정적인 사용자 경험으로 옮기는 6년차 프론트엔드 개발자 김도현의 포트폴리오.",
  openGraph: {
    title: "김도현 · Frontend Developer",
    description:
      "복잡한 요구사항을 가볍고 안정적인 사용자 경험으로 옮기는 프론트엔드 개발자 포트폴리오.",
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
