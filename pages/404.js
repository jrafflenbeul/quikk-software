import Link from "next/link";
import React from "react";
import Button from "../components/general/Button";
import Layout from "../components/layout/Layout";
const NotFound = () => {
  return (
    <Layout
      title="404 - Die angeforderte Seite konnte nicht gefunden werden"
      description="desc"
    >
      <div className="not-found-wrapper">
        <h1 className="heading title">404</h1>
        <p className="heading">
          Die angeforderte Seite konnte nicht gefunden werden
        </p>
        <div className="buttons">
          <div>
            <Link href="/">
              <a>
                <Button
                  className="heading"
                  border="1px solid var(--black)"
                  bgColor="var(--white)"
                  color="var(--black)"
                  width="100%"
                >
                  Zurück zur Startseite
                </Button>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/kontakt">
              <a>
                <Button
                  className="heading"
                  border="1px solid var(--black)"
                  bgColor="var(--black)"
                  color="var(--white)"
                  width="100%"
                >
                  Kontakt aufnehmen
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          .not-found-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: var(--content-width);
            max-width: var(--max-width);
            text-align: center;
          }
          .buttons {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: var(--max-width-plain-text);
          }
          .buttons div {
            margin: 2rem 2rem 0 2rem;
            width: 100%;
          }

          @media only screen and (max-width: 720px) {
            .buttons {
              flex-direction: column;
              width: unset;
              max-width: unset;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default NotFound;
