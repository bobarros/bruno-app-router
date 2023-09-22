// Style
import styles from "@/app/skills/styles.module.scss";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Alement({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a className={styles.partner} target="_blank" rel="noopener" href={href}>
      <span>#</span>
      {" " + children}
    </a>
  );
}
