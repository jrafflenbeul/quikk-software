import React from "react";
import ContentComponent from "../misc/ContentComponent";
import Service from "./Service";
import Link from "next/link";
import Button from "../components/Button";

const Services = () => {
  return (
    <ContentComponent
      bgColor="var(--white)"
      textColor="var(--black)"
      title="Unser Angebot"
      globalClassName="bottom-border"
    >
      <div className="grid">
        {[
          {
            heading: "Webdesign",
            text:
              "Weniger ist mehr! So lautet unser Motto, wenn wir Ihre neue Website gestalten. Wir legen Wert auf eine moderne und einheitliche Designsprache und setzen auf die Verwendung modernster Web-Technologien.",
            src: "https://via.placeholder.com/140x100",
          },
          {
            heading: "Software",
            text:
              "Wir freuen uns darauf, Ihr individuelles Anliegen zu realisieren. Dank mehrjähriger Erfahrung in der Softwareentwicklung können wir Ihr Projekt strukturiert und mit hoher Codequalität als Web- oder Desktop-Anwendung umsetzen.",
            src: "https://via.placeholder.com/140x100",
          },
          {
            heading: "Mobile Apps",
            text:
              "Auch Ideen für mobile Anwendungen setzen wir gerne in die Tat um. Dabei spielt das Betriebssystem keine Rolle, denn unser moderner Technologie-Stack erlaubt es uns, Ihre App gleichzeitig für Android und iOS zu entwickeln.",
            src: "https://via.placeholder.com/140x100",
          },
          {
            heading: "SEO",
            text:
              "Durch eine Suchmaschinenoptimierung (SEO) wird Ihre Website in Suchmaschinen wie z.B. Google besser geranked und früher angezeigt. Kunden können Sie dadurch einfacher finden und schneller erreichen.",
            src: "https://via.placeholder.com/140x100",
          },
          {
            heading: "Agilität",
            text:
              "Agile Softwareentwicklung legt den Grundstein für die hohe Qualität unserer Arbeit. Darüber hinaus erlaubt uns die agile Vorgehensweise eine zeitsparende, budgetorientierte und risikofreie Planung und Entwicklung Ihres Projekts.",
            src: "https://via.placeholder.com/140x100",
          },
          {
            heading: "Transparenz",
            text:
              "Wir unterstützen Sie über den gesamten Planungs- und Entwicklungszeitraum hinweg. In jedem Arbeitsschritt liegt unser Fokus auf höchster Qualität und auf einer engen, vertrauensvollen Zusammenarbeit mit Ihnen.",
            src: "https://via.placeholder.com/140x100",
          },
        ].map((service, i) => {
          return (
            <Service
              key={i}
              heading={service.heading}
              text={service.text}
              src={service.src}
            />
          );
        })}
      </div>
      <Link href="/leistungen">
        <a>
          <Button
            className="heading"
            border="1px solid black"
            bgColor="var(--white)"
            color="var(--black)"
          >
            Zu unseren Leistungen
          </Button>
        </a>
      </Link>
      <style jsx>{`
        .grid {
          width: var(--content-width);
          max-width: var(--max-width);
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(10rem, 28rem));
          justify-content: center;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 1rem;
        }
      `}</style>
    </ContentComponent>
  );
};

export default Services;
