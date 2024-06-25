import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="What is SIPBN" />
            <p>
              SIPBN Inc is a non-profit organization that offers a global
              platform for Australian businesses to access capital and business
              opportunities, thereby enhancing trade, innovation, and business
              growth in Australia.
            </p>

            <TitleSm title="About Us " />
            <p>
              The aim is to serve as a premium meeting place for the Sydney
              community, including business leaders, investors, regulators, and
              government representatives, focusing on international investment
              and trade. <br /> <br />
              Connecting people is essential for businesses to access funding
              opportunities, global networks, pitching events, and advocacy,
              while investors benefit from business connections and deal flow.
              <br />
              <br /> Our four pillars include active network connectivity,
              cross-border business match making and trade assistance,
              continuous high value deal flow, and targeted advocacy to media
              and government. <br />
              <br />
              We offer regular business presentations, pitching sessions,
              investment and trade delegations, networking events, and an annual
              CAPTECH conference for Australian businesses and potential
              investors. <br />
              <br /> Membership offers strategic introductions, 20% discount on
              #CapTech2023 and India business delegation, free event attendance,
              promotion of services, projects, and business, and access to
              high-quality deal flow. <br /> <br />
              Affiliate offices are located in Sydney, New South Wales, Sunshine
              Coast, Queensland, India, Hong Kong, and the Middle East.
            </p>

            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="How we achieve this" />
              <p className="desc-p">
                We achieve outcomes through our four enabling pillars:
                <li>ActiveNetwork Connectivity </li>
                <li>Cross Border Business Match Making and Trade Assistance</li>
                <li> Continuous High Value Deal flow</li>
                <li>Targeted Advocacy to Media and Government </li>
              </p>

              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-20 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <TitleSm title="What we provide" />
          <p className="desc-p">
            <li>
              Regular business presentations and pitching sessions with
              Australian businesses and connecting with potential local and
              overseas investors
            </li>
            <li>Dedicated business and project matching sessions</li>
            <li>Investment and Trade delegations to other countries</li>
            <li>Networking events </li>
            <li>An annual CAPTECH conference </li>
          </p>

          <TitleSm title="Membership Benefits" />
          <p className="desc-p">
            <li>3 Strategic Introductions</li>
            <li>
              20% member discount on #CapTech2023 & India business delegation
            </li>
            <li>Attend all our standard events at no cost</li>
            <li>Promotion of your services, projects and business </li>
            <li>Access to high quality deal flow & projects </li>
          </p>

          <TitleSm title="Affiliate Offices" />
          <p className="desc-p">
            <li>Sydney, New South Wales</li>
            <li>Sunshine Coast, Queensland</li>
            <li>India</li>
            <li>Hong Kong</li>
            <li>Middle East</li>
          </p>
          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                SIPBN will empower access for members to cross border investment
                and trade into and out of Australia through our central platform
                of events, services and connections.
              </p>
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our Vision" />
              <br />
              <p className="misson-p">
                To be the recognised as the premium meeting point for the Sydney
                community of business leaders, investors, regulators, and
                government representatives with a focus on international
                investment and trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
