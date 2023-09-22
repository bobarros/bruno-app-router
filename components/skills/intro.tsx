// Style
import styles_skills from "@/app/skills/styles.module.scss";
import styles_shared from "@/styles/style.module.scss";
const styles = {
  ...styles_skills,
  ...styles_shared,
};

/*--------------------------------------------------------------------*/

/**
 * Component
 */

export default function Intro() {
  return (
    <section className={styles.commonBlock}>
      <div className={styles.skillsBlock}>
        <div className={styles.skillsBlock}>Skills</div>
        <p className={styles.paragraph}>
          I enjoy learning, and there&apos;s a lot I can do, but I don&apos;t
          know everything. Here are the resources I use most frequently when
          it&apos;s time to build something!
        </p>
        <p className={styles.paragraph}>
          Of course, I&apos;m not limited to these, but this is where I feel
          most comfortable. So, if you&apos;d like to invite me to learn
          something new and collaborate, please do.
        </p>
        <p className={styles.paragraph}>
          I&apos;m also deeply grateful to many people who have enabled me to
          work on what I love, and I try to acknowledge as many solutions and
          individuals as possible. The list is quite extensive and might
          sometimes seem obvious.
        </p>
        <p className={styles.paragraph}>
          Feel free to reach out if you believe you have a new tool that&apos;s
          much better than what I&apos;m currently using. It&apos;s always
          beneficial to explore new options.
        </p>
      </div>
    </section>
  );
}
