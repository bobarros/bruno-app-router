// Styles
import "./global.scss";

// Fonts
import { libreBaskerville } from "./fonts";

// React
import { ReactNode } from "react";

// Local Components
import Footer from "@/stories/shared/Footer";
import Navigation from "@/stories/shared/Navigation";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={libreBaskerville.className}>
        <Navigation />
        <main className="container-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
