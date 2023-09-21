// Next

import Link from "next/link";

// Styles
import styles from "@/components/logo/style.module.scss";

// Icons
import LogoSVG from "@/svg/LogoSVG";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className={styles.wrap}>
        logo bob
        <p className={styles.text}>.dev</p>
        <p className={styles.overlay}>logo</p>
        <LogoSVG />
      </div>
    </Link>
  );
}
