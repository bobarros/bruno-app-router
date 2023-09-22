// Style
import styles_skills from "@/app/skills/styles.module.scss";
import styles_shared from "@/styles/style.module.scss";
const styles = {
  ...styles_skills,
  ...styles_shared,
};

// Component Preps
import AElement from "@/components/skills/a-element";

// Content
import MENTIONED_DATA from "@/components/skills/mentioned/content";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Mentioned() {
  return (
    <section className={styles.commonBlock} id="mentioned">
      <div className={styles.skillsBlock}>
        <h2 className={styles.subTitle}>Worth mentioning</h2>
        <p className={styles.paragraph}>
          Resources that have helped me a lot to get here or even assist me in
          my routine. I&apos;ve gathered not only tools but also resources that
          I use to learn something new or run a project.
        </p>
        <div className={styles.partners}>
          {MENTIONED_DATA.map((item, index) => {
            const { url, skill } = item;
            return (
              <AElement key={index} href={url}>
                {skill}
              </AElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
