import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "The Rate Cinema",
  description: "A site that detail about movies and series",
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="font-roboto bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
