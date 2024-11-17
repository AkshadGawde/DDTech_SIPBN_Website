import React, { useState } from "react";
import { useRouter } from "next/router";
import { Title } from "../../components/common/Title";
import { Card } from "../../components/common/Card";
import Link from "next/link";

const TradeInvestmentMission = () => {
  const delegation = [
    {
      id: 1,
      title: "Technology and Outsourcing",
      cover:
        "https://www.theamegroup.com/wp-content/uploads/2016/11/information-technology-outsourcing.jpeg",
      href: "/about",
    },
    {
      id: 2,
      title: "Renewable Energy",
      cover:
        "https://www.nationalgrid.com/sites/default/files/styles/content_embedded_image/public/images/EnergyExplained_DifferentTypesRenewableEnergy_640x360.jpg",
      href: "/about",
    },
    {
      id: 3,
      title: "Food and Beverages",
      cover:
        "https://static.wixstatic.com/media/6e7d3b_b4b206e6673846c7932ac26c883475a0~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_auto/6e7d3b_b4b206e6673846c7932ac26c883475a0~mv2.jpg",
      href: "/about",
    },
    {
      id: 4,
      title: "Mining and Exploration",
      cover:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/343652787/GZ/UL/NN/181022856/mining-exploration-services.jpeg",
      href: "/about",
    },
    {
      id: 5,
      title: "Healthcare",
      cover:
        "https://plus.unsplash.com/premium_photo-1699387204388-120141c76d51?q=80&w=2878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/about",
    },
    {
      id: 6,
      title: "Financial Services",
      cover:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/about",
    },
  ];

  const router = useRouter();

  const handleEnquireClick = () => {
    router.push("/contact"); // Redirect to the "/contact" page
  };

  return (
    <>
      <div className="background">
        <img
          className="bgImage"
          src="/delegation.png"
          alt="CapTech 2024 Background"
        />
      </div>

      <section className="business-relations">
        <div className="delegation-container">
          <Title title="The Flourishing Australia-India Business Relationship" />
          <p>
            The business relationship between Australia and India has flourished
            over the years, marked by strong trade ties, investment flows, and
            collaboration in strategic sectors. As vibrant democracies with
            complementary economies, the two nations have prioritized
            partnerships in key areas such as mining, education, clean energy,
            agriculture, and technology. <br /> <br /> The India-Australia
            Economic Cooperation and Trade Agreement (ECTA) has further
            accelerated bilateral trade by reducing tariffs and fostering
            greater market access. Additionally, India's growing consumer base
            and Australia's resource-rich economy provide a strong foundation
            for mutual growth. Both countries are also working together on
            innovation, research, and skill development to strengthen their
            economic and geopolitical partnership, positioning themselves as key
            players in the Indo-Pacific region.
          </p>
        </div>
      </section>

      <section className="sipbn-initiative">
        <div className="delegation-container">
          <Title title="SIPBN's Role in Strengthening Ties" />
          <p>
            As SIPBN, we are leveraging our platform to strengthen Australia’s
            business ties with India through strategic delegations. Our goal is
            to create high-value connections by bringing Australian business
            leaders, investors, and innovators directly to one of the
            fastest-growing economies in the world.
            <br />
            <br /> By facilitating meaningful engagements with Indian
            enterprises, policymakers, and industry experts, we enable our
            delegation to explore collaborative opportunities, secure
            investments, and access expansive markets. Focused on
            future-oriented sectors like clean energy, technology, and
            healthcare, we aim to position Australia as a key partner in India’s
            growth story. Through this initiative, we are driving mutual
            economic growth while fostering long-term partnerships that benefit
            both nations.
          </p>
        </div>
      </section>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="TRADE AND INVESTMENT MISSION TO INDIA" />
            <p>
              Opportunity to expand your business to the world's fastest growing
              economy
            </p>
          </div>

          <div className="hero-content grid-2 ">
            {delegation.map((item) => (
              <Link href="/IndiaDelegation" key={item.id}>
                <Card data={item} caption="" className="pillars" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="benefits-activities-container">
        <div className="tabs">
          <button className="tab active">ACTIVITIES</button>
        </div>

        <div className="benefits-content">
          <div className="benefit-item">
            <img
              src="https://img.icons8.com/?size=100&id=999&format=png&color=FFFFFF"
              alt="Elevate Your Brand"
            />
            <h3>Business Meetings and Introductions</h3>
            <p>
              Engage in strategic meetings with industry leaders to explore
              potential collaborations and partnerships.
            </p>
          </div>
          <div className="benefit-item">
            <img
              src="https://img.icons8.com/?size=100&id=63371&format=png&color=FFFFFF"
              alt="Unlock New Revenue"
            />
            <h3>Meeting with Government Officials</h3>
            <p>
              Gain insights into policies and opportunities through direct
              interactions with key government stakeholders.
            </p>
          </div>
          <div className="benefit-item">
            <img
              src="https://img.icons8.com/?size=100&id=boPtdpDS9FXC&format=png&color=FFFFFF"
              alt="Be the Authority"
            />
            <h3>Sightseeing Activities</h3>
            <p>
              Experience the cultural and historical landmarks of India while
              building meaningful connections with peers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeInvestmentMission;
