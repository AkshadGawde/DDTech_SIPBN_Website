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
      <div className="containercms">
        <br />
        <Title title={"Page coming soon"} />
        
      </div>
    </>
  );
};

export default Blog;
