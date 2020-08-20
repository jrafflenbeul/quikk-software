import React from "react";

const Greeting = () => {
  return (
    <div className="welcome">
      <div className="content">
        <h1>QUIKK Webdesign und Software</h1>
        <p>
          bietet in Bielefeld und Minden individuelle Softwarelösungen, mobile
          Apps und einzigartige Webauftritte an.
        </p>
      </div>
      <style jsx>{`
        .welcome {
          width: 100%;
          height: calc(100vh - calc(2 * 3.5rem));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .content {
          width: var(--content-width);
          max-width: var(--max-width);
          margin: 4rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Greeting;
