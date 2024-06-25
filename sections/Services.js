import { expertise } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="agency bg-top">
        <video autoPlay muted loop className="video-background">
          <source
            src={
              "https://res.cloudinary.com/dq23wxdum/video/upload/v1719354927/SIPBN/k3xjefpp1980yv7ts1ek.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="heading-title">
            <TitleSm title="" />
            <Title title="CapTech2023 Festival" className="title-bg" />
          </div>
        </div>
      </section>

      <section className="agency bg-top">
        <div className="container">
          <h2>What is #CapTech2023</h2>
          <p>
            Sydney Investors, Professionals and Business Networking Group (SIPBN
            Inc) presents a monumental Global Summit at Sydney’s iconic
            International Convention Centre connecting movers and shakers from
            the business world.
            <br /> #CapTech2023 aims to place Australia at the centre of
            innovation and entrepreneurship by connecting and bringing together
            the brightest minds, industry leaders, ventures, technology and
            capital from Australia and globally.
          </p>

          <h2>Sectors</h2>
          <ul>
            <li className="capList"> Education</li>
            <li className="capList"> Healthcare</li>
            <li className="capList"> Real Estate</li>
            <li className="capList"> Critical Minerals</li>
            <li className="capList"> Clean Energy</li>
            <li className="capList"> AI</li>
            <li className="capList"> Financial Services</li>
          </ul>
          <br />
          <h2>Who Will Attend</h2>
          <p>
            Investors, finance houses, private equity, banks, start ups, venture
            capital, media, Government bodies, professional bodies, incubation
            and accelerators and tech firms.
          </p>

          <h2>Activities</h2>
          <ul>
            <li>– Key note session</li>
            <li>– Panel discussion</li>
            <li>– Industry sessions</li>
            <li>– Global pitching session</li>
            <li>– Post event drinks</li>
            <li>– Private Dinner (invitation only)</li>
          </ul>
          <br />
          <h2>Global Pitching Session</h2>
          <p>
            Witness a global pitching session with entrants from India, Hong
            Kong, and Australia all vying for an opportunity to secure funding
            from prominent global investors.
          </p>

          <h2>Activities</h2>
          <ul>
            <li>– Key note session</li>
            <li>– Panel discussion</li>
            <li>– Industry sessions</li>
            <li>– Global pitching session</li>
            <li>– Post event drinks</li>
            <li>– Private Dinner (invitation only)</li>
          </ul>
        </div>
      </section>
      <br />
      <section className="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353786/SIPBN/zoraxhbivj15xvoyfulc.jpg"
                alt="Gallery item 1"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353786/SIPBN/rg3ff2uib0llmxpvuci3.jpg"
                alt="Gallery item 2"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353786/SIPBN/ha3giwnbhynytzuzf8zy.jpg"
                alt="Gallery item 3"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719353911/SIPBN/ekifkljdix5hpywaxhhq.jpg"
                alt="Gallery item 1"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354035/SIPBN/nyxcteuwntqrp7wti0o7.jpg"
                alt="Gallery item 2"
              />
            </div>

            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354135/SIPBN/n6x1h9ejtlwgdxskkd2s.jpg"
                alt="Gallery item 3"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354506/SIPBN/nkoahbw8c4nm5cvwftuk.jpg"
                alt="Gallery item 3"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719354506/SIPBN/c9i5gwfgh2lqrlrskesk.jpg"
                alt="Gallery item 3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
