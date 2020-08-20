import React, { useState, useContext } from "react";
import { GeneralDataContext } from "../../context/GeneralData";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = ({ navs }) => {
  const [menuOpen, setMenuOpen] = new useState(false);

  const { name } = useContext(GeneralDataContext);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const QuikkLink = ({ displayText, href, key }) => {
    return (
      <Link href={href} key={key}>
        <a className={`${styles.link} heading`} onClick={closeMobileMenu}>
          {displayText}
        </a>
      </Link>
    );
  };

  const BrandNameQuikkLink = () =>
    QuikkLink({ displayText: name.toUpperCase(), href: "/" });

  const NavigationQuikkLinks = () =>
    navs.map((nav, i) => {
      return QuikkLink({
        displayText: nav.display.toUpperCase(),
        href: nav.href,
        key: i,
      });
    });

  const MobileMenuToggle = () => {
    return (
      <div className={styles["menu-toggle"]} onClick={() => toggleMobileMenu()}>
        {menuOpen ? (
          <i
            className={`fa fa-times ${styles["fa-times"]}`}
            aria-hidden="true"
          />
        ) : (
          <i className="fa fa-bars" aria-hidden="true" />
        )}
      </div>
    );
  };

  const NavigationContainerDesktop = () => {
    return (
      <div className={styles["navigation-link-container"]}>
        <NavigationQuikkLinks />
      </div>
    );
  };

  const NavigationContainerMobile = () => {
    return (
      <div
        className={`${styles["navigation-link-container-mobile"]} ${styles["header-appearance"]}`}
      >
        <div className={styles["navigation-link-wrapper"]}>
          <NavigationQuikkLinks />
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.header} ${styles["header-appearance"]}`}>
      <div className={styles.bar}>
        <BrandNameQuikkLink />
        <NavigationContainerDesktop />
        <MobileMenuToggle />
      </div>
      {menuOpen && <NavigationContainerMobile />}
    </div>
  );
};

export default Header;
