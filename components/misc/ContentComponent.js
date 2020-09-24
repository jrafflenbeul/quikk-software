import React from "react";

const ContentComponent = ({
  children,
  bgColor,
  textColor,
  title,
  globalClassName,
  maxWidth,
}) => {
  return (
    <section
      className={`content-component ${globalClassName ? globalClassName : ""}`}
    >
      <div className="children">
        {title && (
          <h3 className={`heading title ${maxWidth ? "maxwidth" : ""}`}>
            {title}
          </h3>
        )}
        {children}
      </div>
      <style jsx>{`
        .content-component {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: ${bgColor};
          color: ${textColor};
        }
        .children {
          width: var(--content-width);
          max-width: var(--max-width);
          margin: 4rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        @media only screen and (max-width: 1280px) {
          .maxwidth {
            max-width: var(--max-width-plain-text);
          }
        }
      `}</style>
    </section>
  );
};

export default ContentComponent;
