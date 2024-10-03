import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marqueee from "@/components/common/Marqueee";
import HeroMain from "@/components/HeroPage/HeroMain";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import { Title } from "@/components/common/Title";
import { Brand } from "@/components/router";
import HeroInfo from "@/components/HeroPage/HeroInfo";
import HeroPurpose from "@/components/HeroPage/HeroPurpose";
// import HeroFeatures from "@/components/HeroPage/HeroFeatures";
import HeroParts from "@/components/HeroPage/HeroParts";
import HeroCheckout from "@/components/HeroPage/HeroCheckout";
import CountdownTimer from "@/components/HeroPage/CountdownTimer";
import BusinessForum from "@/components/HeroPage/BusinessForum";
import BenefitsActivities from "@/components/HeroPage/BenefitsAcitivity";
import Link from "next/link";
import BrandCarousel from "@/components/HeroPage/BrandCarousel";
import TicketPage from "@/components/HeroPage/TicketPage";
import HeroAgenda from "@/components/HeroPage/HeroAgenda";
import SpeakerCarousel from "@/components/HeroPage/SpeakerCarousel";

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });
  }, []);

  // style={{background: "linear-gradient(135deg, #000000, #003366"}}
  return (
    <>
      <div className="marquee-hero">
        <Marqueee className="marquee" />
      </div>
      <HeroMain />

      <div style={{ background: "linear-gradient(270deg, #0a0f45, #000000)" }}>
        <div className="brandCarouselHolder">
          <BrandCarousel />
        </div>

        <div data-aos="fade-right">
          <SpeakerCarousel />
        </div>

        <section className="hero-sec">
          <div></div>

          <div className="container">
            {/* <div className="heading-title" data-aos="fade-left">
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
                We are sector agnostic...
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
          </div> */}

            <div data-aos="fade-left">
              <HeroInfo />
            </div>

            {/* <div className="banner2" data-aos="fade-left">
            <div className="bannerTitle container">
              <h2>Secure your #CapTech2024 ticket!</h2>
              <p>Early bird discount 20% till 31st October 2024</p>
              <a
                href={`/ticket-purchase?eventId=iaEHed2PE5Te0BmBwku3`}  
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                Book Your Tickets
              </a>
            </div>
          </div> */}
          </div>

          {/* <div className="grid-3">
          <div className="box" data-aos="fade-up">
            <h1 className="indigo">50+</h1>
            <h3>World Class Speakers</h3>
          </div>
          <div className="box" data-aos="fade-up">
            <h1 className="indigo">250+</h1>
            <h3>Deal Making Opportunities</h3>
          </div>
          <div className="box" data-aos="fade-up">
            <h1 className="indigo">300+</h1>
            <h3>Global Investors and Business Leaders</h3>
          </div>
        </div> */}
        </section>

        <div data-aos="fade-right">
          <Banner />
        </div>

        {/* <section className="bannerr"> */}
        {/* <div className="container">
          <div>
            <br />
            <h2 id="partner">Partner Country: India</h2>
          </div> */}
        {/* </div> */}
        {/* <div data-aos="fade-left">
          <Link href="/contact" passHref>
            <img
              src="https://res.cloudinary.com/dueoon8xe/image/upload/v1722364945/lk35ez8ip3wgrsgzq2kf.png"
              className="eventImg2"
              alt="Event"
            />
          </Link>
        </div>
      </section> */}

        <div data-aos="fade-right">
          <HeroPurpose />
        </div>
        {/* 
      <div data-aos="fade-left">
        <HeroFeatures />
      </div> */}

        <div data-aos="fade-right">
          <HeroParts />
        </div>

        {/* <div data-aos="fade-left">
        <HeroCheckout />
      </div> */}

        <div data-aos="fade-right">
          <CountdownTimer />
        </div>

        <div data-aos="fade-left">
          <BusinessForum />
        </div>

        <div data-aos="fade-right">
          <TicketPage />
        </div>

        <div data-aos="fade-left">
          <HeroAgenda />
          <Banner />
        </div>

        <div data-aos="fade-right">
          <BenefitsActivities />
        </div>

        {/* <div data-aos="fade-left">
          <Expertise />
        </div> */}

        {/* <div data-aos="fade-right">
        <Brand />
      </div> */}

        {/* <div className="iframe-container">
        <br />
        <Title title={"Our Podcast"} />
        <div className="podContent grid-3" data-aos="fade-right">
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/LMNVfOu_7a4"
            title="The Deal Flow..."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default Hero;
