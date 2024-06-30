import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import { React, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    // Ensure ScrollTrigger is enabled
    gsap.registerPlugin(ScrollTrigger);

    // Define animations and triggers here
    gsap.utils.toArray(".animate").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true, // smooth animation
        },
      });
    });

    // Parallax effect example
    gsap.utils.toArray(".parallax").forEach((element) => {
      gsap.to(element, {
        yPercent: -20,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });
    });

    // Fade in example
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="#CapTech2024" caption="" className="logobg " />
          <h1 className="hero-title">DISCOVER . CONNECT . EXECUTE</h1>
          <TitleSm title="Venue: ICC Sydney 14 Darling Drive Sydney, NSW 2000 Australia" />
          <p>Tue, 26 Nov 2024 9:00 AM - Wed, 27 Nov 2024 9:00 PM AEDT</p>
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
                <h2> - Raman Bhalla</h2>
              </div>
              <p>
                Sydney Investors, Professionals and Business Networking Group
                Incorporated (SIPBN) aims to facilitate business and opportunity
                exchange between individuals and organizations in various
                countries. SIPBN provides access to networks, data, and tools
                for growth in new markets. With a wide range of connections in
                trade, business, and government sectors, SIPBN facilitates
                engagement and departure from Australia through trade missions,
                visits, information sessions, and receptions.
              </p>
            </div>
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
              src="https://res.cloudinary.com/duv9rw1wg/image/upload/v1719326603/homePage/tvndvw12ujvsbg0dmvaq.png"
            />
          </a>
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
