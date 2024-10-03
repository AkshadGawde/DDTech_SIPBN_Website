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
        <SuccessCarousel showArrows={true} />
      </div>
      <div className="carouselHolder mobileCarousel">
        <SuccessCarousel showArrows={false} />
      </div>
    </>
  );
};

export default Index;
