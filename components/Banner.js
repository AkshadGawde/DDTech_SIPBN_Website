import React from "react";
import { Title, TitleSm, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <h2 className="bannerTitle">Secure your #CapTech2024 ticket!</h2>{" "}
            <br />
            <TitleSm title="Early bird discount 20% till 30th September 2024" />
          </div>
          <div>
            <button
              className="button-primary"
              onClick={() => {
                window.location =
                  "https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307";
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
