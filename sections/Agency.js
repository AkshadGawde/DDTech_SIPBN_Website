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
                            SIPBN Inc is a non-profit organization that offers a global platform for Australian businesses to access capital and business opportunities, thereby enhancing trade, innovation, and business growth in Australia.
                        </p>

                        <TitleSm title="About Us" />
                        <p>
                            The aim is to serve as a premium meeting place for the Sydney community, including business leaders, investors, regulators, and government representatives, focusing on international investment and trade. <br /><br />
                            Connecting people is essential for businesses to access funding opportunities, global networks, pitching events, and advocacy, while investors benefit from business connections and deal flow. <br /><br />
                            Our four pillars include active network connectivity, cross-border business matchmaking and trade assistance, continuous high-value deal flow, and targeted advocacy to media and government. <br /><br />
                            We offer regular business presentations, pitching sessions, investment and trade delegations, networking events, and an annual CAPTECH conference for Australian businesses and potential investors. <br /><br />
                            Membership offers strategic introductions, 20% discount on #CapTech2023 and India business delegation, free event attendance, promotion of services, projects, and business, and access to high-quality deal flow. <br /><br />
                            Affiliate offices are located in Sydney, New South Wales, Sunshine Coast, Queensland, India, Hong Kong, and the Middle East.
                        </p>

                        <Title title="The only digital agency you will ever need!" className="title-bg" />
                        <div className="aboutContainer">
                            <div className="aboutItem">
                                <h1 className="aboutTitle">How we achieve this</h1>
                                <p className="aboutDescription">We achieve outcome through our four enabling pillars:</p>
                                <u className="aboutList">
                                    <li>Active Network Connectivity</li>
                                    <li>Active Network Connectivity</li>
                                    <li>Active Network Connectivity</li>
                                    <li>Active Network Connectivity</li>
                                </u>
                            </div>
                            <div className="aboutItem">
                                <img className="aboutImg" src="/images/s1.jpg"/>
                            </div>
                        </div>
                    </div>

                    <Section title="What we provide">
                        <ul className="desc-list">
                            <li>Regular business presentations and pitching sessions with Australian businesses and connecting with potential local and overseas investors</li>
                            <li>Dedicated business and project matching sessions</li>
                            <li>Investment and Trade delegations to other countries</li>
                            <li>Networking events</li>
                            <li>An annual CAPTECH conference</li>
                        </ul>
                    </Section>

                    <Section title="Membership Benefits">
                        <ul className="desc-list">
                            <li>3 Strategic Introductions</li>
                            <li>20% member discount on #CapTech2023 & India business delegation</li>
                            <li>Attend all our standard events at no cost</li>
                            <li>Promotion of your services, projects and business</li>
                            <li>Access to high quality deal flow & projects</li>
                        </ul>
                    </Section>

                    <Section title="Affiliate Offices">
                        <ul className="desc-list">
                            <li>Sydney, New South Wales</li>
                            <li>Sunshine Coast, Queensland</li>
                            <li>India</li>
                            <li>Hong Kong</li>
                            <li>Middle East</li>
                        </ul>
                    </Section>

                    <MissionVision 
                        title="Our mission" 
                        description="SIPBN will empower access for members to cross-border investment and trade into and out of Australia through our central platform of events, services and connections." 
                        imgSrc="/images/s4.jpg"
                    />

                    <MissionVision 
                        title="Our Vision" 
                        description="To be recognized as the premium meeting point for the Sydney community of business leaders, investors, regulators, and government representatives with a focus on international investment and trade." 
                        imgSrc="/images/s4.jpg"
                    />
                </div>
            </section>

            {/* Spacing, might be unnecessary if handled by CSS */}
            <div style={{ height: '200px' }} />
        </>
    );
};

const Section = ({ title, children }) => (
    <>
        <TitleSm title={title} />
        <div className="desc-section">
            {children}
        </div>
    </>
);

const MissionVision = ({ title, description, imgSrc }) => (
    <div className="content flex">
        <div className="left w-40 py">
            <img src={imgSrc} alt="Image" className="round" width="100%" height="100%" />
        </div>
        <div className="right w-60 ml">
            <TitleSm title={title} />
            <br />
            <p className="mission-p">{description}</p>
        </div>
    </div>
);

export default Agency;
