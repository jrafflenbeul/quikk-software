import React from "react";
import Typed from "react-typed";

const Greeting = () => {
  return (
    <div className="welcome">
      <div className="content">
        <div className="heading">
          <h1 className="heading title typed-content">
            <strong>QUIKK</strong> <strong>Software</strong> und{" "}
            <strong>Webdesign</strong>
          </h1>
        </div>
        <div className="text">
          <p className="typed-content heading">
            Ihr Partner in <strong>Bielefeld</strong> und{" "}
            <strong>Minden</strong>
          </p>
          <p className="typed-content heading">
            Für{" "}
            <Typed
              loop
              typeSpeed={60}
              backSpeed={25}
              strings={[
                "individuelle Softwarelösungen",
                "mobile Anwendungen",
                "einzigartige Webauftritte",
              ]}
              smartBackspace
              shuffle={false}
              backDelay={1000}
              fadeOut={false}
              fadeOutDelay={100}
              loopCount={0}
              showCursor
              cursorChar="|"
            />{" "}
          </p>
        </div>
      </div>
      <style jsx>{`
        strong {
          font-weight: unset;
        }
        .welcome {
          width: 100%;
          height: calc(100vh - calc(2 * 3.5rem));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-image: linear-gradient(
              var(--grey-seethru),
              var(--grey-seethru)
            ),
            url("/assets/office.jpg");
          background-size: cover;
          background-position: right;
          color: var(--black);
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

        .content > div {
          width: 100%;
        }

        .typed-content {
          text-align: left;
          width: 100%;
        }
        @media only screen and (max-width: 600px) {
        }
      `}</style>
    </div>
  );
};

export default Greeting;
