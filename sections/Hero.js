import React from "react";
import Marqueee from "@/components/common/Marqueee";
import HeroMain from "@/components/HeroPage/HeroMain";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { Brand } from "@/components/router";
import Image from "next/image";
import Link from "next/link";
import HeroParts from "@/components/HeroPage/HeroParts";
import HeroInfo from "@/components/HeroPage/HeroInfo";
import HeroCheckout from "@/components/HeroPage/HeroCheckout";
import HeroPurpose from "@/components/HeroPage/HeroPurpose";
import HeroFeatures from "@/components/HeroPage/HeroFeatures";
// import BrandCarousel from "@/components/HeroPage/BrandCarousel";
import BenefitsActivities from "@/components/HeroPage/BenefitsAcitivity";
import BusinessForum from "@/components/HeroPage/BusinessForum";
import CountdownTimer from "@/components/HeroPage/CountdownTimer";
import Testimonial from "@/components/Testimonial";

function Hero() {
  return (
    <>
      {/* <BrandCarousel /> */}

      <div className="marquee-hero">
        <Marqueee className="marquee" />
      </div>
      <section
        className="hero-sec"
        style={{
          background: "linear-gradient(rgba(12,3,51,0.3), rgba(12,3,51,0.3))",
        }}
      >
        <HeroMain />

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
                <h2>Raman Bhalla</h2>
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
                private capital, and government sectors.
                <br />
                <br />
                With our physical offices in Sydney and Queensland in Australia
                and international offices in India, Middle East, and Hong Kong,
                our members have access to a premium business platform to do
                business in Australia and globally.
                <br />
                <br />
                Our members benefit from our regular networking events and our
                yearly flagship summit to foster deal making, business
                connections, and innovation.
              </p>
            </div>
            <a
              href="https://forms.gle/GLbvrFiTyUjfmadF7"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Apply for Membership
            </a>
          </div>
          <HeroInfo />
          <div className="banner2">
            <div className="bannerTitle container">
              <h2>Secure your #CapTech2024 ticket!</h2>
              <br />
              <p>Early bird discount 20% till 30th September 2024</p>
              <br />
              <a
                href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
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
      {/* Uncomment to show event images */}
      <div className="container">
        <div className="heading-title">
          <Title title={"Upcoming Events"} />
        </div>
        <div className="eventContainer">
          <a href="https://events.humanitix.com/clean-energy-monetising-the-opportunity">
            <img
              className="eventImg"
              src="https://res.cloudinary.com/dueoon8xe/image/upload/v1724772513/ftqv2aapmtpvgzetjrtp.jpg"
            />
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
      <HeroPurpose />
      <HeroFeatures />
      <HeroParts />
      <HeroCheckout />
      <CountdownTimer />
      <BusinessForum />
      <BenefitsActivities />
      <Brand />
      <div className="iframe-container">
        <br />
        <Title title={"Our Podcast"} />
        <div className="podContent grid-3">
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/LMNVfOu_7a4"
            title="The Deal Flow: A distinguished leader with over 23 years of expertise in financial data, news, and analytics."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Hero;
