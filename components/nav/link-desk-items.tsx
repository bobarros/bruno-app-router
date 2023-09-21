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

// Local Components

const LinkDesk = ({ href, children, className }: Props) => {
  return (
    <li>
      <Link className={className} href={href}>
        {children}
      </Link>
    </li>
  );
};

// Content
import NAV_ITEMS from "@/components/nav/content";

/*--------------------------------------------------------------------*/

/**
 * Component
 */

const LinkDeskItems = () => {
  const pathname = usePathname();
  return (
    <div className={styles.links}>
      {NAV_ITEMS.map((item, index) => {
        const { href, children } = item;
        return (
          <LinkDesk
            key={index}
            className={pathname === href ? "underline" : ""}
            href={href}
          >
            {children}
          </LinkDesk>
        );
      })}
    </div>
  );
};

export default LinkDeskItems;
