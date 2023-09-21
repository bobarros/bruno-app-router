// Styles
import "./global.scss";

// Fonts
import { libreBaskerville } from "./fonts";

// React
import { ReactNode } from "react";

// Local Components
import Footer from "@/components/footer";
import Nav from "@/components/nav";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={libreBaskerville.className}>
        <Nav />
        <main className="container-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
