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
            {/* <p> Buy tickets at 20% Discount with code SIPBN20. </p> */}
            {/* <p> Offer valid until October 31, 2024.</p> */}
          </div>
          <div>
            <button
              className="button-primary"
              onClick={() => {
                window.location.href = `/ticket-purchase?eventId=iaEHed2PE5Te0BmBwku3`;
              }}
            >
              Book now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
