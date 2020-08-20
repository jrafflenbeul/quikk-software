import React from "react";
import ContentComponent from "../misc/ContentComponent";
import Link from "next/link";
import Button from "../components/Button";

const Motivation = () => {
  return (
    <ContentComponent
      bgColor="var(--grey)"
      textColor="var(--black)"
      title="Unsere Motivation"
    >
      <p>
        <strong>QUIKK Software und Webdesign</strong> ist in <em>Minden</em>{" "}
        ansässig und bedient Kunden von <em>Bielefeld bis Hannover</em>.
        Vorrangig entwickeln wir individuelle <strong>Software</strong>, und
        kümmern uns damit um konkrete Anliegen unserer Kunden. Von der
        Automatisierung einzelner Prozesse bis hin zur Analyse von Daten ist
        alles dabei. Auch unsere <strong>Webentwicklung</strong> und{" "}
        <strong>Webdesign</strong> Tätigkeiten sind vielfältig. Von einer
        Integration Ihrer angebotenen Inserate auf einem Internet Auktionsportal
        bis hin zu modernen und aufwändigen Webseiten ist alles dabei. Sollten
        Sie eine Idee für eine mobile Anwendung haben, egal ob B2B oder B2C,
        setzen wir auch diese gerne in die Tat um. Unsere Kunden bekommen die
        beste Software der Umgebung zu einem unschlagbar günstigen Preis! Kommen
        Sie aus Minden, Bielefeld oder Umgebung? Kontaktieren Sie uns. Wir sind
        QUIKK. Quikk besteht aus einem engagierten Team, das in Minden und
        Bielefeld agiert. quikk bietet Webdesign und Software für Kunden und
        Partner aus Minden und Bielefeld. Wenn Sie nach Software aus Minden und
        Bielefeld suchen, kontaktieren sie QUIKK. QUIKK setzt Ihr Vorhaben in
        die Tat um. Mit quikk können Sie Ihr Anliegen in eine qualitative
        Anwendung realisieren lassen.
      </p>
      <Link href="/ueber-uns">
        <a>
          <Button
            className="heading"
            border="1px solid black"
            bgColor="var(--white)"
            color="var(--black)"
          >
            Erfahren Sie, was uns antreibt
          </Button>
        </a>
      </Link>
      <style jsx>{`
        p {
          margin-bottom: 2rem;
        }
      `}</style>
    </ContentComponent>
  );
};

export default Motivation;
