import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import BannerItem from './components/BannerItem';
import './reset.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INVEPAL",
  description: "Financial app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
