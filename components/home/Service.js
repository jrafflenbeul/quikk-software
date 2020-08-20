import React from "react";
import Link from "next/link";

const Service = ({ src, heading, text }) => {
  return (
    <div className="service-component">
      <div className="wrapper">
        <Link href={`leistungen#${heading}`}>
          <a>
            <img
              src={src}
              alt={`${heading} wird neben Software und Webdesign von QUIKK in Bielefeld und Minden angeboten.`}
            />
          </a>
        </Link>
        <h2 className="heading subtitle outline">{heading}</h2>
        <p>{text}</p>
      </div>
      <style jsx>{`
        .service-component {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .service-component .wrapper {
          width: var(--content-width);
          max-width: 28rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .service-component .wrapper img {
          height: 10rem;
          margin-bottom: 1rem;
        }

        .service-component .wrapper p {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Service;
