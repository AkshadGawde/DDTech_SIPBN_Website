import React from "react";
import { Title } from "../common/Title";

function HeroPurpose() {
  return (
    <>
      <div className="heroContainer2">
        <div className="purposeContainer">
          <Title title="Purpose" />
          <h2>Our inspiration for 2024: Discover : Connect : Execute</h2>
          <p className="purposeTextContainer">
            Discover: Explore Australia’s future-focused industries, featuring
            visionary speakers, thought leaders, and innovative resolutions that
            shape the landscape of tomorrow.
            <br /> <br />
            Connect: Forge meaningful connections by engaging in deals and
            investments that propel Australia’s future-focused industries
            forward. Connect with high-level individuals, including investors,
            industry leaders, and tech innovators.
            <br /> <br />
            Execute: Develop tangible outcomes by bringing in private capital,
            funds, and talent. Execute strategies, forge partnerships, attract
            investments, and assemble a team of talented individuals to bring
            your vision to life.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroPurpose;
