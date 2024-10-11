import React, { useState } from "react";
import { Title } from "../common/Title";

function HeroFeatures() {
  const [src, setSrc] = useState("/images/memberLunch.jpg");

  function handleGameChanger() {
    setSrc("/images/memberLunch.jpg");
  }
  function handleImpact() {
    setSrc(
      "https://res.cloudinary.com/dueoon8xe/image/upload/v1726562199/la2gnahnsrhahknbawln.jpg"
    );
  }
  function handleInnovate() {
    setSrc(
      "https://res.cloudinary.com/dueoon8xe/image/upload/v1726561075/Pitching_session_Feb_29_2024_r8y4is.jpg"
    );
  }

  return (
    <div className="heroContainer2">
      <div className="featureContainer">
        <Title title="Where Business Leaders Converge" />

        <div
          className="heroContent"
          style={{
            justifyContent: "center",
            marginTop: "20px",
            padding: "10px 30px",
          }}
        >
          <div
            className="featureContainer"
            style={{
              justifyContent: "flex-end",
              alignItems: "normal",
            }}
          >
            <button className="button-primary" onClick={handleGameChanger}>
              GAME-CHANGING CEOS
            </button>
            <button className="secondary-button" onClick={handleImpact}>
              IMPACTFUL DESICION MAKERS
            </button>
            <button className="button-primary" onClick={handleInnovate}>
              INNOVATIVE ENTREPRENEURS
            </button>
          </div>
          <img src={`${src}`} alt="" className="featureImg" />
        </div>
        {/* <div style={{display:"flex", marginBottom:"30px"}}>
        <button className='secondary-button'>Download Brocher</button>
        <button className='secondary-button'>Buy <br /> Tickets</button>
      </div> */}
      </div>
    </div>
  );
}

export default HeroFeatures;
