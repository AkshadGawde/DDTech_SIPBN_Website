import React, { useEffect } from "react";
import AOS from "aos";

function HeroMain() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
    });
  }, []);
  return (
    
    <div className='heroContainer'>
        <video className="bgVideo" autoPlay muted loop plays-inline>
            <source src="https://res.cloudinary.com/dueoon8xe/video/upload/v1723785194/Speakers%20-%20Sipbn/hshdkrcut1ziuoddwwnd.mp4" type='video/mp4'/>
        </video>
      <div className="heroContent">
         <div className="box"data-aos="fade-right">
            <p>ICC SYDNEY , 13 & 14 November 2024</p>
            <h2>TWO DAYS , <br />
                2000+ EXECUTIVES
            </h2>
            <h3>Learning & Inspiration at the World's Premier Business Event</h3>
            <div style={{display:'flex'}}>
                <button className='button-primary'>
                    Download Brocher
                </button>
                <button className='secondary-button'>
                    Buy Now
                </button>
            </div>
         </div>
         <div className="box"data-aos="fade-left">
            <div className='mediaHolder'>
            <img src="https://info.wobi.com/wp-content/uploads/2023/11/wbf_syd_2024_logo_with_dates.svg?_t=1701360011" className='brandImage'  alt="" />
                 <video style={{width:'60%', borderRadius:"10px"}} controls>
                    <source src='https://res.cloudinary.com/dueoon8xe/video/upload/v1723785194/Speakers%20-%20Sipbn/hshdkrcut1ziuoddwwnd.mp4'/>
                 </video>
            </div>
         </div>
      </div>
    </div>
  )
}

export default HeroMain
