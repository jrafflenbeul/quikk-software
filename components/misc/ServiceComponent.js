import React from "react";
import { sanitizeIds } from "../../util/replaceAll";

const ServiceComponent = ({ heading, text, src, reverse }) => {
  return (
    <div id={sanitizeIds(heading)} className="service-component">
      <div className="text">
        <h2 className="heading subtitle">{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img
          src={src}
          alt={`${heading} wird neben Software und Webdesign von QUIKK in Bielefeld und Minden angeboten.`}
        />
      </div>
      <style jsx>{`
        .service-component {
          padding-top: 4rem;
          margin: 2rem 0;
          display: flex;
          flex-direction: ${reverse ? "row-reverse" : "row"};
          align-items: flex-start;
          justify-content: center;
          max-width: calc(2rem + var(--max-width-plain-text));
        }
        .text,
        .image {
          max-height: 50px
          max-width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .text > h2,
        .image > img {
          width: 100%;
        }
        @media only screen and (max-width: 720px) {
          .service-component {
            flex-direction: column-reverse;
            align-items: center;
          }
          .text,
          .image {
            max-width: var(--max-width);
          }
          .text > h2,
          .image > img {
            padding: 1rem;
          }
          .image > img {
            max-height: 300px
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceComponent;
