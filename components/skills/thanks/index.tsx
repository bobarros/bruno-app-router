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
import THANKS_DATA from "@/components/skills/thanks/content";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Thanks() {
  return (
    <section className={styles.commonBlock} id="thanks">
      <div className={styles.skillsBlock}>
        <h2 className={styles.subTitle}>Thanks and Inspirations</h2>
        <p className={styles.paragraph}>
          I would like to mention everyone, but I will give recognition to at
          least the most important individuals who come to mind. These are the
          people who have inspired me, the teachers of courses, and the
          resources I use to learn something new or work on a project.
        </p>
        <div className={styles.partners}>
          {THANKS_DATA.map((item, index) => {
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
