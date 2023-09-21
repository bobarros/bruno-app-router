"use client";

// Next
import Image from "next/image";

// React

import { useEffect, useState } from "react";

// Styles
import styles from "@/components/home/style.module.scss";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const ImageHandle = () => {
  const [load, setLoad] = useState("notReady");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (width === 0 || height === 0) {
      const element = document.getElementById("propIndex") as HTMLDivElement;
      setHeight(element.offsetHeight);
      setWidth(element.offsetWidth);
      setLoad("again" + Math.random());
    } else {
      setLoad("ready");
    }
  }, [load, height, width]);

  return (
    <div className={styles.imageWrap}>
      {!(load === "ready") && (
        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/svg/black_port_mobile.svg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="/svg/black_port_desk.svg"
          />
          <img
            id="propIndex"
            src="/img/black_port_desk.svg"
            alt="bruno's portfolio image with three computers showing different websites"
          />
        </picture>
      )}
      {load === "ready" && (
        <Image
          width={width}
          height={height}
          src={width > 601 ? `/img/port_desk.jpg` : `/img/port_mobile.jpg`}
          alt="bruno's portfolio image with three computers showing different websites"
        />
      )}
    </div>
  );
};

export default ImageHandle;
