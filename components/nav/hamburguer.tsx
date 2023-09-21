"use client";

// Styled Components
import styles from "@/components/nav/style.module.scss";

// Local Functions
import { moveUp } from "@/components/nav/utils";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const Hamburguer = () => {
  return (
    <div className={styles.hamburguer} id="navButton" onClick={moveUp}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburguer;
