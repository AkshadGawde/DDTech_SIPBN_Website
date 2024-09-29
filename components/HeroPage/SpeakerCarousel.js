import React from "react";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { memberdata } from "@/assets/data/dummydata";
import { Title } from "../common/Title";
import { CldImage } from "next-cloudinary";

const CarouselWithText = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 1, // Default number of slides to show on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440, // Screens less than 1440px
        settings: {
          slidesToShow: 1, // Show 3 slides for large tablets/laptops
        },
      },
      {
        breakpoint: 1024, // Screens less than 1024px
        settings: {
          slidesToShow: 1, // Show 2 slides for tablets
        },
      },
      {
        breakpoint: 768, // Screens less than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide for mobile devices
        },
      },
    ],
  };
  useEffect(() => {
    // Set a 5-second delay to start autoplay
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay(); // Start autoplay after 5 seconds
      }
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Title title="Meet Our Speakers" />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Slider {...settings}>
          {memberdata.map((slide, index) => (
            <div key={index} style={{ margin: "20px" }}>
              <a href={slide.href}>
                <CldImage
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
