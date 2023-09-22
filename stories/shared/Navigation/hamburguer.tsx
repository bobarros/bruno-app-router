"use client";

// Styled Components
import styles from "./style.module.scss";

// Local Functions
import { moveUp } from "./utils";

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
