// Icons
import BrunoAvatar from "@/svg/BrunoAvatar";

// Styles
import styles from "@/components/home/style.module.scss";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const IndexHeader = () => {
  return (
    <section className={styles.header}>
      <div className={styles.textWrap}>
        <p className={styles.strong}>Hi, I&apos;m Bruno Barros</p>
        <p className={styles.light}>
          a Web Developer that finds joy in bulding great things.
        </p>
      </div>
      <div className={styles.avatar}>
        <BrunoAvatar />
      </div>
    </section>
  );
};

export default IndexHeader;
