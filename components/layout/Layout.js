import React from "react";
import Head from "next/head";
import { GeneralDataProvider } from "../../context/GeneralData";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, description, children }) => {
  title = `${title} | QUIKK`;
  return (
    <GeneralDataProvider>
      <div className="fullpage">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="QUIKK" />
          <meta name="language" content="deutschland" />
          <meta httpEquiv="language" content="DE" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="QUIKK, Software, Softwareentwicklung, Software Entwicklung, Web, Webdesign, Web Design, Entwicklung, Development, Minden, Bielefeld, Hannover"
          />
          <meta name="author" content="QUIKK Software und Webdesign" />
          <meta name="copyright" content="QUIKK Software und Webdesign" />
          <meta name="robots" content="index,follow" />
          <meta name="geo.region" content="DE-NW" />
          <meta name="geo.placename" content="Minden" />
          <meta name="geo.position" content="52.302;8.86" />
          <meta name="ICBM" content="52.302, 8.86" />
          <meta property="og:type" content="business.business" />
          <meta property="og:latitude" content="52.302" />
          <meta property="og:longitude" content="8.86" />
          <meta property="og:locality" content="Minden" />
          <meta property="og:region" content="DE-NRW" />
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/images/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/images/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/images/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/images/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/images/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/images/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/images/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header
          navs={[
            { href: "/", display: "Home" },
            { href: "/leistungen", display: "Leistungen" },
            { href: "/ueber-uns", display: "Über uns" },
            { href: "/kontakt", display: "Kontakt" },
          ]}
        />
        <div className="content">{children}</div>
        <Footer />
        <style jsx>
          {`
            .fullpage {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              width: 100%;
              padding: 0;
              margin: 0;
            }

            .fullpage > .content {
              margin-top: 3.5rem;
              display: flex;
              flex: 1 1 auto;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    </GeneralDataProvider>
  );
};

export default Layout;
