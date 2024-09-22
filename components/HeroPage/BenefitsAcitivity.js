import React, { useState } from "react";
import { useRouter } from "next/router";
import benefit1 from "@/public/images/benefit1.png";

const BenefitsActivities = () => {
  const router = useRouter();

  const handleEnquireClick = () => {
    router.push("/contact"); // Redirect to the "/contact" page
  };

  const [activeTab, setActiveTab] = useState("benefits");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="benefits-activities-container ">
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
            <img
              src="https://img.icons8.com/?size=100&id=999&format=png&color=FFFFFF"
              alt="Elevate Your Brand"
            />
            <h3>Brand Awareness</h3>
            <p>Skyrocket positioning, awareness, and visibility</p>
          </div>
          <div className="benefit-item">
            <img
              src="https://img.icons8.com/?size=100&id=63371&format=png&color=FFFFFF"
              alt="Unlock New Revenue"
            />
            <h3>Global Investors</h3>
            <p>Unparalleled business acquisition and prospecting</p>
          </div>
          <div className="benefit-item">
            <img
              src="https://img.icons8.com/?size=100&id=boPtdpDS9FXC&format=png&color=FFFFFF"
              alt="Be the Authority"
            />
            <h3>Lead Generation</h3>
            <p>Position as an undisputed thought leader</p>
          </div>
          <div className="benefit-item">
            <img
              src="https://img.icons8.com/?size=100&id=1846&format=png&color=FFFFFF"
              alt="Elite Connections"
            />
            <h3>Exclusive Networking</h3>
            <p>
              Access an exclusive network with global business leaders and
              investors
            </p>
          </div>
        </div>
      )}

      {activeTab === "activities" && (
        <div className="activities-content">
          <div className="activity-item">
            <img
              src="https://img.icons8.com/?size=100&id=38511&format=png&color=FFFFFF"
              alt="Prime Brand Visibility"
            />
            <h3>NSW Parliament Drinks</h3>
          </div>
          <div className="activity-item">
            <img
              src="https://img.icons8.com/?size=100&id=1074&format=png&color=FFFFFF"
              alt="Private Events"
            />
            <h3>#CapTech All Day Event + Post Event Drinks</h3>
          </div>
          <div className="activity-item">
            <img
              src="https://img.icons8.com/?size=100&id=152&format=png&color=FFFFFF"
              alt="Insider Access"
            />
            <h3>VIP seating & check-in</h3>
          </div>
          <div className="activity-item">
            <img
              src="https://img.icons8.com/?size=100&id=6899&format=png&color=FFFFFF"
              alt="Networking Hotpots"
            />
            <h3>Invite Only Dinner</h3>
          </div>
          <div className="activity-item">
            <img
              src="https://img.icons8.com/?size=100&id=kFF2qNmpaatO&format=png&color=FFFFFF"
              alt="Networking Hotpots"
            />
            <h3>
              Two Days of Dedicated Business Sessions at Shangri-la Sydney
            </h3>
          </div>
          <div className="activity-item">
            <img
              src="https://img.icons8.com/?size=100&id=3651&format=png&color=FFFFFF"
              alt="Networking Hotpots"
            />
            <h3>Master Class by World leader Michael Masterson on:</h3>
            <p>
              How to go from pitching to catching investors using your hidden
              assets
            </p>
          </div>
          {/* Additional activity items can be added here */}
        </div>
      )}

      <button className="enquire-button" onClick={handleEnquireClick}>
        ENQUIRE ABOUT SPONSORSHIP OPPORTUNITIES
      </button>
    </div>
  );
};

export default BenefitsActivities;
