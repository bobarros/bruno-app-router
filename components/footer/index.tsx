// React

import { ReactNode } from "react";

// Next

import Link from "next/link";

// Local Components

import LogoSVG from "@/svg/LogoSVG";
import GitSVG from "@/svg/GitSVG";
import EmailSVG from "@/svg/EmailSVG";

// Styles

import styles from "@/components/footer/style.module.scss";

// Prep Components

const CustomLink = ({ href, children }: Props) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

// Types

type Props = {
  children?: ReactNode;
  href: string;
};

// Content
import NAV_ITEMS from "@/content/nav";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const Footer = () => {
  return (
    <footer id="footer" className={`nao-imprimir ${styles.footer}`}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          logo bob
          <LogoSVG />
        </div>
      </Link>
      <ul className={styles.links}>
        {NAV_ITEMS.map((item, index) => {
          return (
            <CustomLink key={index} href={item.href}>
              {item.children}
            </CustomLink>
          );
        })}
      </ul>
      <div className={styles.text}>
        <div className={styles.credits}>
          <p>
            By{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://www.brunobarros.online"
            >
              Bruno Barros
            </a>
            , with ❤️ and a lot of 💪
          </p>
          <p>2019-{new Date().getFullYear()} brunobarros.dev</p>
          <p>
            Hosted by{" "}
            <a target="_blank" rel="noopener" href="https://vercel.com/">
              Vercel
            </a>
          </p>
          <p>
            <a target="_blank" rel="noopener" href="https://nextjs.org/">
              NEXT.<span>JS</span>
            </a>
          </p>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a target="_blank" rel="noopener" href="https://github.com/bobarros">
          bruno github profile
          <GitSVG />
        </a>
        <a href="mailto:brunobarros@ideias.dev">
          bruno email address
          <EmailSVG />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
