import React from "react";
import Slider from "react-slick";
import { memberdata } from "@/assets/data/dummydata";
import { Title } from "../common/Title";

const CarouselWithText = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const slidesData = [
    {
      img: "https://via.placeholder.com/800x400?text=Image+1",
      caption: "Caption for Image 1",
    },
    {
      img: "https://via.placeholder.com/800x400?text=Image+2",
      caption: "Caption for Image 2",
    },
    {
      img: "https://via.placeholder.com/800x400?text=Image+3",
      caption: "Caption for Image 3",
    },
  ];

  return (
    <>
      <Title title="Meet Our Speakers"/>
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {memberdata.map((slide, index) => (
          <div key={index}>
            <img 
              src={slide.cover} 
              alt={`slide-${index}`} 
              className="carousel-image"  // Add class for custom styling
            />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <a href={slide.href} style={{fontSize:"24px"}} className="sliderSpeaker">{slide.title}</a>
              <p style={{fontSize:"16px" , marginTop:"10px"}}>{slide.post}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default CarouselWithText;
