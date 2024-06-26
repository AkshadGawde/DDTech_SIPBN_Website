import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="S I P B N" caption="" className="logobg" />
          <h1 className="hero-title">DISCOVER CONNECT EXECUTE</h1>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <img
              src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719264632/homePage/umjk3phquvd4jwbknig2.png"
              height="110px"
              className="presImg"
            />
            <Title title="Message from our President" />
            <p>
              Sydney Investors, Professionals and Business Networking Group
              Incorporated (SIPBN) aims to facilitate business and opportunity
              exchange between individuals and organizations in various
              countries. SIPBN provides access to networks, data, and tools for
              growth in new markets. With a wide range of connections in trade,
              business, and government sectors, SIPBN facilitates engagement and
              departure from Australia through trade missions, visits,
              information sessions, and receptions.
            </p>
            <h2>- Ramman Bhalla</h2>
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
          <a href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307">
            <img
              className="eventImg"
              src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719326603/homePage/tvndvw12ujvsbg0dmvaq.png"
            />
          </a>
          <a href="https://www.eventbrite.com.au/e/captech2024-discover-connect-execute-venue-icc-sydney-tickets-772015889307">
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
