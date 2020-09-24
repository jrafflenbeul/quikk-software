import React, { useContext } from "react";
import ContentComponent from "../misc/ContentComponent";
import Service from "./Service";
import Link from "next/link";
import Button from "../general/Button";
import { GeneralDataContext } from "../../context/GeneralData";

const Services = () => {
  const { services } = useContext(GeneralDataContext);

  return (
    <ContentComponent
      bgColor="var(--white)"
      textColor="var(--black)"
      title="Unser Angebot"
      globalClassName="bottom-border"
    >
      <div className="grid">
        {services.map((service, i) => {
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
            border="1px solid var(--black)"
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
