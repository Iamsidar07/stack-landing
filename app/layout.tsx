import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Stack Auth",
  description: "Stack Auth is the open-source Auth0 alternative",
  openGraph: {
    title: "Stack Auth — the open-source Auth0 &amp; Clerk alternativ",
    description: "Stack Auth is the open-source Auth0 alternative",
    url: "https://stack-auth.com",
    siteName: "Stack Auth",
    locale: "en_US",
    images: [
      {
        url: "https://stack-auth.com/images/login.png",
        width: 848,
        height: 1086,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black selection:bg-zinc-800/70 selection:text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
