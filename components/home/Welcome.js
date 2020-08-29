import React from "react";
import ContentComponent from "../misc/ContentComponent";
import Button from "../components/Button";
import Link from "next/link";

const Welcome = () => {
  return (
    <ContentComponent
      bgColor="var(--grey)"
      textColor="var(--black)"
      title="Willkommen bei QUIKK!"
    >
      <p>
        Wir sind ein junges, engagiertes Team bestehend aus leidenschaftlichen
        Softwareentwicklern und Webdesignern. Unser Ursprung liegt in Minden.
        Dort haben wir uns neben unserem Masterstudium dazu entschieden, unser Hobby
        zum Beruf zu machen. Wir bieten unter QUIKK individuelle
        Softwarelösungen, mobile Apps und einzigartige Webauftritte für den Raum
        Bielefeld und Minden an.
      </p>
      <Link href="/ueber-uns">
        <a>
          <Button
            className="heading"
            border="1px solid black"
            bgColor="var(--white)"
            color="var(--black)"
          >
            Mehr über uns
          </Button>
        </a>
      </Link>
      <style jsx>{`
        p {
          max-width: var(--max-width-plain-text);
          margin-bottom: 2rem;
        }
      `}</style>
    </ContentComponent>
  );
};

export default Welcome;
