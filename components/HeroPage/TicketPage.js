import React, { useState } from 'react';

function TicketPage() {
  return (
    <div className='ticketContent'>
      <div className="ticketCard">
        <h3>Platinum</h3>
        <div className='customHr'></div>
        <h2>
          $3,390
        </h2>
        <span>
          $4,500
        </span>
        <CardDropDown content={{
          "l1": "Mera Lund",
          "l2": "Tera Lund"
        }} />
      </div>

      <div className="ticketCard">
        <h3>Platinum</h3>
        <div className='customHr'></div>
        <h2>
          $3,390
        </h2>
        <span>
          $4,500
        </span>
        <CardDropDown content={{
          "l1": "Feature 1",
          "l2": "Feature 2"
        }} />
      </div>

      <div className="ticketCard">
        <h3>Platinum</h3>
        <div className='customHr'></div>
        <h2>
          $3,390
        </h2>
        <span>
          $4,500
        </span>
        <CardDropDown content={{
          "l1": "Feature 1",
          "l2": "Feature 2"
        }} />
      </div>

      <div className="ticketCard">
        <h3>Platinum</h3>
        <div className='customHr'></div>
        <h2>
          $3,390
        </h2>
        <span>
          $4,500
        </span>
        <CardDropDown content={{
          "l1": "Feature 1",
          "l2": "Feature 2"
        }} />
      </div>
    </div>
  );
}

export function CardDropDown({ content = { l1: 'No content', l2: 'No content' } }) {
  const [checked, setChecked] = useState(false);

  const handleMouseEnter = () => {
    setChecked(true);  // Set the radio as checked when mouse hovers
  };

  const handleMouseLeave = () => {
    setChecked(false);  // Uncheck the radio when the mouse leaves
  };

  const uniqueId = `accordian-${Math.random().toString(36).substr(2, 9)}`;  // Generate a unique ID for each radio button

  return (
    <>
      <ul className="accordian">
        <li>
          <input 
            type="radio" 
            name="accordian" 
            id={uniqueId} 
            checked={checked} 
            readOnly 
          />
          <label 
            htmlFor={uniqueId} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            Benefits
          </label>
          <div className="accordianContent">
            <ul className='benefitList'>
              <li>
                {content.l1}
              </li>
              <li>
                {content.l2}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );
}

export default TicketPage;
