import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Script from "next/script";

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
    <html lang="th" className={ibmPlexSansThai.variable}>
      <body className="antialiased bg-neutral-100 text-neutral-800 transition-all duration-300">
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
        </LanguageProvider>

        {/* 🚧 ดัก error จากสคริปต์ Google Translate ไม่ให้เด้ง overlay */}
        <Script id="suppress-google-translate-error" strategy="afterInteractive">
          {`
            window.addEventListener(
              'error',
              function (event) {
                try {
                  const isGoogleTranslate =
                    event?.filename &&
                    event.filename.includes('translate_a/element.js');

                  const isRemoveChildError =
                    event?.message &&
                    event.message.includes('removeChild');

                  if (isGoogleTranslate && isRemoveChildError) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                } catch (_) {}
              },
              true
            );
          `}
        </Script>

        {/* ✅ 1. ฟังก์ชัน init ของ Google Translate */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'th',
                  includedLanguages: 'en,th',
                  autoDisplay: false,
                },
                'google_translate_element'
              );
            }
          `}
        </Script>

        {/* ✅ 2. โหลด script Google Translate */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
