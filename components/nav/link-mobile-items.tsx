"use client";

// Next

import Link from "next/link";
import { usePathname } from "next/navigation";

// React

import { ReactNode } from "react";

// Styled Components

import styles from "@/components/nav/style.module.scss";

// Types

type Props = {
  children?: ReactNode;
  href: string;
  className: string;
};

// Local Functions
import { moveUp } from "@/components/nav/utils";

// Local Components

const LinkMobile = ({ href, children, className }: Props) => {
  return (
    <li className={styles.item} onClick={moveUp}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  );
};

// Content
import NAV_ITEMS from "@/content/nav";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const LinkMobileItems = () => {
  const pathname = usePathname();
  return (
    <ul className={styles.menuMobile}>
      {NAV_ITEMS.map((item, index) => {
        const { href, children } = item;
        return (
          <LinkMobile
            key={index}
            className={pathname === href ? "underline" : ""}
            href={href}
          >
            {children}
          </LinkMobile>
        );
      })}
    </ul>
  );
};

export default LinkMobileItems;
