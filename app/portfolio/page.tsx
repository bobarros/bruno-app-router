// Next
import type { Metadata } from "next";
import Image from "next/image";

// Fonts
import { jetBrain } from "@/app/fonts";

// Types
interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  stack: string;
  link: string;
  reference: string;
  referenceLink: string;
}

// Styles
import styles from "@/styles/style.module.scss";

// Content
import PORTFOLIO_DATA from "@/content/portfolio";

/*--------------------------------------------------------------------*/

/**
 * Page
 */

export const metadata: Metadata = {
  title: "Bruno's Portfolio",
  description: "Previous work that Bruno did.",
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
    url: "https://brunobarros.dev/portfolio",
    title: "brunobarros.dev",
    description: "Previous work that Bruno did.",
    siteName: "brunobarros.dev",
    images: [{ url: "/img/favicon.png", width: 128, height: 128 }],
  },
};

export default function Portfolio() {
  return (
    <section className={styles.commonBlock} id="projetos">
      <div className={styles.skillsBlock}>
        <h1 className={`${styles.pageName} ${jetBrain.className}`}>
          Portfolio
        </h1>
        <div className={styles.centerParagraph}>
          <p className={styles.paragraph}>
            For more up-to-date work, please check out my{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/bobarros"
            >
              GitHub profile
            </a>
            .
          </p>
        </div>
        <div>
          {PORTFOLIO_DATA.map((item: PortfolioCardProps, index: number) => {
            const {
              link,
              image,
              title,
              description,
              reference,
              stack,
              referenceLink,
            } = item;
            return (
              <div className={styles.portfolioCard} key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Image
                    width={900}
                    height={540}
                    src={image}
                    alt="Bruno's Portfolio"
                  />
                </a>
                <div className={styles.portfolioCardData}>
                  <p
                    className={`${styles.portfolioCardTitle} ${jetBrain.className}`}
                  >
                    {title}
                  </p>
                  <p className={styles.portfolioCardDescription}>
                    {description}
                  </p>
                  <p className={styles.portfolioCardDescription}>{stack}</p>
                  <p>
                    <span>Reference: </span>
                    <a
                      href={referenceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {reference}
                    </a>
                  </p>
                  <p className={styles.portfolioLink}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Current Live Version
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
