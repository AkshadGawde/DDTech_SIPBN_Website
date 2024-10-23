import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Title } from "../common/Title";

const BrandCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    infinite: true, // Enable infinite scrolling
    speed: 1000, // Increase speed to simulate marquee effect
    slidesToShow: 7, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Autoplay to simulate continuous scrolling
    autoplaySpeed: 0, // Set speed to 0 for continuous scrolling
    cssEase: "linear", // Linear easing for smooth, constant movement
    pauseOnHover: false, // Disable pausing when hovering
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],

    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex); // Update current slide index
    },
    customPaging: (i) => (
      <div
        className="custom-dot"
        style={{
          opacity: i === currentSlide ? 1 : 0.5, // Change opacity based on whether it's the current slide
        }}
      ></div>
    ),
  };

  const brandimages = [
    {
      src: "../SVG/Logo1.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 3",
    },
    {
      src: "../SVG/Logo2.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 6",
    },
    {
      src: "../SVG/Logo3.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 2",
    },
    {
      src: "../SVG/Logo4.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 0",
    },
    {
      src: "../SVG/Logo5.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 5",
    },
    {
      src: "../SVG/Logo6.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 7",
    },
    {
      src: "../SVG/Logo7.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo9.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo10.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo11.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo12.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo13.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo14.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo15.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo16.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo17.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo18.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo19.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "../SVG/Logo20.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "/SVG/Logo21.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
    {
      src: "/SVG/Logo22.svg",
      width: 600,
      height: 900,
      alt: "carousel Image 8",
    },
  ];

  return (
    <div className="brand-carousel">
      {/* <h1>Our Partners</h1> */}
      <div className="carouselHolder" style={{ display: "block" }}>
        <Slider {...sliderSettings} className="slider">
          {brandimages.map((image, index) => (
            <div key={index} className="slide">
              <Image {...image} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="outerHrHolder">
        <div className="innerHr1"></div>
        <p>Our Partners</p>
        <div className="innerHr2"></div>
      </div>
      <div className="Sponsor-container">
        <div className="SponsorCard">
          <img
            className="SponsorImg"
            src="/SVG/Silver Sponsor.svg"
            alt="Event 1 Image"
          />
        </div>
        <div className="outerHrHolder">
          <div className="innerHr1"></div>
          <p>#CapTech2024 Sliver Partner </p>
          <div className="innerHr2"></div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
