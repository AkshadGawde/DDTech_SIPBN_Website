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
                cover:
                  "https://res.cloudinary.com/duv9rw1wg/image/upload/v1721736223/homePage/omer85xdmfprk3ohmdve.jpg",
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
                cover:
                  "https://res.cloudinary.com/duv9rw1wg/image/upload/v1721735819/homePage/xugbdj1vuq9gm4o5qggb.png",
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
                cover:
                  "https://res.cloudinary.com/duv9rw1wg/image/upload/v1721736591/homePage/jquatrm5gch50shbjmrr.png",
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
                cover:
                  "https://res.cloudinary.com/dueoon8xe/image/upload/v1724185196/zh5dwwxlns4z3eyaeyx1.png",
                href: "/passionate",
              }}
              caption={"Read Blog"}
            />
          </a>
        </div>
        <div className="container">
          <br />
          <Title title={"Podcast"} />

          <div className="blogContent grid-3">
            <Card
              data={{
                id: 1,
                title:
                  "The Deal Flow : A distinguished leader with over 23 years of expertise in financial data, news, and analytics. ",
                cover:
                  "https://res.cloudinary.com/dueoon8xe/image/upload/v1724773514/bdoxner0tmuzow1avwxs.jpg",
                href: "https://www.youtube.com/watch?v=LMNVfOu_7a4",
              }}
              caption={"Watch Podcast"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
