"use client";

// React

import { useEffect, useState, useCallback } from "react";

// Styles

import styles from "@/components/night/style.module.scss";

// Icons

import MoonSVG from "@/svg/MoonSvg";
import SunSVG from "@/svg/SunSVG";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const Night = () => {
  const [isNight, setIsNight] = useState(false);

  const changeAvatar = useCallback((isDay: boolean) => {
    try {
      const d = document;

      const avatarHead = d.getElementById("cabeca") as HTMLElement;
      const avatarClosedEyes = d.getElementById("fechado") as HTMLElement;
      const avatarLight = d.getElementById("luz") as HTMLElement;
      const avatarLeftEye = d.getElementById("esquerdo") as HTMLElement;

      if (isDay) {
        avatarHead.classList.remove("cabecaRotate");
        avatarClosedEyes.style.opacity = "0";
        avatarLight.classList.remove("toBlink");
        avatarLeftEye.style.opacity = "1";
      } else {
        avatarHead.classList.add("cabecaRotate");
        avatarClosedEyes.style.opacity = "1";
        avatarLight.classList.add("toBlink");
        avatarLeftEye.style.opacity = "0";
      }
    } catch (error) {
      console.log("Bruno's not here! Where, then!?");
    }
  }, []);

  const changeTheme = useCallback(
    (momentOfChange: string, isDarkMode: boolean = false) => {
      const classesBody = document.body.classList;
      if (momentOfChange === "click") {
        classesBody.toggle("night");
        classesBody.toggle("day");
      } else if (momentOfChange === "toDark") {
        classesBody.add("night");
        classesBody.remove("day");
        changeAvatar(isDarkMode);
      } else if (momentOfChange === "toDay") {
        classesBody.remove("night");
        classesBody.add("day");
        changeAvatar(isDarkMode);
      }
    },
    [changeAvatar]
  );

  const changeStorageData = useCallback(
    (status: boolean) => {
      if (status) {
        localStorage.removeItem("darkModeBruno");
        localStorage.setItem("darkModeBruno", "false");
        changeAvatar(status);
      } else {
        localStorage.removeItem("darkModeBruno");
        localStorage.setItem("darkModeBruno", "true");
        changeAvatar(status);
      }
    },
    [changeAvatar]
  );

  const toNight = useCallback(() => {
    const status = localStorage.getItem("darkModeBruno") === "true";
    changeStorageData(status);
    changeTheme("click");
  }, [changeStorageData, changeTheme]);

  useEffect(() => {
    const status = localStorage.getItem("darkModeBruno");
    if (status === null) {
      localStorage.setItem("darkModeBruno", "true"); /// night is the standard mode
    }
    if (status === "true" || status === null) {
      changeTheme("toDark", false);
    } else {
      changeTheme("toDay", true);
      setIsNight(true);
    }
  }, [changeTheme]);

  return (
    <div>
      <div
        className={styles.icons}
        onClick={() => {
          setIsNight(!isNight);
          toNight();
        }}
        title="Alternate betweet dark and light themes"
      >
        <SunSVG className={isNight ? "show" : "notShow"} />
        <MoonSVG className={isNight ? "notShow" : "show"} />
      </div>
    </div>
  );
};

export default Night;
