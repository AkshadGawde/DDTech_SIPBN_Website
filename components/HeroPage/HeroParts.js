import React from "react";

function HeroParts() {
  return (
    <div className="heroContainer2" style={{height:"100%"}}>
      <div
        className="heroContent"
        style={{ padding: "10px", justifyContent: "center" }}
      >
        <div className="box">
          <h1 className="partHeader">
          50+ SPEAKERS, BUSINESS LEADERS AND INVESTORS READY TO DO BUSINESS
            <br />
          </h1>
        </div>
        <div className="box">
          {/* <img
            src="https://res.cloudinary.com/dueoon8xe/image/upload/v1726314898/v3nyhcglpafyizkdurcr.png"
            className="partImage"
            alt="hahahah"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default HeroParts;
