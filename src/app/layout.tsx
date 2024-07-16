import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ErrorBoundary from "@/lib/ErrorBoundary";
import AppProvider from "@/context/app-provider";
import { Toaster } from 'sonner'
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
        <ErrorBoundary fallback='There was an error'>
          <AppProvider>
            <Header />
              {children}
              <Toaster />
            <Footer />
          </AppProvider>    
        </ErrorBoundary>
      </body>
    </html>
  );
}
