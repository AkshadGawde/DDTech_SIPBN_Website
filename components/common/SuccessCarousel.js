import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from "./Item";
import { SuccessCarouselData } from "@/assets/data/dummydata";

export function SuccessCarousel(props) {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Initially set autoplay to false
    autoplaySpeed: 0,
    pauseOnHover: true,
    arrows: true,
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
    <div>
      <Slider ref={sliderRef} {...settings}>
        {SuccessCarouselData.map((item, index) => (
          <div key={index}>
            <Item
              src={item.src}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
