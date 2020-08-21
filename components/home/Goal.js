import React from "react";
import ContentComponent from "../misc/ContentComponent";

const Goal = () => {
  return (
    <ContentComponent
      bgColor="var(--grey)"
      textColor="var(--black)"
      title="Unser Ziel"
    >
      <p>
        Wir möchten Sie und Ihr Unternehmen auf dem Weg der Digitalisierung
        begleiten. Erarbeiten Sie gemeinsam mit uns, wie wir Ihr individuelles
        Anliegen in die Tat umsetzen können. Völlig egal, ob wir für Sie einen
        Internetauftritt gestalten, oder Ihren Arbeitsalltag durch die
        Automatisierung betriebswirtschaftlicher Prozesse erleichtern.
      </p>
      <style jsx>{`
        p {
          max-width: var(--max-width-plain-text);
        }
      `}</style>
    </ContentComponent>
  );
};

export default Goal;
