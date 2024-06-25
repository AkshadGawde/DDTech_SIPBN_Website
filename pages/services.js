import { expertise } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="" /> <br />
            <br />
            <Title title="CapTech2023 Festival" className="title-bg" />
          </div>
        </div>
      </section>

      <section className="additional-info">
        <div className="container">
          <h2>What is #CapTech2023</h2>
          <p>
            Sydney Investors, Professionals and Business Networking Group (SIPBN
            Inc) presents a monumental Global Summit at Sydney’s iconic
            International Convention Centre connecting movers and shakers from
            the business world.
          </p>
          <p>
            #CapTech2023 aims to place Australia at the centre of innovation and
            entrepreneurship by connecting and bringing together the brightest
            minds, industry leaders, ventures, technology and capital from
            Australia and globally.
          </p>

          <h2>Sectors</h2>
          <ul>
            <li className="capList"> Education</li>
            <li className="capList"> Healthcare</li>
            <li className="capList"> Real Estate</li>
            <li className="capList"> Critical Minerals</li>
            <li className="capList"> Clean Energy</li>
            <li className="capList"> AI</li>
            <li className="capList"> Financial Services</li>
          </ul>

          <h2>Who Will Attend</h2>
          <p>
            Investors, finance houses, private equity, banks, start ups, venture
            capital, media, Government bodies, professional bodies, incubation
            and accelerators and tech firms.
          </p>

          <h2>Activities</h2>
          <ul>
            <li>– Key note session</li>
            <li>– Panel discussion</li>
            <li>– Industry sessions</li>
            <li>– Global pitching session</li>
            <li>– Post event drinks</li>
            <li>– Private Dinner (invitation only)</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
