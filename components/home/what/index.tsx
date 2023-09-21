// Next
import Link from "next/link";

// Styles
import styles from "@/components/home/style.module.scss";

// Local Components
import ImageHandle from "@/components/home/what/image-handle";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const What = () => {
  return (
    <section className={styles.whatSection}>
      <div className={styles.textBlock}>
        <h2 className={styles.initialText}>How can I help you?</h2>
        <p className={styles.paragraph}>
          Curious about what I&apos;m working on or did in the past?
        </p>
        <p className={styles.paragraph}>
          Go ahead and take a look at my porfolio. Just click on the image or
          button below.
        </p>
      </div>
      <Link href="/portfolio" passHref>
        <ImageHandle />
      </Link>
      <div className={styles.more}>
        <Link href="/portfolio">My Portfolio</Link>
      </div>
    </section>
  );
};

export default What;
