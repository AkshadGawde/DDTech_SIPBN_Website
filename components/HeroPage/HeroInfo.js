import React from 'react'

function HeroInfo() {
  return (
    <>
    <div className='heroContainer' style={{background:"linear-gradient(135deg, #1e3c72 0%, #000000 50%)"}}>
      <div className="heroContent">
            <div className="agendaBox">
              <div className='logoCutout'>
                <h2>SIPBN</h2>
                <hr />
                <h2>2024</h2>
              </div>
              <div>
                <p className='agendaText'>Organised by WOBI in major cities across the globe, the World Business <br /> Forum gathers thousands of senior executives to learn <br /> from world-class business thought leaders.</p>
                <br />
                <p className='agendaText'>The Forum focuses on the most relevant management topics for today’s business leaders as they face the challenge of steering their teams and organisations.</p>
              </div>                
              <button className='button-primary' style={{marginTop:"20px"}}>
                Register your Interest
              </button>
            </div>
            <div className="agendaBox">
              <img src="https://wbf.wobi.com/wp-content/uploads/2024/05/nuev.webp" alt="" style={{borderRadius:"10%"}} className='agendaImage'/>
            </div>
          </div>
    </div>
    </>
  )
}

export default HeroInfo
