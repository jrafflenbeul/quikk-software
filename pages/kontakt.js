import React from "react";
import Layout from "../components/layout/Layout";
import ContentComponent from "../components/misc/ContentComponent";
import Button from "../components/general/Button";
import Axios from "axios";

const sendMail = () => {
  Axios.post("/api/sendMail", {
    firstName: "Name",
    lastName: "Lname",
  }).then(function (res) {
    res.data
      ? console.log("erfolgreich")
      : console.log(`${res.status}: ${res.statusText}`);
  });
};

const kontakt = () => {
  return (
    <Layout title="Kontakt" description="desc">
      <ContentComponent title="Kontakt">
        <Button
          className="heading"
          border="1px solid var(--black)"
          bgColor="var(--black)"
          color="var(--white)"
          onClick={() => sendMail()}
        >
          Kontakt aufnehmen
        </Button>
      </ContentComponent>
    </Layout>
  );
};

export default kontakt;
