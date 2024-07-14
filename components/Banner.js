import React from "react";
import { Title, TitleSm, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <h2 className="bannerTitle">Secure your #CapTech2024 ticket!</h2> <br />
            <TitleSm title="Early bird discount 20% till 31st July 2024" />
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
