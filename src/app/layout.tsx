import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FavoriteBooksProvider from "@/context/favorite-books-context";
import SearchProvider from "@/context/search-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Don't Panic!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100`}>
        <FavoriteBooksProvider>
          <SearchProvider>
            <Header />
              {children}
            <Footer />
          </SearchProvider>
        </FavoriteBooksProvider>
      </body>
    </html>
  );
}
