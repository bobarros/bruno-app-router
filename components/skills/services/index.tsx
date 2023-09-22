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
import SERVICES_DATA from "@/components/skills/services/content";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Services() {
  return (
    <section className={styles.commonBlock} id="services">
      <div className={styles.skillsBlock}>
        <h2 className={styles.subTitle}>Host/Services</h2>
        <p className={styles.paragraph}>
          When it comes to providing services, you need speed, security, and
          availability.
        </p>
        <div className={styles.partners}>
          {SERVICES_DATA.map((item, index) => {
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
