import React from "react";
import Layout from "../components/layout/Layout";

const impressum = () => {
  return (
    <Layout title="Impressum" description="desc">
      <h1 className="heading subtitle">Impressum</h1>
      <h4 className="heading">Bildnachweis</h4>
      <div>
        Die von uns verwendeten Icons wurden von{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        erstellt und auf{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          flaticon
        </a>{" "}
        veröffentlicht.
      </div>
    </Layout>
  );
};

export default impressum;
