import React from "react";

const Customer = ({ img, alt, href }) => {
  return (
    <div className="customer">
      <div className="wrapper">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt={`Bielefeld und Minden: Software und Webdesign Kunde bei QUIKK ist ${alt}`}
          ></img>
        </a>
      </div>
      <style jsx>{`
        .customer {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .customer .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .customer img {
          max-height: 4rem;
          max-width: 8rem;
          filter: grayscale(100%);
          -webkit-filter: grayscale(100%);
        }
      `}</style>
    </div>
  );
};

export default Customer;
