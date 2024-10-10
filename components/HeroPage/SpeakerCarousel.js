import React from "react";
import Slider from "react-slick";
import { memberdata } from "@/assets/data/dummydata";
import { Title } from "../common/Title";

const CarouselWithText = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    // cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Title title="Meet Our Speakers" />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Slider {...settings}>
          {memberdata.map((slide, index) => (
            <div key={index} style={{ margin: "20px" }}>
              <a href={slide.href}>
                <img
                  src={slide.cover}
                  width={500}
                  height={500}
                  alt={`slide-${index}`}
                  className="carousel-image"
                />
              </a>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <a
                  href={slide.href}
                  style={{ fontSize: "18px" }}
                  className="sliderSpeaker"
                >
                  {slide.title}
                </a>
                <p style={{ fontSize: "16px", marginTop: "10px" }}>
                  {slide.post}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselWithText;
