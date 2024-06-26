import {
  patronsdata,
  memberdata,
  moderatordata,
} from "../assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Team = () => {
  return (
    <>
      <section className="agency bg-top">
        <video autoPlay muted loop className="video-background">
          <source
            src={
              "https://res.cloudinary.com/dq23wxdum/video/upload/v1719355178/SIPBN/ojkenqfaxbfhewi3djn8.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="heading-title">
            <TitleSm title="" />
            <Title title="#CapTech2024 Festival" className="title-bg" />
          </div>
          <br />
          <Title title="Discover .Connect .Execute"/>
          <br />
          <ul>
            <li>25th November 2024 – Welcome Drinks at NSW Parliament House</li>
            <li>26th November 2024 – Global Summit at ICC Sydney</li>
            <li>26th November 2024 – Global Summit Post Event Drinks</li>
            <li>27th November 2024 – “Invitation Only” Private Dinner</li>
            <li>28th November 2024 – Business Matching</li>
          </ul>
          <br />
          <Title title="What is #CapTech2024" />
          <p>
            #CapTech2024 is your gateway to the forefront of innovation,
            offering an unparalleled opportunity to engage directly with the
            luminaries of future-focused industries. This premium summit
            uniquely convenes an elite ensemble of business leaders,
            policymakers, and investors, fostering a rare environment for
            high-level networking and collaborative ventures across eight key
            sectors. In its third year, #CapTech2024 will place Australia at
            the centre of future focussed industries by bringing together
            accomplished business leaders and subject matter experts to
            collaboratively pursue shared objectives and nurture unique business
            relationships in an exclusive setting.
          </p>
          <br />
          <Title title="#CapTech2024 – Key Features" />
          <ul>
            <li>
              A focus on growing and expanding businesses, deal-making and great
              customer experience
            </li>
            <li>
              Global exposure as evidenced by physical attendees from Australia,
              India, Middle East, China, Austria, Hong Kong, Europe, Indonesia,
              Hong Kong, Malta and many others
            </li>
            <li>
              World-class global pitching sessions throughout the year provide
              the platform for talent, scale ups, capital and global exposure,
              culminating in the “best of the best” in November at CapTech
            </li>
            <li>
              Focused business matching sessions are tailored to get you the
              results
            </li>
            <li>
              Welcome drinks at NSW Parliament House and an exclusive private
              dinner event provide unique connections and networks
            </li>
          </ul>
        </div>
      </section>

      <div className="grid-3">
        <div className="box">
          <h1 className="indigo">50+</h1>
          <h3>World Class Speakers</h3>
        </div>
        <div className="box">
          <h1 className="indigo">300+</h1>
          <h3>Attendees</h3>
        </div>
        <div className="box">
          <h1 className="indigo">8+</h1>
          <h3>Panels</h3>
        </div>
      </div>
      <div className="container">
        <Title title="Why you should be a part of #CapTech in 2024" />
        <br />
        <ul>
          <li className="capList">
            Discover: Explore Australia’s future-focused industries, featuring
            visionary speakers, thought leaders, and innovative resolutions that
            shape the landscape of tomorrow. Dive into the unfolding changes,
            emerging trends, and exceptional opportunities that define the
            future. #CapTech2024 cultivates a collaborative ecosystem shaping
            the trajectory of future focused industries, paving the way for a
            transformative and forward-thinking future.
          </li>
          <br />
          <li className="capList">
            Connect: Forge meaningful connections by engaging in deals and
            investments that propel Australia’s future-focused industries
            forward. Connect with high-level individuals, including investors,
            industry leaders, and tech innovators. Join forces with the #CapTech
            platform where collaboration sparks new ideas, fosters innovation,
            and propels businesses to new markets and profitability.
          </li>
          <br />
          <li className="capList">
            Execute: Develop tangible outcomes by bringing in private capital,
            funds, and talent. Execute strategies, forge partnerships, attract
            investments, and assemble a team of talented individuals to bring
            your vision to life.
          </li>
          <br />
        </ul>
      </div>

      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="MEET OUR PATRONS" /> <br />
            <Title
              title="A team of smart & passionate individuals"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {patronsdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div className="heading-title">
            <TitleSm title="World Class Speakers" /> <br />
            <Title
              title="A team of smart & passionate speakers"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {memberdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>

          <div className="heading-title">
            <TitleSm title="Our Exemplary Moderators" /> <br />
            <Title
              title="A team of smart & passionate moderators"
              className="title-bg"
            />
          </div>
          <div className="grid-4 py">
            {moderatordata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
