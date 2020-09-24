import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import ContactRef from "../components/misc/ContactRef";
import ServiceComponent from "../components/misc/ServiceComponent";
import ContentComponent from "../components/misc/ContentComponent";
import { GeneralDataContext } from "../context/GeneralData";

const leistungen = () => {
  const context = useContext(GeneralDataContext);
  return (
    <Layout title="Leistungen" description="desc">
      <ContentComponent title="Leistungen">
        <div className="abstract">
          <h2>Was wir bieten</h2>
          <p>
            Wir arbeiten nicht FÜR Kunden sondern MIT Kunden zusammen. Unser
            Ziel ist es, eine optimale und einzigartige Lösung gemeinsam mit
            Ihnen zu finden und bestmöglich umzusetzen! Wir haben es uns zur
            Aufgabe gemacht, die Präsenz unserer Kunden zu perfektionieren und
            somit Ihnen zu mehr Umsatz und zufriedenen Kunden zu verhelfen!
            Vereinbaren Sie noch heute Ihr unverbindliches und kostenloses
            Erstgespräch!
          </p>
        </div>
        <div className="services">
          {[
            {
              heading: "Software",
              text:
                "Wir freuen uns darauf, Ihr individuelles Anliegen zu realisieren. Dank mehrjähriger Erfahrung in der Softwareentwicklung können wir Ihr Projekt strukturiert und mit hoher Codequalität als Web- oder Desktop-Anwendung umsetzen.",
              src: "/assets/software.svg",
            },
            {
              heading: "Mobile Apps",
              text:
                "Auch Ideen für mobile Anwendungen setzen wir gerne in die Tat um. Dabei spielt das Betriebssystem keine Rolle, denn unser moderner Technologie-Stack erlaubt es uns, Ihre App gleichzeitig für Android und iOS zu entwickeln.",
              src: "/assets/mobile.svg",
            },
            {
              heading: "Webdesign",
              text:
                "Weniger ist mehr! So lautet unser Motto, wenn wir Ihre neue Website gestalten. Wir legen Wert auf eine moderne und einheitliche Designsprache und setzen auf die Verwendung modernster Web-Technologien.",
              src: "../../assets/webdesign.svg",
            },
            {
              heading: "SEO",
              text:
                "Durch eine Suchmaschinenoptimierung (SEO) wird Ihre Website in Suchmaschinen wie z.B. Google besser geranked und früher angezeigt. Kunden können Sie dadurch einfacher finden und schneller erreichen.",
              src: "../../assets/seo.svg",
            },
            {
              heading: "Agiles Vorgehen",
              text:
                "Agile Softwareentwicklung legt den Grundstein für die hohe Qualität unserer Arbeit. Darüber hinaus erlaubt uns die agile Vorgehensweise eine zeitsparende, budgetorientierte und risikofreie Planung und Entwicklung Ihres Projekts.",
              src: "../../assets/agility.svg",
            },
            {
              heading: "Kommunikation",
              text:
                "Wir unterstützen Sie über den gesamten Planungs- und Entwicklungszeitraum hinweg. In jedem Arbeitsschritt liegt unser Fokus auf höchster Qualität und auf einer engen, vertrauensvollen Zusammenarbeit mit Ihnen.",
              src: "/assets/communication.svg",
            },
          ].map((service, i) => {
            return (
              <ServiceComponent
                key={i}
                heading={service.heading}
                text={service.text}
                src={service.src}
                reverse={i % 2}
              />
            );
          })}
        </div>
      </ContentComponent>
      <ContactRef />
      <style jsx>{`
        .abstract {
          max-width: var(--max-width-plain-text);
        }
      `}</style>
    </Layout>
  );
};

export default leistungen;
