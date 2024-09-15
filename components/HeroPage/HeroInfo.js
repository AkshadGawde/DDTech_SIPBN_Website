import React from "react";
import { useEffect } from "react";
import AOS from "aos";

function HeroInfo() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="heroContainer" style={{padding:'10px' , justifyContent:"space-evenly"}}>
        <div className="heroContent" style={{padding:'10px' , justifyContent:"space-evenly"}}>
          <div className="agendaBox" style={{padding:'10px' , justifyContent:"space-evenly"}}>
            <div className="logoCutout">
              <img src="/images/sipbnLogo.png" alt=""/>
              <hr />
              <h2>#CapTech2024</h2>
            </div>
            <div>
              <p className="agendaText">
                Organised by SIPBN in major cities across the globe, the World
                Business. #CapTech2024 is your gateway to the forefront of
                innovation offering an unparalleled opportunity to engage
                directly with the luminaries of future-focused industries.
              </p>
              <br />
              <p className="agendaText">
                This premium summit uniquely convenes an elite ensemble of
                business leaders, policymakers, and investors, fostering a rare
                environment for high-level networking and collaborative ventures
                across eight key sectors.
              </p>
            </div>
            <button className="button-primary" style={{ marginTop: "20px" }}>
              Register your Interest
            </button>
          </div>
          <div className="agendaBox">
            <img
              src="https://res.cloudinary.com/dueoon8xe/image/upload/v1726314898/v3nyhcglpafyizkdurcr.png"
              alt=""
              style={{ borderRadius: "40px" }}
              className="agendaImage"
            />
            <br />
            <img
              src="https://res.cloudinary.com/dueoon8xe/image/upload/v1726314898/v3nyhcglpafyizkdurcr.png"
              alt=""
              style={{ borderRadius: "40px" }}
              className="agendaImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroInfo;
