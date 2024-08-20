import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { Brand } from "@/components/router";
import { React } from "react";
import Marqueee from "@/components/common/Marqueee";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="marquee-hero">
        <Marqueee className="marquee" />
      </div>
      <section className="hero">
        <div className="container">
          <a
            href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TitleLogo title="#CapTech2024" caption="" className="logobg" />
          </a>
          <h1 className="hero-title">DISCOVER . CONNECT . EXECUTE</h1>
          <TitleSm title="Venue: ICC Sydney 14 Darling Drive Sydney, NSW 2000 Australia" />
          <p>Tuesday, 26 Nov 2024 - 8:00am to 7:30pm </p>
          <a
            href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            {" "}
            Book Your Tickets
          </a>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Message from our President" />
            <div className="presContainer">
              <div className="presImgContainer">
                <img
                  src="https://res.cloudinary.com/dueoon8xe/image/upload/v1721977790/Speakers%20-%20Sipbn/brqtqgoijfjvulkac0g7.png"
                  height="110px"
                  className="presImg"
                />
                <h2> Raman Bhalla</h2>
              </div>
              <p style={{ fontSize: "medium", textAlign: "left" }}>
                The purpose of Sydney Investors, Professionals and Business
                Networking Group Incorporated ("SIPBN") is to connect projects
                with sources of capital and provide a global business platform
                for growing Australian businesses.
                <br />
                <br />
                We are sector agnostic. We facilitate the engagement to and from
                Australia through our extensive contacts in the business,
                private capital and government sectors.
                <br />
                <br />
                With our physical offices in Sydney and Queensland in Australia
                and international offices in India, Middle East and Hong Kong,
                our members have the access to a premium business platform to do
                business in Australia and globally.
                <br />
                <br />
                Our members get the benefit from our regular networking events
                and our yearly flagship summit to foster deal making, business
                connections and innovation.
              </p>
            </div>
            <a
              href="https://forms.gle/GLbvrFiTyUjfmadF7"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {" "}
              Apply for Membership
            </a>
          </div>
          <div className="banner2">
            <div
              target="_blank"
              rel="noopener noreferrer"
              className="bannerTitle container"
            >
              <h2>Secure your #CapTech2024 ticket!</h2>
              <br />
              <p> Early bird discount 20% till 31st August 2024</p>
              <br />
              <a
                href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307"
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
        <div className="grid-3">
          <div className="box">
            <h1 className="indigo">50+</h1>
            <h3>World Class Speakers</h3>
          </div>
          <div className="box">
            <h1 className="indigo">250+</h1>
            <h3>Deal Making Opportunities</h3>
          </div>
          <div className="box">
            <h1 className="indigo">300+</h1>
            <h3>Global Investors and Business Leaders</h3>
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      {/* <Testimonial /> */}
      <div className="container">
        <div className="heading-title">
          <Title title={"Upcoming Events"} />
        </div>
        <div className="eventContainer">
          <a href="https://events.humanitix.com/clean-energy-monetising-the-opportunity">
            <img className="eventImg" src="/images/cleanenergy1.jpg" />
          </a>
        </div>
        <div className="eventContainer">
          <a href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307">
            <img
              className="eventImg"
              src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719326603/homePage/qo7dq9u1cfptxijtlsly.png"
            />
          </a>
        </div>
      </div>

      <section className="bannerr">
        <div className="container">
          <div>
            <br />
            <h2 id="partner">Partner Country: India</h2>
          </div>
        </div>
        <Link href="/contact" passHref>
          <img
            src="https://res.cloudinary.com/dueoon8xe/image/upload/v1722364945/lk35ez8ip3wgrsgzq2kf.png"
            className="eventImg2"
            alt="Event"
          />
        </Link>
      </section>

      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      {/* <BlogCard /> */}
    </>
  );
};

export default Hero;
