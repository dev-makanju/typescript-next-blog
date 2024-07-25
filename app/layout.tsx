import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/navigations/Header";
import Footer from "@/components/navigations/Footer";
import "./globals.css";
import { NextAuthProvider } from '../components/provider/Provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | TechNews',
    default: 'TechNews',
  },
  description: "A blog website showcasing all the trending news in tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="lg:max-w-[900px] lg:px-16 mx-auto py-8 shadow-xl min-h-screen flex flex-col px-8"> 
            <Header/>
            <div className="flex-auto">
              {children}
            </div>
            <Footer/>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
