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
        Onlinepräsenz und Auffindbarkeit im Netz sind die entscheidenden
        Faktoren in der heutigen Zeit. Immer mehr Prozesse und Aktionen werden
        digitalisiert und finden ausschließlich online statt. Umso wichtiger ist
        es für Sie, jetzt an Ihrer digitalen Präsenz zu arbeiten und sich im
        Netz klar und sichtbar zu positionieren. Wenn Sie für die Zukunft
        gewappnet sein möchten, müssen Sie heute in Ihre Online-Sichtbarkeit
        investieren! Denken Sie immer daran: für den ersten Eindruck gibt es
        keine zweite Chance. Genau hier kommen wir ins Spiel. Wir analysieren
        und optimieren Ihre gesamte Onlinepräsenz und machen Sie mithilfe von
        verschiedenen Instrumenten sichtbar und auffindbar für Ihre Kunden. Wir
        nutzen vielfältige Tools, Kanäle und Marketing-Instrumente, um für Sie
        und vor allem Ihre Kunden die optimale und ideale Lösung zu finden und
        zu entwickeln.
      </p>
      <p>
        Weniger ist mehr! So lautet unser Motto, wenn wir Ihre neue Website
        gestalten. Wir legen Wert auf eine moderne und einheitliche
        Designsprache und setzen auf die Verwendung modernster Web-Technologien.
      </p>
      <p>
        Wir freuen uns darauf, Ihr individuelles Anliegen zu realisieren. Dank
        mehrjähriger Erfahrung in der Softwareentwicklung können wir Ihr Projekt
        strukturiert und mit hoher Codequalität als Web- oder Desktop-Anwendung
        umsetzen.
      </p>
      <p>
        Auch Ideen für mobile Anwendungen setzen wir gerne in die Tat um. Dabei
        spielt das Betriebssystem keine Rolle, denn unser moderner
        Technologie-Stack erlaubt es uns, Ihre App gleichzeitig für Android und
        iOS zu entwickeln.
      </p>
      <p>
        Durch eine Suchmaschinenoptimierung (SEO) wird Ihre Website in
        Suchmaschinen wie z.B. Google besser geranked und früher angezeigt.
        Kunden können Sie dadurch einfacher finden und schneller erreichen.
      </p>
      <p>
        Agile Softwareentwicklung legt den Grundstein für die hohe Qualität
        unserer Arbeit. Darüber hinaus erlaubt uns die agile Vorgehensweise eine
        zeitsparende, budgetorientierte und risikofreie Planung und Entwicklung
        Ihres Projekts.
      </p>
      <p>
        Wir unterstützen Sie über den gesamten Planungs- und
        Entwicklungszeitraum hinweg. In jedem Arbeitsschritt liegt unser Fokus
        auf höchster Qualität und auf einer engen, vertrauensvollen
        Zusammenarbeit mit Ihnen.
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
