'use client'

// Styled Components

import styles from "@/components/to-top/style.module.scss";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const ToTop = () => {
  const upToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div onClick={upToTop} className={`nao-imprimir noSelect ${styles.wrap}`}>
        ^
      </div>
    </>
  );
};

export default ToTop;
