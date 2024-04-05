import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mabica",
  description: `Mabica (Mari Bikin Cerita) adalah perkumpulan orang gabut yang mungkin membuat cerita supaya tidak "rin udah makan" atau "sehat?" saat bermain discord.`,
  icons: {
    icon: '/mabica-icon.png',
    shortcut: '/mabica-icon.png',
    apple: '/mabica-icon.png',
    other: {
      rel: 'mabica-icon',
      url: '/mabica-icon.png',
    },
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
