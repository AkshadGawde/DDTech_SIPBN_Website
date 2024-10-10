import { Title, TitleSm } from "@/components/common/Title";
import { Card } from "@/components/common/Card";
import React from "react";
import Marquee from "@/components/common/Marqueee";

const Events = () => {
  return (
    <>
      <div className="marquee-hero">
        <Marquee className="marquee" />
      </div>
      <section>
        <div className="container">
          <br />
          <Title title="Upcoming Events" />
          <div className="event-container">
            <div className="eventCard">
              <a href="https://events.humanitix.com/clean-energy-monetising-the-opportunity">
                <img
                  className="eventImg"
                  src="/events/5th-Sept2024.jpg"
                  alt="Event 1 Image"
                />
              </a>
              <h2 className="event-title">5th September 2024</h2>
              <p className="event-description">
                Clean Energy - Monetising the Opportunity
              </p>
            </div>
            <div className="eventCard">
              <img
                className="eventImg"
                src="/events/Upcoming.png"
                alt="Event 3 Image"
              />
              <h2 className="event-title">October 2024</h2>
              <p className="event-description">
                Presentation & Pitching Session
              </p>
            </div>
            <div className="eventCard">
              <a href={`/ticket-purchase?eventId=iaEHed2PE5Te0BmBwku3`}>
                <img
                  className="eventImg"
                  src="/events/25th-Nov2024.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 className="event-title">25 Nov 2024 – 27 Nov 2024</h2>
              <p className="event-description">#CapTech2024</p>
            </div>
            <div className="eventCard">
              <img
                className="eventImg"
                src="/events/Upcoming.png"
                alt="Event 5 Image"
              />
              <h2 className="event-title">December 2024</h2>
              <p className="event-description">Christmas Party</p>
            </div>
          </div>

          <Title title="Past Events" />
          <div className="event-container">
            <div className="eventCard">
              <a href="https://events.humanitix.com/economic-update-opportunities-and-challenges">
                <img
                  className="eventImg"
                  src="/events/June2024.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 className="event-title">June 2024</h2>
              <p className="event-description">
                Economic Update - Opportunities and Challenges
              </p>
            </div>
            <div className="eventCard">
              <a>
                <img
                  className="eventImg"
                  src="/events/February2024.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 className="event-title">February 2024</h2>
              <p className="event-description">Pitching Session #CapTech2024</p>
            </div>
            <div className="eventCard">
              <a>
                <img
                  className="eventImg"
                  src="/images/GPS-2.png"
                  alt="Event 2 Image"
                />
              </a>
              <h2 className="event-title">September 2023</h2>
              <p className="event-description">
                Global Pitching Session – Preliminary Round #CapTech2023
              </p>
            </div>
            <div className="eventCard">
              <a>
                <img
                  className="eventImg"
                  src="/images/GPS-1.png"
                  alt="Event 3 Image"
                />
              </a>
              <h2 className="event-title">October 2023</h2>
              <p className="event-description">
                #CapTech2023 Welcome Drinks at NSW Parliament House
              </p>
            </div>
            <div className="eventCard">
              <a>
                <img
                  className="eventImg"
                  src="/events/Captech2023.png"
                  alt="Event 1 Image"
                />
              </a>
              <h2 className="event-title">October 2023</h2>
              <p className="event-description">#CapTech2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Uncomment and use the below section if needed */}
      {/* <section className="agency bg-top">
        <div className="container">
          <TitleSm title="" />
          <Title title="#CapTech2023 Festival" className="title-bg" />
        </div>

        <video autoPlay muted loop className="video-background">
          <source
            src="https://res.cloudinary.com/dq23wxdum/video/upload/v1719354927/SIPBN/k3xjefpp1980yv7ts1ek.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="heading-title">
            <TitleSm title="" />
          </div>
        </div>
      </section> */}

      {/* <section className="agency bg-top capMain">
        <div className="capContainer">
          <Title title="What is #CapTech2023" />

          <p>
            Sydney Investors, Professionals and Business Networking Group (SIPBN Inc) presents a monumental Global Summit at Sydney’s iconic International Convention Centre connecting movers and shakers from the business world.
            <br /> #CapTech2023 aims to place Australia at the centre of innovation and entrepreneurship by connecting and bringing together the brightest minds, industry leaders, ventures, technology, and capital from Australia and globally.
          </p>

          <Title title="Sectors" />
          <p>
            Education, Healthcare, Real Estate, Critical Minerals, Clean Energy, AI, Financial Services
          </p>
          <br />
          <Title title="Who Will Attend" />
          <p>
            Investors, finance houses, private equity, banks, start-ups, venture capital, media, Government bodies, professional bodies, incubation and accelerators, and tech firms.
          </p>

          <br />
          <Title title="Global Pitching Sessions" />
          <p>
            Witness a global pitching session with entrants from India, Hong Kong, and Australia all vying for an opportunity to secure funding from prominent global investors.
          </p>

          <Title title="Activities" />
          <p>
            Keynote session, Panel discussion, Industry sessions, Global pitching session, Post event drinks, Private Dinner (invitation only)
          </p>
        </div>
      </section>
      <br />
      <section className="gallery">
        <div className="container">
          <Title title="Gallery" />
          <br />
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353786/SIPBN/zoraxhbivj15xvoyfulc.jpg"
                alt="Gallery item 1"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353786/SIPBN/rg3ff2uib0llmxpvuci3.jpg"
                alt="Gallery item 2"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353786/SIPBN/ha3giwnbhynytzuzf8zy.jpg"
                alt="Gallery item 3"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353911/SIPBN/ekifkljdix5hpywaxhhq.jpg"
                alt="Gallery item 4"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354035/SIPBN/nyxcteuwntqrp7wti0o7.jpg"
                alt="Gallery item 5"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354135/SIPBN/n6x1h9ejtlwgdxskkd2s.jpg"
                alt="Gallery item 6"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354506/SIPBN/nkoahbw8c4nm5cvwftuk.jpg"
                alt="Gallery item 7"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354506/SIPBN/c9i5gwfgh2lqrlrskesk.jpg"
                alt="Gallery item 8"
              />
            </div>
            <div className="gallery-item">
              <img
                className="capImg"
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719422131/SIPBN/pd97xw3brpkruc076oer.jpg"
                alt="Gallery item 9"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Events;
