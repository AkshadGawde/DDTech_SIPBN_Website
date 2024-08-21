import React from "react";
import { Title, TitleSm } from "@/components/common/Title";
import { speakers2022 } from "../assets/data/dummydata";

function Captech2022() {
  return (
    <div className="container">
      <div>
        <section className="agency bg-top">
          <div className="container">
            <TitleSm title="" />
            <TitleSm title="#CapTech2022 Summit" className="title-bg" />
          </div>

          {/* <video autoPlay muted loop className="video-background">
            <source
              src={
                "https://res.cloudinary.com/dueoon8xe/video/upload/v1723784744/Speakers%20-%20Sipbn/ulqt8fmuqteutnjrpwfz.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <div className="container">
            <div className="heading-title">
              <TitleSm title="" />
            </div>
          </div>
        </section>

        <section className="agency bg-top capMain">
          <div className="capContainer">
            <Title title="What is #CapTech2022" />

            <div className="capText">
              <p>
                Sydney Investors, Professionals and Business Networking Group
                (SIPBN Inc) presents a monumental Global Summit at Sydney’s
                iconic International Convention Centre connecting movers and
                shakers from the business world.
                <br /> #CapTech2022 aims to place Australia at the centre of
                innovation and entrepreneurship by connecting and bringing
                together the brightest minds, industry leaders, ventures,
                technology and capital from Australia and globally.
              </p>

              <Title title="Sectors" />
              <p>
                Education, Healthcare, Medtech, Web3/ Blockchain, Agriculture,
                Artificial Intelligence, Clean Energy, Financial Services
              </p>
              <br />
              <Title title="Audience" />
              <p>
                <li>
                  We welcomed over 500 people through the doors of our inaugural
                  #CapTech2022 events, and had over 10,000 watch the live stream
                  in Australia, India & H.K & the Middle East.
                </li>
                <li>
                  Highly influential business delegation attended from India lef
                  by Punjab Angles Network
                </li>
                <li>
                  Countries represented: Australia, India, Hong Kong, Malta,
                  Indonesia, Dubai, Turkey, Singapore, US, China
                </li>
              </p>

              <br />
              <Title title="Global Pitching Sessions" />
              <p>
                We flew in finalists form the preliminary rounds in Hong Kong
                and India to pitch at the summit in front of a powerhouse
                judging panel
                <li>
                  Five MOU's were signed and four are in active discussion
                  valuing AUD150 million
                </li>
                <li>
                  Two pitching companies are in discussion for funding and
                  business promotions / collaborations
                </li>
              </p>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Speakers 2022" />
          </div>

          <div className="grid-4 py">
            {speakers2022
              .slice()
              .sort((a, b) => a.id - b.id)
              .map((speaker) => (
                <div key={speaker.id} className="card">
                  <div className="card-img">
                    <img
                      src={speaker.image || "/images/default-speaker.jpg"}
                      alt={speaker.name}
                    />
                  </div>
                  <div className="card-details">
                    <h3 className="title-link">{speaker.name}</h3>
                    <p className="">{speaker.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <br />
        <section className="gallery">
          <div className="container">
            <Title title="Gallery" />
            <br />
            <div className="gallery-grid">
              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c1.jpg"
                  alt="Gallery item 1"
                />
              </div>
              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c2.jpg"
                  alt="Gallery item 2"
                />
              </div>
              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c3.jpg"
                  alt="Gallery item 3"
                />
              </div>

              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c4.jpg"
                  alt="Gallery item 4"
                />
              </div>
              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c5.jpg"
                  alt="Gallery item 5"
                />
              </div>

              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c6.jpg"
                  alt="Gallery item 6"
                />
              </div>
              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c7.jpg"
                  alt="Gallery item 7"
                />
              </div>
              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c8.jpg"
                  alt="Gallery item 8"
                />
              </div>
              <div className="gallery-item">
                <img
                  className="capImg"
                  src="/images/c9.jpg"
                  alt="Gallery item 9"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Captech2022;
