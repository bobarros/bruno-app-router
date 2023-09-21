// Next
import Link from "next/link";

// Styles
import styles from "@/components/home/style.module.scss";

// Local Components

import CssSVG from "@/svg/CssSVG";
import EltySVG from "@/svg/EltySVG";
import FigmaSVG from "@/svg/FigmaSVG";
import HtmlSVG from "@/svg/HtmlSVG";
import JsSVG from "@/svg/JsSVG";
import MongoSVG from "@/svg/MongoSVG";
import NextSVG from "@/svg/NextSVG";
import PhotoShopSVG from "@/svg/PhotoShopSVG";

// Fonts
import { jetBrain } from "@/app/fonts";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const How = () => {
  return (
    <section className={styles.howSection}>
      <div className={styles.textBlock}>
        <h2 className={`${styles.initialText} ${jetBrain.className}`}>The cards up my sleeve</h2>
        <div className={styles.solutions}>
          <div className={styles.group}>
            <div className={styles.groupIcons}>
              <HtmlSVG />
              <CssSVG />
              <PhotoShopSVG />
              <NextSVG />
              <MongoSVG />
              <JsSVG />
              <FigmaSVG />
              <EltySVG />
            </div>
          </div>
        </div>
        <p className={styles.paragraph}>
          I like to learn and there&apos;s a lot that I can do. Unfortunately, there
          are way more things that I just can&apos;t do.
        </p>
        <p className={styles.paragraph}>
          Some clients like to go more extensive and know what features I am
          familiar with. Here it is!
        </p>
      </div>
      <div className={styles.more}>
        <Link href="/skills">Skills</Link>
      </div>
    </section>
  );
};

export default How;
