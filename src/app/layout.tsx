import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Providers} from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StockDat",
  description: "An index based stock screener APP, world's only TTM ROE screener where you can sort stocks by their trailing twelve months Return on Equity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={inter.className} >
        <Providers>
          <Header/>
            {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
