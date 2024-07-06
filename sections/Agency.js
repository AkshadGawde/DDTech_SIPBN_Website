import { Title, TitleSm } from "@/components/common/Title";
import Marqueee from "@/components/common/Marqueee";

const Agency = () => {
  return (
    <>
      <div className="marquee-hero">
        <Marqueee className="marquee" />
      </div>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <Title title="What is SIPBN?" />
            <p className="advisoryDescription">
              SIPBN Inc is a non-profit organization that offers a global
              platform for Australian businesses to access capital and business
              opportunities, thereby enhancing trade, innovation, and business
              growth in Australia.
            </p>

            <Title title="About Us" />
            <p className="advisoryDescription">
              The aim is to serve as a premium meeting place for the Sydney
              community, including business leaders, investors, regulators, and
              government representatives, focusing on international investment
              and trade. <br />
              <br />
              Connecting people is essential for businesses to access funding
              opportunities, global networks, pitching events, and advocacy,
              while investors benefit from business connections and deal flow.{" "}
              <br />
              <br />
              Our four pillars include active network connectivity, cross-border
              business matchmaking and trade assistance, continuous high-value
              deal flow, and targeted advocacy to media and government. <br />
              <br />
              We offer regular business presentations, pitching sessions,
              investment and trade delegations, networking events, and an annual
              CAPTECH conference for Australian businesses and potential
              investors. <br />
              <br />
              Membership offers strategic introductions, 20% discount on
              #CapTech2023 and India business delegation, free event attendance,
              promotion of services, projects, and business, and access to
              high-quality deal flow. <br />
              <br />
              Affiliate offices are located in Sydney, New South Wales, Sunshine
              Coast, Queensland, India, Hong Kong, and the Middle East.
            </p>
          </div>
          <Title
            title="We achieve this through four enabling pillars!"
            className="title-bg"
          />

          <section className="aboutSection">
            <div className="aboutContainer">
              <div className="aboutItem">
                <h2 className="aboutTitle">Networking</h2>
                <p className="aboutDescription">
                  SIPBN membership grants you access via events and strategic
                  introductions to an exclusive network of peers in business
                  leaders, investors, mergers & acquisitions, private equity,
                  family offices, government agencies and peer reviewed service
                  providers.
                </p>
              </div>
              <div className="aboutItem">
                <h2 className="aboutTitle">
                  Cross Border Business Opportunities
                </h2>
                <p className="aboutDescription">
                  SIPBN links members with businesses and reliable service
                  providers to enable effective investment and trade outcomes.
                  E.g: How to enter a country, the required etiquette, language
                  services and market intelligence.
                </p>
              </div>
              <div className="aboutItem">
                <h2 className="aboutTitle">High Value Deal flow</h2>
                <p className="aboutDescription">
                  The SIPBN platform provides members with the opportunity to
                  exchange information on high value business, investment and
                  trade deals.
                </p>
              </div>
              <div className="aboutItem">
                <h2 className="aboutTitle">Targeted Advocacy</h2>
                <p className="aboutDescription">
                  SIPBN champions initiatives and lobby for policy approaches
                  that foster increased investment and trade opportunities for
                  the betterment of all Australians.
                </p>
              </div>
            </div>
          </section>

          <MissionVision
            title="Our mission"
            description="SIPBN will empower access for members to cross-border investment and trade into and out of Australia through our central platform of events, services and connections."
            imgSrc="https://res.cloudinary.com/dq23wxdum/image/upload/v1720255432/SIPBN/aofufxke8ghd3dg4wddv.png"
          />

          <MissionVision
            title="Our Vision"
            description="To be recognized as the premium meeting point for the Sydney community of business leaders, investors, regulators, and government representatives with a focus on international investment and trade."
            imgSrc="https://res.cloudinary.com/dq23wxdum/image/upload/v1720255439/SIPBN/fduphrml2sukkld0kfem.png"
          />
          <div className="button-holder">
            <button
              className="button button-primary"
              onClick={() => (window.location.href = "/advisory_board")}
            >
              Advisory Board{" "}
            </button>
            <button
              className="button button-primary"
              onClick={() => (window.location.href = "/executive_board")}
            >
              Executive Board
            </button>
            <button
              className="button button-primary"
              onClick={() => (window.location.href = "/committees")}
            >
              Committees
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const Section = ({ title, children }) => (
  <>
    <TitleSm title={title} />
    <div className="desc-section">{children}</div>
  </>
);

const MissionVision = ({ title, description, imgSrc }) => (
  <div className="content flex">
    <div className="w-40 py">
      <img
        src={imgSrc}
        alt="Image"
        className="round"
        width="100%"
        height="100%"
      />
    </div>
    <div className="missionText w-60 ml">
      <TitleSm title={title} />
      <br />
      <p className="mission-p">{description}</p>
    </div>
  </div>
);

export default Agency;
