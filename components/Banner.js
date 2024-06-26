import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Secure your ##CapTech2024 ticket" /> <br />
            <TitleLogo title="Early bird discount 20% till 30th June 2024" />
          </div>
          <div>
            <button className="button-primary">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
