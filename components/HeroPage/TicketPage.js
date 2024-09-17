import React, { useState } from 'react';
import { Title,TitleSm } from '../common/Title';
import Link from 'next/link';

function TicketPage() {
    return (
      <>
      <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column", marginBottom:"20px"}}
    >
      <TitleSm title="TICKET AVAILABILITY IS LIMITED GET YOURS TODAY"/>  
      <hr style={{ width: "20%", border: 0, borderTop: "1px solid #ccc;" }} />
      <h2>Valid Until 27th september!</h2>
      {/* Insert countdown */}
      </div>
      <div className='ticketContent'>
        <div className="ticketCard">
          <h3>All Access <br /> Summit Pass</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #b9fbc0, #00d2ff)" }}></div>
          <h2>$2,249</h2>
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

            <Link href="#buy-section">
      <button className="ticketButton">
        Buy Now
      </button>
    </Link>

        </div>
        
        <div className="ticketCard">
          <h3>#CapTech2024 Summit + Welcome Drinks</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #f9d423, #ff4e50)" }}></div>
          <h2>$1,499</h2>
          <CardDropDown 
            content={{
              l1: "Welcome Drinks at NSW Parliament House on Monday 25 November 2024",
              l2: "CapTech2024 Summit on Tuesday 26 November 2024 at ICC Sydney",
              l3: "CapTech2024 Summit on Tuesday 26 November 2024 post networking drinks"
            }} 
            maxHeight="400px" 
          />
          <Link href="#buy-section">
      <button className="ticketButton">
        Buy Now
      </button>
    </Link>
        </div>
        
        <div className="ticketCard">
          <h3>#CapTech2024 <br /> + Post Networking</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #dcdcdc, #f5f5f5)" }}></div>
          <h2>$1,299</h2>
          <CardDropDown 
            content={{
              l1: "#CapTech2024 Summit on Tuesday 26 November 2024 at ICC Sydney",
              l2: "#CapTech2024 Summit on Tuesday 26 November 2024 post networking drinks"
            }} 
            maxHeight="300px" 
          />
          <Link href="#buy-section">
      <button className="ticketButton">
        Buy Now
      </button>
    </Link>
        </div>
  
        <div className="ticketCard">
          <h3>#CapTech2024  Corporate Table of 10</h3>
          <div className='customHr' style={{ background: "linear-gradient(135deg, #d50032, #c51162)" }}></div>
          <h2>$8,999</h2>
          <CardDropDown 
            content={{
              l1: "#CapTech2024 Summit on Tuesday 26 November 2024 at ICC Sydney",
              l2: "#CapTech2024 Summit on Tuesday 26 November 2024 post networking drinks"
            }} 
            maxHeight="200px" 
          />
          <Link href="#buy-section">
      <button className="ticketButton">
        Buy Now
      </button>
    </Link>
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
