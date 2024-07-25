import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Blog = () => {
  return (
    <>
       <div className="container">
        <br/>
        <Title title={"Special Edition: Federal Budget Highlights"} /> 
           

<div className="blogsContainer">
             
                
                <p className="blogsDescription2">
                In this special edition, we bring you comprehensive coverage of the
          recent Federal Budget and its significant measures that align with the
          interests of our members and partners. This budget introduces several
          initiatives to alleviate the cost of living pressures, boost economic
          growth, and foster innovation across various sectors. Here’s a
          detailed breakdown of what this means for you and our community.
                </p>
              
              
            </div>

           <hr/>
            <Title title={"Key Highlights of the Federal Budget"} /> 
            

<div className="blogsContainer">
              <div>
                <h2 className="blogsTitle">Cost of Living Relief:</h2>
<br/>
                <p className="blogsDescription2">
                
                Energy Bill Rebate: Households will benefit from a $300 rebate on energy bills.
              <br /> 
                Rental Assistance: Enhanced rental assistance to ease financial burdens.
                 
              
                </p>
              </div>
              
            </div>

            

           

<div className="blogsContainer">
              <div>
                <h2 className="blogsTitle">Taxation and Superannuation:</h2>
<br/>
                <p className="blogsDescription2">
                Stage 3 Tax Cuts: Effective July 1, 2024, taxpayers will save on taxes based on their marginal taxable income, increasing disposable incomes and stimulating consumer spending.
<br/>
              Superannuation Contributions: From July 1, 2024, higher contributions to superannuation funds will be allowed, injecting additional funds into self-managed super funds and boosting investment activity.
<br/>
            
                </p>
              </div>
              
            </div>

            

           

<div className="blogsContainer">
              <div>
                <h2 className="blogsTitle">Manufacturing and Clean Energy Initiatives:</h2>
<br/>
                <p className="blogsDescription2">
                "Future Made in Australia Program: $23 billion allocated to encourage manufacturing and private sector investment to achieve net zero emissions.
<br/>
              "Critical Minerals: $7 billion Production Tax Incentive over eleven years to improve manufacturing and supply chain capabilities.
<br/>
              "Hydrogen Industry: $6.7 billion over ten years for a Hydrogen Production Tax Incentive, supporting a competitive hydrogen industry.
<br/>
              "Solar Panels and Batteries: $1.4 billion to incentivize production, presenting significant investment opportunities."
                </p>
              </div>
              
            </div>

            

           

<div className="blogsContainer">
              <div>
                <h2 className="blogsTitle">Medical Research and Healthcare:</h2>
<br/>
                <p className="blogsDescription2">
                Medical Research Funding: $1.4 billion investment into the Medical Research Future Fund to advance medical innovations.,
                
                </p>
              </div>
             
            </div>

            


            
           
         

<div className="blogsContainer">
              <div>
                <h2 className="blogsTitle">Affordable Housing:</h2>
<br/>
                <p className="blogsDescription2">
                Concessional Finance: $1.9 billion investment in concessional finance for community housing providers to boost affordable and social housing projects.,

                </p>
              </div>
              
            </div>

            

           

<div className="blogsContainer">
              <div>
                <h2 className="blogsTitle">Foreign Investment Transparency:</h2>
<br/>
                <p className="blogsDescription2">
                Capital Gains Tax: Changes to the foreign resident capital gains tax framework to enhance transparency in foreign investment and tax rules.
<br/>
                </p>
              </div>
             
             
            </div>
            
         

<div className="blogsContainer">
              <div>
                <h2 className="blogsTitle">Support for Small Businesses:</h2>
<br/>
                <p className="blogsDescription2">
                Asset Write-Off: Instant asset write-off for small businesses extended until June 30, 2025, allowing deductions for eligible assets up to $20,000.
                </p>
              </div>
             
            </div>

            
            

 <hr/>
            
              <Title title={"SIPBN Inc.’s Commitment"} />
          

<div className="blogsContainer">
              
              <div>
               
                <p className="blogsDescription2">
                At SIPBN Inc., we are
            dedicated to leveraging these budget measures to drive progress and
            create opportunities for our community. Our mission is to provide
            live opportunities and connections in Australia and overseas for our
            members, investors, founders, partners, and associates.
                </p>
              </div>
             
            </div> 
            
            <hr/>
            <Title title={"Upcoming Events and Opportunities"} />
           

<div className="blogsContainer">
              <div>
                
                <p className="blogsDescription2">
                Stay tuned for
            our upcoming Economic Update Event by SIPBN on 28th June 2024 at the
            Sydney Startup Hub. Join us as we delve into how these budget
            measures can benefit you and your business. Don’t miss this
            opportunity to connect with industry leaders and peers.
                </p>
              </div>
             
            </div>

          
             
            </div>
       
      
       
    </>
  );
};

export default Blog;
