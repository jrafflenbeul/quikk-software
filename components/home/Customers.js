import React from "react";
import ContentComponent from "../misc/ContentComponent";
import Customer from "./Customer";

const sortByAlt = (a, b) => a.alt.localeCompare(b.alt);

const Customers = () => {
  return (
    <ContentComponent
      bgColor="var(--white)"
      textColor="var(--black)"
      title="Unsere Kunden"
      globalClassName="top-border"
    >
      <div className="grid">
        {[
          {
            alt: "Auction Template",
            img:
              "https://dem-it.de/wp-content/uploads/2020/04/auction-template-logo-dark.png",
            href: "https://www.auction-template.com",
          },
          {
            alt: "Ecos Office Center",
            img:
              "https://dem-it.de/wp-content/uploads/2020/04/ecos_office_center.png",
            href: "https://www.ecos-office.com",
          },
          {
            alt: "Origifel",
            img:
              "https://dem-it.de/wp-content/uploads/2020/04/origifel_logo.png",
            href: "https://origifel.de/",
          },
          {
            alt: "TradeMax24",
            img:
              "https://dem-it.de/wp-content/uploads/2019/12/TradeMax24-Logo-300x72.png",
            href: "https://trademax24.de/",
          },
          {
            alt: "WatchTrade24",
            img:
              "https://watchtrade24.de/static/media/watchtrade24.d5d2db0c.svg",
            href: "https://www.watchtrade24.de",
          },
          {
            alt: "Naava",
            img: "https://dem-it.de/wp-content/uploads/2020/04/naava_logo.png",
            href: "https://naava.de/",
          },
        ]
          .sort(sortByAlt)
          .map((customer, i) => {
            return (
              <Customer
                key={i}
                alt={customer.alt}
                img={customer.img}
                href={customer.href}
              />
            );
          })}
      </div>
      <style jsx>{`
        .grid {
          width: 100%;
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(10rem, 10rem));
          justify-content: center;
        }
      `}</style>
    </ContentComponent>
  );
};

export default Customers;
