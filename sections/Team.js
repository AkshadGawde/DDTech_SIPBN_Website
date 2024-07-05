import {
  patronsdata,
  memberdata,
  moderatordata,
} from "../assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import Link from "next/link";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Typography from '@mui/material/Typography';

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
            <Title title="#CapTech2024 Summit" className="title-bg" />
          </div>
          <br />
          <Title title="Discover .Connect .Execute" />
          <br />

          <Timeline position="alternate" className="timeline">
      <TimelineItem>
        <TimelineOppositeContent className="timeline-content" align="right">
          <Typography variant="body2" color="text.secondary"></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content">
          <Typography variant="h6" component="span">
            25th November 2024
          </Typography>
          <Typography>Welcome Drinks at NSW Parliament House</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-content">
          <Typography variant="body2" color="text.secondary"></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content">
          <Typography variant="h6" component="span">
            26th November 2024
          </Typography>
          <Typography >Global Summit at ICC Sydney Global Summit Post Event Drinks</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-content">
          <Typography variant="body2" color="text.secondary"></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" />
          <TimelineConnector className="secondary-connector" />
        </TimelineSeparator>
        <TimelineContent className="timeline-content">
          <Typography variant="h6" component="span">
            27th November 2024
          </Typography>
          <Typography>“Invitation Only” Private Dinner</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-content">
          <Typography variant="body2" color="text.secondary"></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector className="secondary-connector" />
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content">
          <Typography variant="h6" component="span">
            28th November 2024
          </Typography>
          <Typography>Business Matching</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>




         
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
        <div className="button-holder">
          <button
            className="button button-primary"
            onClick={() => (window.location.href = "/patrons")}
          >
            Patrons{" "}
          </button>
          <button
            className="button button-primary"
            onClick={() => (window.location.href = "/speakers")}
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
