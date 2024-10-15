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

const CleanEnergy = () => {
  return (
    <>
      <div className="container">
        <br />
        <Title title={"SIPBN Clean Energy Committee's Analysis"} />

        <img
          src="/blogimages/2024FedralBudget.png"
          alt=""
          className="blogImg"
        />

        <div className="blogsContainer"></div>

        <hr />
        <TitleSm title={"Key Takeaways"} />

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Major Renewable Focus:</h2>
            <p className="blogsDescription2">
              The budget has been praised as the biggest clean energy budget in
              Australia's history and commits $19.7 billion to renewable energy,
              positioning Australia as a global leader in green energy and
              driving innovation in clean technologies.
            </p>
            <br />
            <h2 className="blogsTitle">Green Hydrogen Support:</h2>
            <p className="blogsDescription2">
              With $2 billion for the Hydrogen Headstart program and a $6.7
              billion Production Tax Incentive, Australia is set to become a top
              green hydrogen producer, attracting significant investment.
            </p>
            <br />
            <h2 className="blogsTitle">Community and Workforce Development:</h2>
            <p className="blogsDescription2">
              $399.1 million for community support and $91 million for workforce
              training ensure the benefits of the energy transition are widely
              shared, supporting a fair shift to net-zero.
              <br />
              However, we note that the budget has a long-term horizon, with
              most incentives starting from 2027-28, and introducing new
              programs and initiatives might likely lead to potential regulatory
              and approval hurdles. <br /> <br /> Australia’s 2024 Federal
              Budget marks a pivotal moment in the country’s transition to a
              sustainable future. At SIPBN, we connect innovative technologies
              with vital funding opportunities. This article explores the
              budget’s clean energy allocation, its implications, and the
              critical role organisation like SIPBN can play in accelerating
              Australia’s renewable energy journey.
            </p>
          </div>
        </div>
        <hr />
        <TitleSm title={"Federal Budget 2024: A Closer Look "} />
        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              The 2024 Federal Budget demonstrates Australia's commitment to
              climate action and green economic growth. Key highlights include:
              <br />
              <br />
              <p />
              <h2 className="blogsTitle">
                Future Made in Australia Initiative:
              </h2>
              <p className="blogsDescription2">
                $13 billion for clean energy and critical minerals production to
                reduce reliance on overseas supply chains.
              </p>
              <br />
              <h2 className="blogsTitle">Energy Bill Relief Fund:</h2>
              <p className="blogsDescription2">
                $3.5 billion to reduce energy costs for households and
                businesses.
              </p>
              <br />
              <h2 className="blogsTitle">Hydrogen Production Tax Incentive:</h2>
              <p className="blogsDescription2">
                $6.7 billion to grow a competitive hydrogen industry and support
                decarbonisation.
              </p>
              <br />
              <h2 className="blogsTitle">
                Critical Minerals Production Tax Incentive:
              </h2>
              <p className="blogsDescription2">
                $7 billion to boost critical minerals refining and processing
                for supply chain resilience.
              </p>
              <br />
              <h2 className="blogsTitle">
                Critical Minerals Production Tax Incentive:
              </h2>
              <p className="blogsDescription2">
                $1.4 billion to enhance manufacturing capacity for solar panels
                and batteries.
              </p>
              <br />
            </p>
          </div>
        </div>
        <hr />
        <TitleSm title={"Industry Reactions"} />
        <div className="blogsContainer">
          <div>
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
              <br />
              <br />
              SEC’s Chief Executive, John Grimes, stated that the budget marks
              the beginning of Australia’s next industrial revolution, focusing
              on low-pollution, high-job growth. Grimes emphasised the positive
              impact of the budget on the economy and the planet, noting the
              support for renewable hydrogen, critical minerals, and clean
              energy manufacturing as pivotal for Australia’s prosperity.
            </p>
          </div>
        </div>
        <hr />
        <TitleSm
          title={"Implications for Australia’s Renewable Energy Sector"}
        />
        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Hydrogen Economy:</h2>
            <p className="blogsDescription2">
              Incentives for hydrogen production will position Australia as a
              leader in renewable hydrogen, despite challenges in production
              costs, infrastructure, and storage.
            </p>
            <br />
            <br />
            <h2 className="blogsTitle">Boosting Investment:</h2>
            <p className="blogsDescription2">
              The budget’s funding and tax incentives will attract private
              investment, fostering rapid growth and innovation in renewable
              energy.
            </p>
            <h2 className="blogsTitle">Strengthening Infrastructure:</h2>
            <p className="blogsDescription2">
              Investments in solar and battery manufacturing will enhance
              infrastructure, making renewable energy more accessible and
              reliable.
            </p>
            <br />
            <br />
            <h2 className="blogsTitle">Critical Minerals:</h2>
            <p className="blogsDescription2">
              Support for critical minerals production will ensure Australia’s
              self-reliance, reducing dependence on global supply chains
              dominated by China.
            </p>
            <br />
            <br />
            <h2 className="blogsTitle">Global Comparison:</h2>
            <p className="blogsDescription2">
              Consistent policy support, akin to Germany’s Energiewende, will
              boost market confidence and attract long-term investments.
              Australia's focus aligns with global trends, potentially making it
              a leader in hydrogen and critical minerals.
            </p>
            <br />
            <br />
            <h2 className="blogsTitle">
              Economic and Environmental Benefits:{" "}
            </h2>
            <p className="blogsDescription2">
              The budget’s initiatives could create over 20,000 jobs, boost
              local economies, enhance energy security, and spur technological
              innovation, reducing costs as seen in battery technology.
            </p>
          </div>
        </div>

        <hr />
        <TitleSm title={"Challenges in the Clean Energy Transition "} />

        <div className="blogsContainer">
          <div>
            <h2 className="blogsTitle">Hydrogen Economy Challenges:</h2>
            <p className="blogsDescription2">
              High production costs, infrastructure needs, and
              storage/transportation issues require significant investment and
              advanced technology solutions.
            </p>
            <br />
            <h2 className="blogsTitle">Critical Minerals Supply Chain:</h2>
            <p className="blogsDescription2">
              Australia must enhance mining and processing capabilities while
              ensuring sustainable practices to compete globally and mitigate
              environmental impacts.
            </p>
            <br />
            <h2 className="blogsTitle">Regulatory and Policy Hurdles:</h2>
            <p className="blogsDescription2">
              Streamlining approval processes and maintaining long-term policy
              stability are crucial to avoid delays and attract sustained
              investment.
            </p>
            <br />
            <h2 className="blogsTitle">Community and Workforce Engagement:</h2>
            <p className="blogsDescription2">
              Transparent communication for community acceptance and addressing
              skill shortages through training are essential for the renewable
              energy sector’s growth.
            </p>
          </div>
        </div>
        <hr />
        <TitleSm title={"Conclusion"} />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              The 2024 Federal Budget paves the way for a promising future in
              Australia’s clean energy sector by providing substantial funding
              allocations and tax incentives, fostering a favorable environment
              for private investment. Venture capitalists and private equity
              firms can leverage these incentives to fund innovative startups
              and projects. SIPBN’s global network could play a crucial role in
              facilitating cross-border investments and collaborations,
              attracting significant foreign capital and establishing strategic
              partnerships. By connecting international investors with
              Australian clean energy opportunities, SIPBN can drive significant
              advancements in the clean energy space. Increased funding for R&D
              and manufacturing support will enable SIPBN to foster
              technological innovation and support stages of commercialisation
              of new and emerging technologies. By providing platforms for̀
              startups to pitch ideas to investors, SIPBN can accelerate the
              development and deployment of innovative clean energy solutions.
            </p>
          </div>
        </div>

        <hr />
        <TitleSm title={"Get in Touch"} />

        <div className="blogsContainer">
          <div>
            <p className="blogsDescription2">
              At the SIPBN Clean Energy Committee, we aim to support the
              transition to clean energy by connecting innovative technologies
              with vital funding and support. If you are an investor in the
              clean energy sector or have clean technology seeking investment,
              please reach out to the SIPBN Clean Energy Committee at here.
              Reza.k@sipbn.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CleanEnergy;
