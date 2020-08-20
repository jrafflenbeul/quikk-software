import React from "react";

export const GeneralDataContext = React.createContext();

export const GeneralDataProvider = ({ children }) => {
  const name = "QUIKK";
  const mail = "mailto:info@quikk.de";
  const mailDisplay = "info@quikk.de";
  const phone = "tel:+4915736140978";
  const phoneDisplay = "+49 (0) 1573 614 0978";
  const twitter = "https://twitter.com/quikk_software";
  const instagram = "https://instagram.com/quikk.de";
  const github = "https://github.com/quikk-software";

  return (
    <GeneralDataContext.Provider
      value={{
        name,
        mail,
        mailDisplay,
        phone,
        phoneDisplay,
        twitter,
        instagram,
        github,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};
