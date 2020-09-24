import React from "react";
import Link from "next/link";
import ContentComponent from "./ContentComponent";
import Button from "../general/Button";

const ContactRef = () => {
  return (
    <ContentComponent
      bgColor="var(--black)"
      textColor="var(--white)"
      title="Lassen Sie uns gemeinsam an Ihrem Projekt arbeiten"
      maxWidth={true}
    >
      <div className="text-content">
        <div className="info">
          <p>
            Dabei spielt es keine Rolle, ob unsere Reise am Anfang Ihres
            Vorhabens beginnt, oder wir mittendrin starten. Vereinbaren Sie mit
            uns unverbindlich einen kostenlosen Ersttermin, damit wir uns ein
            Bild von Ihnen und Ihrem Anliegen verschaffen können.
          </p>
        </div>
        <div className="cta">
          <h4 className="heading subtitle">Gehen Sie den ersten Schritt</h4>
          <Link href="/kontakt">
            <a>
              <Button
                className="heading"
                bgColor="var(--white)"
                textColor="var(--black)"
                width="100%"
                border="1px solid var(--white)"
              >
                Kontakt aufnehmen
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .text-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        }

        .text-content div {
          max-width: 50%;
        }
        .info p {
          max-width: var(--max-width-plain-text);
        }
        button {
          background: var(--white);
          border: 0px;
          border-radius: 0px;
          box-shadow: none;
          color: var(--black);
          cursor: pointer;
          flex: 0 0 auto;
          padding: 0.5rem;
          line-height: 1.3;
          font-family: Poppins, sans-serif;
          box-sizing: border-box;
          width: 100%;
        }

        button:focus {
          outline: none;
        }

        @media only screen and (max-width: 1280px) {
          .text-content {
            flex-direction: column;
            justify-content: space-evenly;
            text-align: left;
          }
          .text-content div {
            max-width: unset;
          }
          .text-content div:first-child {
            margin-bottom: 1rem;
          }
          .text-content h4 {
            display: none;
          }
        }

        @media only screen and (max-width: 600px) {
          .text-content div {
            width: 100%;
          }
        }
      `}</style>
    </ContentComponent>
  );
};

export default ContactRef;
