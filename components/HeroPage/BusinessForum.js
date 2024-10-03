import React from "react";

const BusinessForum = () => {
  return (
    <div className="business-forum">
      <div className="business-forum__content">
        <div className="business-forum__images">
          <div className="business-forum__image image-1"></div>
          <div className="business-forum__image image-2"></div>
          <div className="business-forum__image image-3"></div>
          <div className="business-forum__image image-4"></div>
        </div>
        <div className="business-forum__info">
          <h2>#CapTech2024 Summit Pass</h2>
          <ul>
            <li>1. NSW Parliament Drinks</li>
            <li>2. #CapTech2024 All Day Event + Post Event Drinks</li>
            <li>3. VIP seating & check-in</li>
            <li>4. Private Dinner</li>
            <li>
              5. Two Days of Dedicated Business Matching Sessions at Shangri-La
              Sydney
            </li>
            <li>
              6. Master class by world leader Michael Masterson on - "How to go
              from pitching to catching for investors using your hidden assets"
            </li>
          </ul>
          <a
            href={`/ticket-purchase?eventId=iaEHed2PE5Te0BmBwku3`}
            className="enquire-btn"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessForum;
