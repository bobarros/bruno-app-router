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
import DEVELOPER_DATA from "@/components/skills/developer/content";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Developer() {
  return (
    <section className={styles.commonBlock} id="developer">
      <div className={styles.skillsBlock}>
        <h2 className={styles.subTitle}>Developing</h2>
        <p className={styles.paragraph}>
          When building, several paths can be chosen. Here are the resources
          that assist me on this journey.
        </p>
        <div className={styles.partners}>
          {DEVELOPER_DATA.map((item, index) => {
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
