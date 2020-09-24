import React from "react";
import Layout from "../components/layout/Layout";
import ContactRef from "../components/misc/ContactRef";
import ContentComponent from "../components/misc/ContentComponent";
const ueberUns = () => {
  return (
    <Layout title="Über uns" description="desc">
      <ContentComponent title="Über uns">
        <div className="about">
          <h2>tl;dr</h2>
          <p>
            Hinter QUIKK stehen zwei leidenschaftliche Entwickler mit
            mehrjähriger Erfahrung in der Softwareentwicklung. Beide vertieften
            ihre Kenntnisse im Leistungskurs Informatik und schlossen 2017 ihr
            Abitur am Städtischen Gymnasium in Petershagen ab. Anschließend
            absolvierten beide ein Bachelorstudium in Informatik. Aktuell
            belegen beide den Master in Informatik und machen nebenbei ihr Hobby
            zum Beruf.
          </p>
          <h2>Wer?</h2>
          <p>
            Lukas Weidich ist Inhaber von QUIKK und zog 2017 für ein duales
            Studium der Informatik nach Karlsruhe. Neben organisatorischen
            Fähigkeiten stand im Studium vor Allem die Verzahnung von Theorie
            und Praxis im Vordergrund. Eine freie Praxisphasenwahl hat Lukas
            ermöglicht, in sechs Abteilungen eines großen europäischen
            Softwarehauses Erfahrungen als Anwendungsentwickler zu sammeln.
            <br />
            <br />
            Joyce Marvin Rafflenbeul ist Co-Inhaber von QUIKK und studiert seit
            2017 in seiner Heimatstadt Minden Informatik. Bereits während des
            Bachelorstudiums hat Joyce den Schritt in die Selbstständigkeit
            gewagt, in welcher bis dato einige Websites und Software-Projekte
            umgesetzt wurden. Die frühe Selbstständigkeit verschaffte Joyce bei
            seiner persönlichen Entwicklung eine enorme Steigerung, sodass
            komplexe Probleme souverän gelöst und Kunden bei der Umsetzung Ihrer
            Projekte optimal betreut werden können.
            <br />
            <br />
            2020 und zurück in der Heimat haben wir uns beide dazu entschieden,
            ein Master Studium in Informatik zu beginnen. Neben unserer
            langjährigen Freundschaft sind mehrere kleine Projekte entstanden,
            die wir als Team entwickelt haben. Aus diesem Grund haben wir
            beschlossen, uns gemeinsam selbstständig zu machen und unserer
            Leidenschaft neben dem Studium nachzugehen.
          </p>
          <h2>Was?</h2>
          <p>
            In Absprache mit dem Kunden verwenden wir moderne und
            plattformunabhängige Technologien, die es uns erlauben, Software und
            Apps für verschiedene Geräte und Betriebssysteme zu entwickeln. Wir
            arbeiten eng mit dem Kunden zusammen und legen Wert auf eine
            transparente und professionelle Kommunikation sowie eine hohe
            Codequalität.
          </p>
          <h2>Wieso?</h2>
          <p>
            In letzter Zeit wurde immer deutlicher, wie wichtig eine
            Onlinepräsenz ist. bla auf corona anspielen bla. Individuelle
            Software hilft dabei, wiederkehrende Aufgaben zu erleichtern oder
            sogar komplett abzunehmen. bla Technologie = gut bla. Wir beide sind
            ehrgeizig und zielgerichtet, wenn es um die Entwicklung von Software
            und Websiten geht. Nicht nur finden wir darin eine kreative
            Auslastung, auch haben wir durch die Selbstständigkeit die
            Möglichkeit, konstant lernen und wachsen zu können. Wir sind fähig
            aber nicht perfekt und freuen uns, wenn wir uns Ihren
            Herausforderungen annehmen dürfen.
          </p>
        </div>
      </ContentComponent>
      <ContactRef />
      <style jsx>{`
        .about p {
          max-width: var(--max-width-plain-text);
        }
      `}</style>
    </Layout>
  );
};

export default ueberUns;
