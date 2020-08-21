import React from "react";
import Layout from "../components/layout/Layout";
import ContactRef from "../components/misc/ContactRef";
import Customers from "../components/home/Customers";
import Services from "../components/home/Services";
import Greeting from "../components/home/Greeting";
import Separator from "../components/misc/Separator";
import Goal from "../components/home/Goal";
import Welcome from "../components/home/Welcome";
const index = () => {
  return (
    <Layout
      title="Software und Webdesign im Raum Bielefeld"
      description="Software und Webdesign im Raum Bielefeld. QUIKK ist Ihr Partner für individuelle Softwarelösungen, mobile Apps und einzigartige Webauftritte."
    >
      <Greeting />
      <Separator backgroundColor="var(--grey)" />
      <Welcome />
      <Services />
      <Goal />
      <Customers />
      <ContactRef />
    </Layout>
  );
};

export default index;
