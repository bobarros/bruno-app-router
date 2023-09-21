// Next
import type { Metadata } from "next";

// Components

import IndexHeader from "@/components/home/header";
import What from "@/components/home/what";
import How from "@/components/home/how";

/*--------------------------------------------------------------------*/

/**
 * Page
 */

export const metadata: Metadata = {
  title: "brunobarros.dev - Giving life to online interfaces!",
  description: "What you need to know about Bruno Barros",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Jamstack websites",
    "Software engineer",
    "Bruno Barros",
    "Online interfaces",
  ],
  authors: [{ name: "Bruno Barros", url: "https://github.com/bobarros" }],
  openGraph: {
    type: "website",
    url: "https://brunobarros.dev",
    title: "brunobarros.dev",
    description: "What you need to know about Bruno Barros",
    siteName: "brunobarros.dev",
    images: [{ url: "/img/favicon.png", width: 128, height: 128 }],
  },
};

export default function Home() {
  return (
    <>
      <IndexHeader />
      <What />
      <How />
    </>
  );
}
