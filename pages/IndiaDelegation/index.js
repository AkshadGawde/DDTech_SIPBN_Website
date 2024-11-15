import React from "react";

const TradeInvestmentMission = () => {
  return (
    <div className="mission-page">
      <div className="background">
        

        <div className="content">
          <h1 className="main-title">TRADE AND INVESTMENT MISSION TO INDIA</h1>
          <p className="sub-title">
            OPPORTUNITY TO EXPAND YOUR BUSINESS TO THE WORLD'S FASTEST GROWING ECONOMY
          </p>

          {/* Categories Section */}
          <div className="categories">
            <ul>
              <li>Renewable Energy</li>
              <li>Technology and Outsourcing</li>
              <li>Food and Beverages</li>
              <li>Mining and Exploration</li>
              <li>Healthcare</li>
              <li>Financial Services</li>
            </ul>
          </div>

          {/* Image Grid Section */}
          <div className="image-grid">
            <div className="image-item">
              <img src="https://www.theamegroup.com/wp-content/uploads/2016/11/information-technology-outsourcing.jpeg" alt="Technology and Outsourcing" />
              <p className="image-caption">Technology and Outsourcing</p>
            </div>
            <div className="image-item">
              <img src="https://www.nationalgrid.com/sites/default/files/styles/content_embedded_image/public/images/EnergyExplained_DifferentTypesRenewableEnergy_640x360.jpg" alt="Renewable Energy" />
              <p className="image-caption">Renewable Energy</p>
            </div>
            <div className="image-item">
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/9/343652787/GZ/UL/NN/181022856/mining-exploration-services.jpeg" alt="Mining and Exploration" />
              <p className="image-caption">Mining and Exploration</p>
            </div>
          </div>

          {/* Info Section */}
          <div className="info-sections">
            <div className="info-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tNbskQdNfCC5GjTjH9dtplNjV-ldBrHe8Q&s" alt="Business Meetings" />
              <p>Business Meetings & Introductions</p>
            </div>
            <div className="info-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tNbskQdNfCC5GjTjH9dtplNjV-ldBrHe8Q&s" alt="Government Officials" />
              <p>Meetings with Government Officials</p>
            </div>
            <div className="info-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tNbskQdNfCC5GjTjH9dtplNjV-ldBrHe8Q&s" alt="Sightseeing" />
              <p>Sightseeing Activities</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="details">
            <p>Including Delhi & Mumbai</p>
            <p>Dates: 3rd Feb 2025 to 10th Feb 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeInvestmentMission;
