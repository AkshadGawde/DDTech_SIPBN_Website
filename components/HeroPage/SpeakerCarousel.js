import React from "react";
import Slider from "react-slick";
import { memberdata } from "@/assets/data/dummydata";
import { Title } from "../common/Title";
import { CldImage } from "next-cloudinary";

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


  return (
    <>
      <Title title="Meet Our Speakers"/>
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {memberdata.map((slide, index) => (
          <div key={index}>
            <CldImage 
              src={slide.cover} 
              width={500}
              height={500}
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
