import { ReactNode } from "react";


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <div>
            {/* <Header /> */}
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
      </body>
    </html>
  );
}
