// import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/home/Footer";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";
// import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.hboxpay.com"),

  title: {
    default: "HBOX Pay | Smart POS & Payment Platform for Businesses",
    template: "%s | hbox pay",
  },

  description:
    "Manage payments, POS, inventory, analytics, and customer operations with hbox pay. Built for retail, restaurants, cafes, salons, and growing businesses.",

  verification: {
    google: "fgKcEh2ocs8zJRcyH-yaqwa0jUsXLpDk5LM5_qVOMfc",
  },

  keywords: [
    "hbox pay",
    "POS system",
    "payment platform",
    "inventory management",
    "business analytics",
    "restaurant POS",
    "retail POS",
    "cafe management",
    "salon software",
    "business payments",
  ],

  alternates: {
    canonical: "https://www.hboxpay.com",
  },

  openGraph: {
    title: "HBOX Pay | Smart POS & Payment Platform for Businesses",

    description:
      "Manage payments, POS, inventory, analytics, and customer operations with hbox pay.",

    url: "https://www.hboxpay.com",

    siteName: "hbox pay",

    images: [
      {
        url: "https://cdn.hboxdigital.com/public/hbox-pay/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "hbox pay",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "hbox pay | Smart POS & Payment Platform for Businesses",

    description:
      "Manage payments, POS, inventory, analytics, and customer operations with hbox pay.",

    images: ["https://cdn.hboxdigital.com/public/hbox-pay/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
           <body className={`${inter.variable} antialiased`}>
        {/* Schema.org */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "hbox pay",
              url: "https://www.hboxpay.com",
              logo: "https://cdn.hboxdigital.com/public/hbox-pay/images/logo.png",
              sameAs: ["https://www.linkedin.com/company/hbox-digital"],
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
