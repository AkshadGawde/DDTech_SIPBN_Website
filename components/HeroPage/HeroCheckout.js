import React from "react";

function HeroCheckout() {
  return (
    <div
      className="heroContainer2"
      style={{ display: "flex", alignItems: "center", flexDirection: "column"}}
    >
      <h1 style={{margin:"2%"}} className="timerHeader">TICKET AVAILABILITY IS LIMITED GET YOURS TODAY</h1>
      <hr style={{ width: "20%", border: 0, borderTop: "1px solid #ccc;" }} />
      <h2>Valid Until 27th september!</h2>
      {/* Insert countdown */}
    </div>
  );
}

export default HeroCheckout;
