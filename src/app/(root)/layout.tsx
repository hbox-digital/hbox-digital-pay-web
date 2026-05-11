import Header from "@/components/header/header";
import Footer from "@/components/home/Footer";
import { ReactNode } from "react";
// import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
