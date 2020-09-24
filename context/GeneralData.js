import React from "react";

export const GeneralDataContext = React.createContext();

export const GeneralDataProvider = ({ children }) => {
  const name = "QUIKK";
  const legalOwner = "Lukas Weidich";
  const legalName = "QUIKK Software und Webdesign";
  const legalAddressStreet = "Hahler Straße 285";
  const legalAddressZipCity = "32427 Minden";
  const mail = "mailto:info@quikk.de";
  const mailDisplay = "info@quikk.de";
  const phone = "tel:+4915736140978";
  const phoneDisplay = "+49 (0) 1573 614 0978";
  const twitter = "https://twitter.com/quikk_software";
  const instagram = "https://instagram.com/quikk.de";
  const github = "https://github.com/quikk-software";
  const services = [
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
      src: "../../assets/communication.svg",
    },
  ];

  return (
    <GeneralDataContext.Provider
      value={{
        name,
        legalOwner,
        legalName,
        legalAddressStreet,
        legalAddressZipCity,
        mail,
        mailDisplay,
        phone,
        phoneDisplay,
        twitter,
        instagram,
        github,
        services,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};
