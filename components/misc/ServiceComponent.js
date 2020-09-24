import React from "react";
import { sanitizeIds } from "../../util/replaceAll";

const ServiceComponent = ({ heading, text, img, reverse }) => {
  return (
    <div id={sanitizeIds(heading)} className="service-component">
      <div className="text">
        <h2 className="heading subtitle">{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img
          src={"https://via.placeholder.com/250"}
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
          justify-content: space-evenly;
          height: 100%;
          max-width: var(--max-width-plain-text);
        }
        .text,
        .image {
          max-width: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
            max-width: unset;
          }
          .text > h2,
          .image > img {
            padding: 1rem;
            width: unset;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceComponent;
