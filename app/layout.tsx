import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600"],
});

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
  twitter: {
    title: "Stack Auth — the open-source Auth0 &amp; Clerk alternativ",
    description: "Stack Auth is the open-source Auth0 alternative",
    card: "summary_large_image",
    images: [
      {
        url: "https://stack-auth.com/images/login.png",
        width: 848,
        height: 1086,
      },
    ],
    site: "https://stack-auth.com",
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
        className={`${sora.className} antialiased bg-black selection:bg-zinc-800/70 selection:text-zinc-100 relative overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
