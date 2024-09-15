import React, { useEffect } from "react";
import AOS from "aos";

function HeroMain() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div
      className="heroContainer"
      style={{
        background: "linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3))",
        padding:"5% 0"
      }}
    >
      <video className="bgVideo" autoPlay muted loop plays-inline>
        <source
          src="https://res.cloudinary.com/dueoon8xe/video/upload/v1723785194/Speakers%20-%20Sipbn/hshdkrcut1ziuoddwwnd.mp4"
          type="video/mp4"
        />
      </video>
      <div className="heroContent">
        <div className="box" data-aos="fade-right">
          <h2>
            #CapTech2024 <br />
            26th November 2024
          </h2>
          <p>Discover . Connect . Execute</p>
          <div style={{ display: "flex" }}>
            <button className="button-primary">Download Brocher</button>
            <button className="secondary-button">Buy Now</button>
          </div>
        </div>
        <div className="box" data-aos="fade-left">
          <div className="mediaHolder">
            <div className="brandImageHolder">
              <img
                src="/images/sipbnLogo.png"
                className="brandImage"
                alt=""
              />
              <div className="brandTextHolder">
                <h2>#CapTech2024</h2>
                <p>November 2024</p>
                <hr />
                <i>ICC SYDNEY</i>
              </div>
            </div>
            <video style={{ width: "60%", borderRadius: "10px" }} controls>
              <source src="https://res.cloudinary.com/dueoon8xe/video/upload/v1723785194/Speakers%20-%20Sipbn/hshdkrcut1ziuoddwwnd.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMain;
