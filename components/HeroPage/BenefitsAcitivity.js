import React, { useState } from "react";

const BenefitsActivities = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="benefits-activities-container heroContainer">
      <div className="tabs">
        <button
          className={activeTab === "benefits" ? "tab active" : "tab"}
          onClick={() => handleTabChange("benefits")}
        >
          BENEFITS
        </button>
        <button
          className={activeTab === "activities" ? "tab active" : "tab"}
          onClick={() => handleTabChange("activities")}
        >
          ACTIVITIES
        </button>
      </div>

      {activeTab === "benefits" && (
        <div className="benefits-content">
          <div className="benefit-item">
            <img src="" alt="Elevate Your Brand" />
            <h3>Elevate Your Brand</h3>
            <p>Skyrocket positioning, awareness, and visibility</p>
          </div>
          <div className="benefit-item">
            <img src="" alt="Unlock New Revenue" />
            <h3>Unlock New Revenue</h3>
            <p>Unparalleled business acquisition and prospecting</p>
          </div>
          <div className="benefit-item">
            <img src="" alt="Be the Authority" />
            <h3>Be the Authority</h3>
            <p>Position as an undisputed thought leader</p>
          </div>
          <div className="benefit-item">
            <img src="" alt="Elite Connections" />
            <h3>Elite Connections</h3>
            <p>
              Access an exclusive network of 2,500+ senior executives from
              across all industries
            </p>
          </div>
        </div>
      )}

      {activeTab === "activities" && (
        <div className="activities-content">
          <div className="activity-item">
            <img src="/path-to-image5.png" alt="Prime Brand Visibility" />
            <h3>Prime Brand Visibility</h3>
            <p>Your brand in front of thousands of decision makers</p>
          </div>
          <div className="activity-item">
            <img src="/path-to-image6.png" alt="Private Events" />
            <h3>Private Events</h3>
            <p>
              Host exclusive gatherings of selected guests and keynote speakers
            </p>
          </div>
          <div className="activity-item">
            <img src="/path-to-image7.png" alt="Insider Access" />
            <h3>Insider Access</h3>
            <p>In-company sessions led by World Business Forum speakers</p>
          </div>
          <div className="activity-item">
            <img src="/path-to-image8.png" alt="Networking Hotpots" />
            <h3>Networking Hotpots</h3>
            <p>Unique activations in high-traffic areas</p>
          </div>
          {/* Additional activity items can be added here */}
        </div>
      )}

      <button className="enquire-button">
        ENQUIRE ABOUT SPONSORSHIP OPPORTUNITIES
      </button>
    </div>
  );
};

export default BenefitsActivities;
