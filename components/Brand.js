import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import { brand2 } from "@/assets/data/dummydata";

const Brand = () => {
  return (
    <>
      <section className="brand">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Partners" />
          </div>
          <div className="brand-content grid-12 py">
            {brand.map((item) => (
              <div className="images" key={item.id}>
                <img
                  src={item.cover}
                  alt={item.id}
                  width="100%"
                  height="100%"
                  onClick={() => (window.location.href = item.link)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>

          {/* <div className="heading-title">
            <Title title="In the Media" />
          </div>
          <div className="brand-content grid-7 py">
            {brand2.map((item) => (
              <div className="images" key={item.id}>
                <img
                  src={item.cover}
                  alt={item.id}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Brand;
