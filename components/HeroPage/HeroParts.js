import React from 'react'

function HeroParts() {
  return (
    <div className='heroContainer'>
        <div className="heroContent" style={{padding:"10px", justifyContent:"space-evenly"}}>
            <div className="box">
                <h1 className='partHeader'>
                20+ YEARS OF <br /> INSPIRING THE <br /> GLOBAL <br /> EXECUTIVE <br /> COMMUNITY
                </h1>
            </div>
            <div className="box">
                <img src='https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg' className='partImage' alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default HeroParts
