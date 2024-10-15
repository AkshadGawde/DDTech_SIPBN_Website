import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import { Card } from "@/components/common/Card";
// import { blogCards } from "@/assets/data/dummydata";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Blog = () => {
  return (
    <>
      <div className="container">
        <br />
        <Title title={"Our Blogs"} />
        <div className="blogContent grid-3">
          <a href="/federalbudget">
            <Card
              data={{
                id: 1,
                title: "Federal Budget",
                cover: "/blogimages/AusFedralBudget.png",
                href: "/federalbudget",
              }}
              caption={"Read Blog"}
            />
          </a>
          <a href="/aivs">
            <Card
              data={{
                id: 2,
                title: "Net Zero Emissions vs. AI's Rising Energy Consumption",
                cover: "/blogimages/ZeroEmission.png",
                href: "/aivs",
              }}
              caption={"Read Blog"}
            />
          </a>
          <a href="/cleanenergy">
            <Card
              data={{
                id: 3,
                title: "SIPBN Clean Energy Committee's Analysis",
                cover: "/blogimages/2024FedralBudget.png",
                href: "/cleanenergy",
              }}
              caption={"Read Blog"}
            />
          </a>

          <a href="/cleanenergy">
            <Card
              data={{
                id: 4,
                title:
                  "Igniting Investor Interest: The Power of Passionate Presentations",
                cover: "/blogimages/InvestorInterest.png",
                href: "/passionate",
              }}
              caption={"Read Blog"}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;
