import React, { useState, useContext } from "react";
import { GeneralDataContext } from "../../context/GeneralData";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const {
    name,
    mail,
    mailDisplay,
    phone,
    phoneDisplay,
    twitter,
    instagram,
    github,
  } = useContext(GeneralDataContext);

  const Copyright = () => {
    return (
      <div className={styles.copyright}>
        <p>{`© ${new Date().getFullYear()} ${name}`}</p>
      </div>
    );
  };

  const SocialLink = ({ iconClassName, href }) => {
    return (
      <p>
        <a
          className={styles["social-icon"]}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={iconClassName} aria-hidden="true" />
        </a>
      </p>
    );
  };

  const SocialLinks = () => {
    return (
      <div className={styles["social-icon-container"]}>
        {[
          {
            href: twitter,
            iconClassName: "fab fa-twitter",
          },

          {
            href: instagram,
            iconClassName: "fab fa-instagram",
          },
          {
            href: github,
            iconClassName: "fab fa-github",
          },
        ].map((socialEl, i) => {
          return (
            <SocialLink
              href={socialEl.href}
              iconClassName={socialEl.iconClassName}
              key={i}
            />
          );
        })}
      </div>
    );
  };

  const QuikkLink = ({ href, displayText, iconClassName, extern }) => {
    return (
      <div className={styles["quikk-link"]}>
        <p>
          {iconClassName && (
            <div className={styles["quikk-link-icon"]}>
              <i className={iconClassName} aria-hidden="true" />
            </div>
          )}
          {extern ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {displayText}
            </a>
          ) : (
            <Link href={href}>
              <a>{displayText}</a>
            </Link>
          )}
        </p>
      </div>
    );
  };

  const LinkContainer = ({ heading, children }) => {
    return (
      <div className={styles["link-container"]}>
        <p className="heading">{heading}</p>
        {children}
      </div>
    );
  };

  const Contact = () => {
    return (
      <LinkContainer heading={"Kontakt"}>
        <QuikkLink displayText={mailDisplay} href={mail} extern={true} />
        <QuikkLink displayText={phoneDisplay} href={phone} extern={true} />
      </LinkContainer>
    );
  };

  const Legal = () => {
    return (
      <LinkContainer heading={"Rechtliches"}>
        <QuikkLink
          displayText={"Impressum"}
          href={"/impressum"}
          extern={false}
        />
        <QuikkLink
          displayText={"Datenschutz"}
          href={"/datenschutz"}
          extern={false}
        />
      </LinkContainer>
    );
  };

  const Social = () => {
    return (
      <LinkContainer heading={"Social"}>
        <SocialLinks />
        <Copyright />
      </LinkContainer>
    );
  };

  const FooterLinks = () => {
    return (
      <div className={styles["link-container-wrapper"]}>
        <Contact />
        <Legal />
        <Social />
      </div>
    );
  };

  return (
    <div className={styles.footer}>
      <FooterLinks />
    </div>
  );
};

export default Footer;
