import React, { useState } from 'react'

function TicketPage() {
    
    const [ticket1,setTicket1] = useState("");

    const[hidden,setHidden] = useState("none");

    function handleMouseOver(){
        setHidden("")
    }
    function handleMouseOut(){
        setHidden("none")
    }
    
    
    return (
    <div className='ticketContent'>
        <div className="ticketCard">
            <h3>#CapTech2024 Plus Post Networking</h3>
            <h2>$959</h2>
            <span>1,199</span>
            <hr />
            <ul>
                <li>
                1 Day Pass
                </li>
                <li>
                 Post Networking Drinks
                </li>    
            </ul>
            <hr />
            <button className='ticketButton'>Buy Now!</button>
        </div>
        <div className="ticketCard">
            <h3>#CapTech2024 Summit Plus Welcome Drinks</h3>
            <h2>$1,199</h2>
            <span>1,499</span>
            <hr />
            <ul style={{listStyleType:"circle"}}>
                <li>
                2 Day Pass
                </li>
                <li>
                Welcome Drinks + Post Networking Drinks
                </li>    
            </ul>
            <hr />
            <button className='ticketButton'>Buy Now!</button>
        </div>
        <div className="ticketCard">
            <h3>#CapTech2024 – Summit Pass</h3>
            <h2>$2,250</h2>
            <hr />
            <ul style={{listStyleType:"circle"}}>
                <li>
                All 4 Day Pass
                </li>
                <li>
                Welcome Drinks + Post Networking Drinks <br /> + Business Matching Session + Exclusive Invitational Diner
                </li>
            </ul>
            <hr />
            <button className='ticketButton'>Buy Now!</button>
        </div>
        <div className="ticketCard">
            <h3>#CapTech2024 – Corporate Table of 10</h3>
            <h2>$11,990</h2>
            <hr />
            <ul style={{listStyleType:"circle"}}>
                <li>
                1 Day Pass
                </li>
                <li>
                Post Networking Drinks
                </li>
            </ul>
            <hr />
            <button className='ticketButton'>Buy Now!</button>
        </div>
    </div>
  )
}

export default TicketPage
