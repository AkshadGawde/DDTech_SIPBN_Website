import React from "react";

const BusinessForum = () => {
  return (
    <div className="business-forum">
      <div className="business-forum__content">
        <div className="business-forum__images">
          <div className="business-forum__image image-1">
            <img src="" alt="" className="squareImage"/>
          </div>
          <div className="business-forum__image image-2"></div>
          <div className="business-forum__image image-3"></div>
          <div className="business-forum__image image-4"></div>
        </div>
        <div className="business-forum__info">
          <h2>World Business Forum SYDNEY</h2>
          <h3>All-Access Ticket Packs</h3>
          <ul>
            <li>Private events</li>
            <li>VIP seating & check-in</li>
            <li>Co-Branded Certificates</li>
            <li>Co-Branded Executive Summary</li>
            <li>30-Day on-demand access</li>
            <li>Access to 100+ hours of online masterclasses</li>
          </ul>
          <a href="#enquire" className="enquire-btn">
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessForum;
