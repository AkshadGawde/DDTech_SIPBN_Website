import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import { Card } from "@/components/common/Card";
import { blogCards } from "@/assets/data/dummydata";

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} className="section-title" />
    <div className="desc-section">{children}</div>
  </>
);

const Aivs = () => {
  return (
    <>
      <div className="container">
        <br />
        <Title title={"Net Zero Emissions vs. AI's Rising Energy Consumption: A Complex Balance"} />

        <div className="blogsAuthor">
          <p>-Rez K.</p>
          <b>4 minute read</b>
        </div>
        <img src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1721736591/homePage/jquatrm5gch50shbjmrr.png" className="blogImg"/>

        <div className="blogsContainer">
          <p className="blogsDescription2">
          Net Zero Emissions is one of the terms that have gained popularity in the modern world as people face the realities of climate change. At the same time, the advancement in Artificial Intelligence (AI) is equally at a very fast pace not only changing industries and economies but offering very high levels of efficiency and capability. However, a significant challenge emerges at the intersection of these two trends: the concerns around energy consumption by AI and how this new technology can help us get to net-zero emissions.
          </p>
        </div>

        <TitleSm title={"Understanding Net Zero Emissions"} />

        <div className="blogsContainer">
          <div>
            <br />
            <p className="blogsDescription2">
            Net Zero Emissions means that the quantity of greenhouse gases emitted into the atmosphere equals to the amount that is actively being taken out of the atmosphere. Net zero means that the organisation’s emission of greenhouse gases is matched by the equivalent amount of gas removed or offset. This can be done in various ways such as opting for or promoting the use of renewable energy sources like solar, wind, or hydro power, planting trees, implementing the technique of carbon capture and storage or enhancement of efficiency in the use of energy.
            <br/><br/>
            Now more than ever, Australia is promoting its 'net-zero' vision, with the federal government aiming for net-zero emissions by 2050. Numerous Australian states and territories, as well as leading firms, are planning to achieve this goal even sooner, with targets set for 2030-2050. These commitments are driving significant investments in cleaner energy technologies, policies, and innovative methodologies for reducing carbon emissions. The nation's dedication to transitioning to a sustainable future is fostering advancements in renewable energy sectors such as solar, wind, and hydrogen power.
            </p>
          </div>
        </div>

        <TitleSm title={"The Double-Edged Sword of AI"} />

        <div className="blogsContainer">
          <div> 
            <br />
            <p className="blogsDescription2">
            AI is transforming the fields from healthcare to finance, improving efficiency, finding new opportunities, and boosting the economy. However, the processing complexity of training and deploying state-of-the-art AI models is significant and increasing. The servers as well as the necessary infrastructure for capturing and processing AI are placed in data centres that are turning into large power consumers.
              <br /> <br/>
              A study held recently revealed that training a single neural network AI model can cause as much carbon emission as five cars in their entire lifespan. This trend means that as AI is inserted into more and more applications its energy use will rise. The dichotomy here is stark: while it can assist in detecting opportunities in using energy and enhancing the performance in several areas, it has energy needs, which affect the sustainable development plans.
            </p>
          </div>
        </div>

        <hr/>

        <img src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1721738869/homePage/xmxhpoun1okaaxlpvdx3.png" alt="" className="blogImg" />

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">
              Manufacturing and Clean Energy Initiatives:
            </h2>
            <br />
            <p className="blogsDescription2">
              Future Made in Australia Program: $23 billion allocated to
              encourage manufacturing and private sector investment to achieve
              net zero emissions.
              <br />
              Critical Minerals: $7 billion Production Tax Incentive over eleven
              years to improve manufacturing and supply chain capabilities.
              <br />
              Hydrogen Industry: $6.7 billion over ten years for a Hydrogen
              Production Tax Incentive, supporting a competitive hydrogen
              industry.
              <br />
              Solar Panels and Batteries: $1.4 billion to incentivize
              production, presenting significant investment opportunities.
            </p>
          </div>
        </div>

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Medical Research and Healthcare:</h2>
            <br />
            <p className="blogsDescription2">
              Medical Research Funding: $1.4 billion investment into the Medical
              Research Future Fund to advance medical innovations.
            </p>
          </div>
        </div>

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Affordable Housing:</h2>
            <br />
            <p className="blogsDescription2">
              Concessional Finance: $1.9 billion investment in concessional
              finance for community housing providers to boost affordable and
              social housing projects.
            </p>
          </div>
        </div>

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Foreign Investment Transparency:</h2>
            <br />
            <p className="blogsDescription2">
              Capital Gains Tax: Changes to the foreign resident capital gains
              tax framework to enhance transparency in foreign investment and
              tax rules.
            </p>
          </div>
        </div>

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Support for Small Businesses:</h2>
            <br />
            <p className="blogsDescription2">
              Asset Write-Off: Instant asset write-off for small businesses
              extended until June 30, 2025, allowing deductions for eligible
              assets up to $20,000.
            </p>
          </div>
        </div>

        <hr />
        <TitleSm title={"SIPBN Inc.’s Commitment"} />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              At SIPBN Inc., we are dedicated to leveraging these budget
              measures to drive progress and create opportunities for our
              community. Our mission is to provide live opportunities and
              connections in Australia and overseas for our members, investors,
              founders, partners, and associates.
            </p>
          </div>
        </div>

        <hr />
        <TitleSm title={"Upcoming Events and Opportunities"} />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              Stay tuned for our upcoming Economic Update Event by SIPBN on 28th
              June 2024 at the Sydney Startup Hub. Join us as we delve into how
              these budget measures can benefit you and your business. Don’t
              miss this opportunity to connect with industry leaders and peers.
            </p>
          </div>
        </div>

        <hr />
        <TitleSm
          title={"2024 Federal Budget: SIPBN Clean Energy Committee's Analysis"}
        />

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Key Takeaways:</h2>
            <br />
            <p className="blogsDescription2">
              Major Renewable Focus: The budget has been praised as the biggest
              clean energy budget in Australia's history and commits $19.7
              billion to renewable energy, positioning Australia as a global
              leader in green energy and driving innovation in clean
              technologies.
              <br />
              Green Hydrogen Support: With $2 billion for the Hydrogen Headstart
              program and a $6.7 billion Production Tax Incentive, Australia is
              set to become a top green hydrogen producer, attracting
              significant investment.
              <br />
              Community and Workforce Development: $399.1 million for community
              support and $91 million for workforce training ensure the benefits
              of the energy transition are widely shared, supporting a fair
              shift to net-zero.
              <br />
              However, we note that the budget has a long-term horizon, with
              most incentives starting from 2027-28, and introducing new
              programs and initiatives might likely lead to potential regulatory
              and approval hurdles.
            </p>
          </div>
        </div>

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Federal Budget 2024: A Closer Look</h2>
            <br />
            <p className="blogsDescription2">
              The 2024 Federal Budget demonstrates Australia's commitment to
              climate action and green economic growth.
              <br />
              <br />
              <strong>Key highlights include:</strong>
              <br />
              Future Made in Australia Initiative: $13 billion for clean energy
              and critical minerals production to reduce reliance on overseas
              supply chains.
              <br />
              Energy Bill Relief Fund: $3.5 billion to reduce energy costs for
              households and businesses.
              <br />
              Hydrogen Production Tax Incentive: $6.7 billion to grow a
              competitive hydrogen industry and support decarbonisation.
              <br />
              Critical Minerals Production Tax Incentive: $7 billion to boost
              critical minerals refining and processing for supply chain
              resilience.
              <br />
              Solar and Battery Manufacturing Support: $1.4 billion to enhance
              manufacturing capacity for solar panels and batteries.
            </p>
          </div>
        </div>

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Industry Reactions:</h2>
            <br />
            <p className="blogsDescription2">
              ARENA welcomed the expanded funding and new programs announced in
              the Budget 2024-25. The $7.1 billion funding package for programs
              administered by ARENA includes a $1.9 billion boost to ARENA’s
              baseline funding, $2 billion for round two of the Hydrogen
              Headstart program, and $1.7 billion for the Future Made in
              Australia Innovation Fund. ARENA’s CEO, Darren Miller, highlighted
              the importance of continued support to accelerate the energy
              transition and reduce emissions.
            </p>
          </div>
        </div>

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">
              Implications for Australia’s Renewable Energy Sector:
            </h2>
            <br />
            <p className="blogsDescription2">
              Hydrogen Economy: Incentives for hydrogen production will position
              Australia as a leader in renewable hydrogen, despite challenges in
              production costs, infrastructure, and storage.
              <br />
              <br />
              Boosting Investment: The budget’s funding and tax incentives will
              attract private investment, fostering rapid growth and innovation
              in renewable energy.
              <br />
              <br />
              Strengthening Infrastructure: Investments in solar and battery
              manufacturing will enhance infrastructure, making renewable energy
              more accessible and reliable.
              <br />
              <br />
              Critical Minerals: Support for critical minerals production will
              ensure Australia’s self-reliance, reducing dependence on global
              supply chains dominated by China.
              <br />
              <br />
              Global Comparison: Consistent policy support, akin to Germany’s
              Energiewende, will boost market confidence and attract long-term
              investments. Australia's focus aligns with global trends,
              potentially making it a leader in hydrogen and critical minerals.
              <br />
              <br />
              Economic and Environmental Benefits: The budget’s initiatives
              could create over 20,000 jobs, boost local economies, enhance
              energy security, and spur technological innovation, reducing costs
              as seen in battery technology.
            </p>
          </div>
        </div>
        <hr />
        <TitleSm title={"Challenges in the Clean Energy Transition "} />
        <div className="blogsContainer">
          <p className="blogsDescription2">
            Hydrogen Economy Challenges: High production costs, infrastructure
            needs, and storage/transportation issues require significant
            investment and advanced technology solutions.
            <br />
            <br />
            Critical Minerals Supply Chain: Australia must enhance mining and
            processing capabilities while ensuring sustainable practices to
            compete globally and mitigate environmental impacts.
            <br />
            <br />
            Regulatory and Policy Hurdles: Streamlining approval processes and
            maintaining long-term policy stability are crucial to avoid delays
            and attract sustained investment.
            <br />
            <br />
            Community and Workforce Engagement: Transparent communication for
            community acceptance and addressing skill shortages through training
            are essential for the renewable energy sector’s growth.
          </p>
        </div>
        <hr />
        <TitleSm title={"Conclusion"} />
        <div className="blogsContainer">
          <p className="blogsDescription2">
            The 2024 Federal Budget paves the way for a promising future in
            Australia’s clean energy sector by providing substantial funding
            allocations and tax incentives, fostering a favorable environment
            for private investment. Venture capitalists and private equity firms
            can leverage these incentives to fund innovative startups and
            projects. SIPBN’s global network could play a crucial role in
            facilitating cross-border investments and collaborations, attracting
            significant foreign capital and establishing strategic partnerships.
            By connecting international investors with Australian clean energy
            opportunities, SIPBN can drive significant advancements in the clean
            energy space. Increased funding for R&D and manufacturing support
            will enable SIPBN to foster technological innovation and support
            stages of commercialisation of new and emerging technologies. By
            providing platforms for startups to pitch ideas to investors, SIPBN
            can accelerate the development and deployment of innovative clean
            energy solutions.
          </p>
        </div>

        <hr />
        <TitleSm title={"Get in Touch:"} />
        <div className="blogsContainer">
          <p className="blogsDescription2">
            At the SIPBN Clean Energy Committee, we aim to support the
            transition to clean energy by connecting innovative technologies
            with vital funding and support. If you are an investor in the clean
            energy sector or have clean technology seeking investment, please
            reach out to the SIPBN Clean Energy Committee at Reza.k@sipbn.com.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aivs;
