import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles
import Item from './Item';
import { SuccessCarouselData } from '@/assets/data/dummydata';

export function SuccessCarousel(props) {
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px 0', 
        marginBottom: '40px',
        maxWidth: '1000px', // Limit the max width for larger screens
        margin: '0 auto', // Centering the carousel container
        height: '500px', // Set a fixed height for the carousel
      }}
    >
      <Carousel 
        showArrows={props.showArrows} 
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        emulateTouch
        swipeable
        interval={5000}
        style={{ width: '100%', height: '100%' }} // Responsive width and height for carousel
      >
        {SuccessCarouselData.map((item, index) => (
          <div key={index}>
            <Item src={item.src} title={item.title} description={item.description} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
