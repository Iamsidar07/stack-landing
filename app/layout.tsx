import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Sora } from "next/font/google";

const inter = Sora({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black selection:bg-zinc-800/70 selection:text-white relative overflow-x-hidden`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
