import React, { useState } from 'react';

function TicketPage() {
    return (
      <>
      <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column", marginBottom:"20px"}}
    >
      <h1 style={{margin:"2%"}} className="timerHeader">TICKET AVAILABILITY IS LIMITED GET YOURS TODAY</h1>
      <hr style={{ width: "20%", border: 0, borderTop: "1px solid #ccc;" }} />
      <h2>Valid Until 27th september!</h2>
      {/* Insert countdown */}
      </div>
      <div className='ticketContent'>
        <div className="ticketCard">
          <h3>CapTech2024 <br /> Summit Pass</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #b9fbc0, #00d2ff)" }}></div>
          <h2>$3,390</h2>
          <span>$4,500</span>
          <CardDropDown 
            content={{
              l1: "Welcome Drinks at NSW Parliament House on Monday 25 November 2024",
              l2: "#CapTech2024 Summit on Tuesday 26 November 2024 at ICC Sydney",
              l3: "#CapTech2024 Summit on Tuesday 26 November 2024 post networking drinks",
              l4: "Business Matching session on Wednesday 27 November 2024 at Shangri-La Sydney",
              l5:"Exclusive and Invitation Only Private Diner on Thursday 28 November 2024"
            }} 
            maxHeight="660px" 
          />

            <button className='ticketButton'>Buy Now</button>

        </div>
        
        <div className="ticketCard">
          <h3>#CapTech2024 Summit + Welcome Drinks</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #f9d423, #ff4e50)" }}></div>
          <h2>$2,500</h2>
          <span>$3,000</span>
          <CardDropDown 
            content={{
              l1: "Welcome Drinks at NSW Parliament House on Monday 25 November 2024",
              l2: "CapTech2024 Summit on Tuesday 26 November 2024 at ICC Sydney",
              l3: "CapTech2024 Summit on Tuesday 26 November 2024 post networking drinks"
            }} 
            maxHeight="400px" 
          />
          <button className='ticketButton'>Buy Now</button>
        </div>
        
        <div className="ticketCard">
          <h3>#CapTech2024 <br /> + Post Networking</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #dcdcdc, #f5f5f5)" }}></div>
          <h2>$1,500</h2>
          <span>$2,000</span>
          <CardDropDown 
            content={{
              l1: "#CapTech2024 Summit on Tuesday 26 November 2024 at ICC Sydney",
              l2: "#CapTech2024 Summit on Tuesday 26 November 2024 post networking drinks"
            }} 
            maxHeight="300px" 
          />
          <button className='ticketButton'>Buy Now</button>
        </div>
  
        <div className="ticketCard">
          <h3>#CapTech2024  Corporate Table of 10</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #d50032, #c51162)" }}></div>
          <h2>$11,990</h2>
          <span>$15,000</span>
          <CardDropDown 
            content={{
              l1: "#CapTech2024 Summit on Tuesday 26 November 2024 at ICC Sydney",
              l2: "#CapTech2024 Summit on Tuesday 26 November 2024 post networking drinks"
            }} 
            maxHeight="200px" 
          />
          <button className='ticketButton'>Buy Now</button>
        </div>
      </div>
      </>
    );
  }

export function CardDropDown({ content = {}, maxHeight = '0px'}) {
    const [checked, setChecked] = useState(false);
  
    const handleMouseEnter = () => {
      setChecked(true);  // Set the radio as checked when mouse hovers
    };
  
    const handleMouseLeave = () => {
      setChecked(false);  // Uncheck the radio when the mouse leaves
    };
  
    const uniqueId = `accordian-${Math.random().toString(36).substr(2, 9)}`;  // Generate a unique ID for each radio button
  
    return (
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
            Inclusions
          </label>
          <div 
            className="accordianContent" 
            style={{
              maxHeight: checked ? maxHeight : '0px',
              transition: 'max-height 0.5s ease, padding 0.5s ease',
              overflow: 'hidden' // Ensure content is hidden when collapsed
            }}
          >
            <ul className='benefitList'>
              {Object.values(content).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    );
  }

export default TicketPage;
