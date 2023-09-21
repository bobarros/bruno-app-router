// Next
import type { Metadata } from "next";

// Styles

import styles from "./styles.module.scss";

/*--------------------------------------------------------------------*/

/**
 * Page
 */

export const metadata: Metadata = {
  title: "Contact - Bruno Barros",
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
    url: "https://brunobarros.dev/contact",
    title: "brunobarros.dev",
    description: "What you need to know about Bruno Barros",
    siteName: "brunobarros.dev",
    images: [{ url: "/img/favicon.png", width: 128, height: 128 }],
  },
};

export default function Contact() {
  return (
    <section className={styles.wrap}>
      <div className={styles.textBlock}>
        <h1 className={styles.headTitle}>Contact</h1>
        <p className={styles.paragraph}>
          I organize my time in a way that makes it possible to achieve maximum
          productivity.
        </p>
        <p className={styles.paragraph}>
          On a typical day, I check my emails only three times: at the beginning
          of the day (8 AM to 9 AM), after lunch (1 PM to 2 PM), and right after
          I finish working (7 PM to 8 PM). My time zone is UTC+2 (Spain).
        </p>
        <p className={styles.paragraph}>
          I will respond to your messages within 24 hours during the times
          mentioned above. Thank you for taking the time to read this, for your
          attention, and for showing interest in my work.
        </p>
        <p className={styles.paragraph}>
          I wish you an excellent day and all the best.
        </p>
        <p className={styles.paragraph}>
          Bruno Barros -{" "}
          <a target="_blank" rel="noopener" href="mailto:bobarros@gmail.com">
            bobarros@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
