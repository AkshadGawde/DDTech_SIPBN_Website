import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import { SuccessCarousel } from "@/components/common/SuccessCarousel";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Index = () => {
  return (
    <>
        <div className="carouselHolder">
          <SuccessCarousel/>
        </div>
    </>
  );
};

export default Index;
