// Next
import type { Metadata } from "next";

// Local Components

import Design from "@/components/skills/design";
import Developer from "@/components/skills/developer";
import Intro from "@/components/skills/intro";
import Evaluation from "@/components/skills/evaluation";
import Mentioned from "@/components/skills/mentioned";
import Services from "@/components/skills/services";
import Thanks from "@/components/skills/thanks";

/*--------------------------------------------------------------------*/

/**
 * Page
 */

export const metadata: Metadata = {
  title: "Bruno's Skills",
  description: "Most skills that I'm comfortable with.",
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
    url: "https://brunobarros.dev/skilss",
    title: "brunobarros.dev",
    description: "Previous work that Bruno did.",
    siteName: "brunobarros.dev",
    images: [{ url: "/img/favicon.png", width: 128, height: 128 }],
  },
};

export default function Habilidades() {
  return (
    <>
      <Intro />
      <Design />
      <Developer />
      <Services />
      <Evaluation />
      <Mentioned />
      <Thanks />
    </>
  );
}
