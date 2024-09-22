import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

function HeroInfo() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div
        className="heroContainer"
        style={{ padding: "10px", justifyContent: "space-evenly" }}
      >
        <div
          className="heroContent"
          style={{ padding: "10px", justifyContent: "space-evenly" }}
        >
          <div
            className="agendaBox"
            style={{ padding: "10px", justifyContent: "space-evenly" }}
          >
            <div>
              <h2 style={{ marginBottom: "20px" }}>#CapTech2024</h2>
              <p className="agendaText">
                Organised by SIPBN Inc, #CapTech2024 is your gateway to the
                forefront of innovation offering an unparalleled opportunity to
                engage directly with the luminaries of future-focused
                industries.
              </p>
              <br />
              <p className="agendaText">
                This premium summit uniquely convenes an elite ensemble of world
                class speakers, business leaders, investors and policymakers,
                fostering a rare environment for high-level networking and
                collaborative ventures across eight key sectors.
              </p>
              <br />
              <p className="agendaText">
                Parliament House picture: Please remove the dull orange colour
                from the picture Team drinks picture: please remove the top
                empty part of the room
              </p>
            </div>
            <button
              className="button-primary"
              style={{ marginTop: "20px", fontSize: "16px" }}
            >
              <Link
                href="/contact"
                passHref
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Register your Interest
              </Link>
            </button>
          </div>
          <div className="agendaBox">
            <img
              src="https://res.cloudinary.com/dueoon8xe/image/upload/v1727035556/team1_ud8tb6.jpg"
              alt=""
              style={{ borderRadius: "40px" }}
              className="agendaImage"
            />
            <br />
            <img
              src="https://res.cloudinary.com/dueoon8xe/image/upload/v1727035731/team2_g87f2y.jpg"
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
