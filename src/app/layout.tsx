import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { VocabularyProvider } from "@/context/VocabularyContext";
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
  title: "LangTok — Learn languages in vertical video",
  description:
    "TikTok-style language learning feed with interactive subtitles and quick quizzes.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <VocabularyProvider>{children}</VocabularyProvider>
      </body>
    </html>
  );
}
