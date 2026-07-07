import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// next/font — фонтыг build үед татаж өөрийн сервер дээрээс тараадаг тул
// Google руу нэмэлт хүсэлт явахгүй, хуудас "үсрэлгүй" ачаалагдана.
// Inter фонтод "cyrillic" subset заавал хэрэгтэй — үгүй бол монгол
// кирилл үсэг өөр (fallback) фонтоор харагдана.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

// Mono фонт — төслийн картан дээрх технологийн шошгод хэрэглэнэ.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata — Next.js үүнийг <head> доторх <title>, <meta> болгож
// хувиргана. Google хайлт, Facebook share дээр энэ текст харагдана.
export const metadata: Metadata = {
  // metadataBase — сайтын жинхэнэ хаяг. Facebook, Twitter дээр share
  // хийхэд зураг, линкүүд бүрэн (absolute) URL болж зөв харагдана.
  metadataBase: new URL("https://amirda.site"),
  title: "Amirda",
  description:
    "Personal portfolio of Amirda, a software engineer based in Ulaanbaatar, Mongolia.",
};

// RootLayout — бүх хуудсыг ороодог хамгийн гадна талын бүрхүүл.
// <html>, <body> tag-ууд зөвхөн энд л бичигдэнэ.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* flex flex-col + main дээрх flex-1 хослол: контент багатай үед ч
          footer дэлгэцийн доод хэсэгт наалдаж байрлана */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
