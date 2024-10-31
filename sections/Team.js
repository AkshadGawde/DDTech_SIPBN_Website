import {
  patronsdata,
  memberdata,
  moderatordata,
} from "../assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React, { useEffect } from "react";
import Link from "next/link";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AOS from "aos";
import "aos/dist/aos.css";
import { Brand } from "@/components/router";
import Typography from "@mui/material/Typography";

const Team = () => {
  const events = [
    {
      date: "25th November 2024",
      description: "Welcome Drinks at NSW Parliament House",
    },
    {
      date: "26th November 2024",
      description:
        "Global Summit at ICC Sydney Global Summit Post Event Drinks",
    },
    {
      date: "27th November 2024",
      description: "“Invitation Only” Private Dinner",
    },
    { date: "28th November 2024", description: "Business Matching" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <video className="bgVideo" autoPlay muted loop playsInline>
        <source src="/videos/CapTech2024.mp4" type="video/mp4" />
      </video>
      <section className="agency bg-top">
        <video autoPlay muted loop className="video-background">
          <source src={"/videos/CapTech2024.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="heading-title">
            <TitleSm title="" />
            <Title title="#CapTech2024 Summit" className="title-bg" />
          </div>
          <br />
          <Title title="Discover .Connect .Execute" />
          <br />

          <Timeline position="alternate" className="timeline">
            {events.map((event, index) => (
              <TimelineItem
                key={index}
                className="timeline-item"
                style={{ "--item-index": index }}
                data-aos="fade-up"
              >
                <TimelineOppositeContent
                  className="timeline-content"
                  align="right"
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="timeline-hover"
                  ></Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" />
                  <TimelineConnector
                    className={
                      index === events.length - 1 ? "" : "secondary-connector"
                    }
                  />
                </TimelineSeparator>
                <TimelineContent className="timeline-hover">
                  <Typography variant="h6" component="span">
                    {event.date}
                  </Typography>
                  <Typography>{event.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          <button
            className="button-primary"
            onClick={() => {
              window.location.href = `/ticket-purchase?eventId=iaEHed2PE5Te0BmBwku3`;
            }}
          >
            book now
          </button>

          <Title title="What is #CapTech2024" />
          <p>
            #CapTech2024 is your gateway to the forefront of innovation,
            offering an unparalleled opportunity to engage directly with the
            luminaries of future-focused industries. This premium summit
            uniquely convenes an elite ensemble of business leaders,
            policymakers, and investors, fostering a rare environment for
            high-level networking and collaborative ventures across eight key
            sectors. In its third year, #CapTech2024 will place Australia at the
            centre of future focussed industries by bringing together
            accomplished business leaders and subject matter experts to
            collaboratively pursue shared objectives and nurture unique business
            relationships in an exclusive setting.
          </p>
          <br />
          <Title title="#CapTech2024 – Key Features" />
          <ul>
            <p>
              A focus on growing and expanding businesses, deal-making and great
              customer experience Global exposure as evidenced by physical
              attendees from Australia, India, Middle East, China, Austria, Hong
              Kong, Europe, Indonesia, Hong Kong, Malta and many others.
            </p>
            <li>
              World-class global pitching sessions throughout the year provide
              the platform for talent, scale ups, capital and global exposure,
              culminating in the “best of the best” in November at CapTech.
            </li>
            <li>
              Focused business matching sessions are tailored to get you the
              results.
            </li>
            <li>
              Welcome drinks at NSW Parliament House and an exclusive private
              dinner event provide unique connections and networks.
            </li>
          </ul>
          <div className="banner2">
            <div
              target="_blank"
              rel="noopener noreferrer"
              className="bannerTitle container"
            >
              <h2>Secure your #CapTech2024 ticket!</h2>
              <br />
              {/* <p> Buy tickets at 20% Discount with code SIPBN20. </p> */}
              {/* <p> Offer valid until October 31, 2024.</p> */}
              <br />
              <a
                href={`/ticket-purchase?eventId=iaEHed2PE5Te0BmBwku3`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                {" "}
                Book Your Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="purposeFlex">
        <div className="box" style={{ textAlign: "center" }}>
          <h1 className="indigo">50+</h1>
          <h3>World Class Speakers</h3>
        </div>
        <div className="box" style={{ textAlign: "center" }}>
          <h1 className="indigo">300+</h1>
          <h3>Global investors and business leaders</h3>
        </div>
        <div className="box" style={{ textAlign: "center" }}>
          <h1 className="indigo">8</h1>
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
      <Title title="Case Studies" />
      <div className="containerl">
        <ul className="capList">
          <Title title="Strategic Introductions:" />
          <li>Numerous MOUs signed worth $200 million</li>
          <li>A number of MOUs under discussion</li>
          <li>
            All presenting companies gained significant funding/business
            opportunities
          </li>
          <br />
          <Title title="Audience:" />
          <li>CEO, Chairman & Decision-makers, Government Ministers</li>
          <li>Founders & Entrepreneurs</li>
          <li>High Net-worth Investors</li>
          <li>International Delegates</li>
          <li>
            Family Offices, Pension Funds, Private Equity, Venture Capital
            Firms, Banks
          </li>
          <li>1,000 in-person attendees over 2 years</li>
          <br />
          <Title title="Business Sector:" />
          <li>Healthcare</li>
          <li>Renewable Energy</li>
          <li>Real Estate & Affordable Housing Financial Services</li>
          <li>Mining & Exploration</li>
          <li>Critical Minerals</li>
          <li>Manufacturing</li>
          <li>Technology</li>
          <li>AI & Cyber Security</li>
          <li>Food and Agriculture</li>
          <li>Education</li>
          <br />
          <Title title="Global Reach:" />
          <li>
            Australia, India, Hong Kong, Middle East, Malta, East Asia, Dubai,
            Turkey, Singapore, USA, China, Europe
          </li>
          <br />
          <Title title="Exposure:" />
          <li>
            Australia, India, Hong Kong, Middle East, Malta, East Asia, Dubai,
            Turkey, Singapore, USA, China, Europe
          </li>
          <br />
          <Title title="Annual #CapTech2024 Summit" />
          <li>#CapTech2024 Year of Events</li>
          <li>State of the Economy and Opportunities</li>
          <li>Real Estate, Housing Crisis and The Role of AI</li>
          <li>The business of Renewable Energy and emerging opportunities</li>
          <li>Welcome drinks at NSW Parliament House</li>
          <li>Investor meetings</li>
          <li>
            “Invitation-only” private dinner fostering and nurturing unique
            business relationships
          </li>
          <li>Dedicated business matching sessions</li>
          <li>Christmas Networking Drinks</li>
          <br />
          <Title title="State of the Economy" />
          <li>
            What is happening in the capital markets and the opportunities and
            challenges ahead
          </li>
          <li>
            The disruption and the investment opportunities in the healthcare
            sector
          </li>
          <li>Emerging trends and opportunities in the education sector</li>
          <li>
            State of play in the Real Estate sector and Affordable Housing
          </li>
          <li>
            Business opportunities and challenges in the renewable energy space
          </li>
          <li>How AI is changing the whole business landscape?</li>
          <li>The Business of Sport and Entertainment</li>
          <li>Global Pitching Session</li>
          <li>Global summit at ICC Sydney, Australia</li>
          <li>Engaging panel discussions with high profile expert speakers</li>
          <li>Prominent Keynote speeches</li>
          <li>Interactive workshops</li>
          <li>Post event networking drinks</li>
        </ul>
      </div>

      <Brand />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "10vh",
        }}
      >
        <div className="button-holder" style={{ textAlign: "center" }}>
          <button
            className="button button-primary"
            onClick={() => (window.location.href = "/patrons")}
          >
            Patrons{" "}
          </button>
          <button
            className="button button-primary"
            onClick={() => (window.location.href = "/speakers")}
            style={{
              margin: "10px",
              padding: "15px 18px",
              fontSize: "18px",
              width: "100%",
              maxWidth: "250px",
            }}
          >
            Panelist and Speakers
          </button>
          <button
            className="button button-primary"
            onClick={() => (window.location.href = "/captech2023")}
          >
            #CapTech2023
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;
