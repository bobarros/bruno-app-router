// Next

import Link from "next/link";

// Styles
import styles from "@/components/nav/style.module.scss";

// Icons

import GitSVG from "@/svg/GitSVG";
import EmailSVG from "@/svg/EmailSVG";
import LogoSVG from "@/svg/LogoSVG";

// Local Components
import Logo from "@/components/logo";
import Night from "@/components/night";
import ToTop from "@/components/to-top";
import LinkDeskItems from "@/components/nav/link-desk-items";
import LinkMobileItems from "@/components/nav/link-mobile-items";
import Hamburguer from "@/components/nav/hamburguer";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const Nav = () => {
  return (
    <>
      <Night />
      <Logo />
      <ToTop />
      <div className={styles.navBar}>
        <LinkDeskItems />
      </div>
      <div className={styles.movelNav} id="movelNav">
        <div className={styles.sections}>
          <a target="_blank" rel="noopener" href="https://github.com/bobarros">
            github
            <GitSVG />
          </a>
          <Hamburguer />
          <a href="mailto:brunobarros@ideias.dev">
            email
            <EmailSVG />
          </a>
        </div>
        <LinkMobileItems />
        <Link className={styles.logoMobile} href="/">
          logo bruno
          <LogoSVG />
        </Link>
      </div>
    </>
  );
};

export default Nav;
