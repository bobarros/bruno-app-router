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
import DESIGN_DATA from "@/components/skills/design/content";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Design() {
  return (
    <section className={styles.commonBlock} id="design">
      <div className={styles.skillsBlock}>
        <h2 className={styles.subTitle}>Design/Planning</h2>
        <p className={styles.paragraph}>
          Here is the group that helps me bring a project to life, whether
          it&apos;s before starting development or later on.
        </p>
        <div className={styles.partners}>
          {DESIGN_DATA.map((item, index) => {
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
