import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { Brand } from "@/components/router";
import { React } from "react";
import Marqueee from "@/components/common/Marqueee";

const Hero = () => {
  return (
    <>
      <div className="marquee-hero">
        <Marqueee className="marquee" />
      </div>
      <section className="hero">
        <div className="container">
          <TitleLogo title="#CapTech2024" caption="" className="logobg" />
          <h1 className="hero-title">DISCOVER . CONNECT . EXECUTE</h1>
          <TitleSm title="Venue: ICC Sydney 14 Darling Drive Sydney, NSW 2000 Australia" />
          <p>Tue, 26 Nov 2024 9:00 AM - Wed, 27 Nov 2024 9:00 PM AEDT</p>
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
                  src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719264632/homePage/umjk3phquvd4jwbknig2.png"
                  height="110px"
                  className="presImg"
                />
                <h2> Raman Bhalla</h2>
              </div>
              <p>
                The purpose of Sydney Investors, Professionals and Business
                Networking Group Incorporated ("SIPBN") is to connect projects
                with the sources of capital and provide a global business
                platform fot growing Australian businesses. We are selectors
                agnostic. We facilitate the engagement to and Australia through
                our extensive contacts in the business, private capital and
                government selectors. With our physical offices in Sydney and
                Queensland in Australia and international offices in India,
                Middle East, Europe and Hong Kong, our members have the access
                to a premium business platform to do their business in Australia
                and globally.
                <br />
                <br />
                Our members get the benefit from our regular networking events
                and or yearly flagship summit to foster deal making, business
                connection and innovation.
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
          <a href="https://www.eventbrite.com.au/e/#CapTech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307">
            <img
              className="eventImg"
              src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719326603/homePage/qo7dq9u1cfptxijtlsly.png"
            />
          </a>
        </div>
      </div>
      <Brand />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      {/* <BlogCard /> */}
    </>
  );
};

export default Hero;
