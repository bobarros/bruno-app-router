// Style
import styles_skills from "@/app/skills/styles.module.scss";
import styles_shared from "@/styles/style.module.scss";
const styles = {
  ...styles_skills,
  ...styles_shared,
};

// Component Preps
import AElement from "@/components/skills/a-element";

//Content
import EVALUATION_DATA from "@/components/skills/evaluation/content";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Services() {
  return (
    <section className={styles.commonBlock} id="evaluation">
      <div className={styles.skillsBlock}>
        <h2 className={styles.subTitle}>Evaluation and Testing</h2>
        <p className={styles.paragraph}>
          Testing and evaluating quality is part of the process. Here, I present
          some tools that help me plan, especially when I&apos;m talking about
          content and SEO strategies.&quot;
        </p>
        <div className={styles.partners}>
          {EVALUATION_DATA.map((item, index) => {
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
