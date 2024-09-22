import React, { useState } from "react";
import Script from "next/script"; // Import Next.js Script component

function TicketPage() {
  const eventId = "772015889307"; // Your Eventbrite event ID

  return (
    <>
      <Script 
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js" 
        strategy="afterInteractive"
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <h2>Ticket Availability is Limited - Get Yours Today!</h2>
        <h3>20% Discount Valid until 30 September 2024</h3>
      </div>
      <div className="ticketContent">
        <div className="ticketCard">
          <h3>#CapTech2024 Summit Pass</h3>
          <h2>$2,250</h2>
          <button
            className="ticketButton"
            onClick={() => openEventbriteWidget(eventId)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );

  function openEventbriteWidget(eventId) {
    window.EBWidgets.createWidget({
      widgetType: "checkout",
      eventId: eventId,
      modal: true,
      modalTriggerElementId: "eventbrite-widget-modal-trigger", // Optional
      onOrderComplete: () => {
        console.log("Order completed!");
      },
    });
  }
}

export default TicketPage;
