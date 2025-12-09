import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";
import { Toaster } from "sonner";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EXA MED",
  description: "EXA MED - ผู้นำด้านเวชศาสตร์ป้องกันเหนือระดับ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${ibmPlexSansThai.variable}`}>
      <body
        className={`antialiased bg-neutral-100 text-neutral-800 transition-all duration-300`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}