import React from 'react';

// Dummy images for demonstration
const images = [
  { src: "/images/c1.jpg", alt: "Sponsor 1" },
  { src: "/images/c2.jpg", alt: "Sponsor 2" },
  { src: "/images/c3.jpg", alt: "Sponsor 3" },
  { src: "/images/c4.jpg", alt: "Sponsor 4" },
];

function SponsCarousel() {
  return (
    <div className='sliderContainer'>
      <div className="sliderWrapper">
        <div className="sliderCarousel">
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              id={`slider${index + 1}`} 
              className="sliderImage"
            />
          ))}
        </div>
        <div className="sliderNav">
          <a href="#slider1"></a>
          <a href="#slider2"></a>
          <a href="#slider3"></a>
          <a href="#slider4"></a>
        </div>
      </div>
    </div>
  );
}

export default SponsCarousel;
