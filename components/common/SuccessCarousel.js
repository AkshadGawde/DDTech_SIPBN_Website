import React from 'react'
import Carousel from "react-elastic-carousel"
import Item from './Item';
import { SuccessCarouselData } from '@/assets/data/dummydata';

const breakPoints = [
    {width : 1 , itemsToShow : 1},
];

export function SuccessCarousel(props) {
  return (
    <div>
      <Carousel breakPoints={breakPoints} showArrows={props.showArrows} >
        {SuccessCarouselData.map((item) => (
            <Item src={item.src} title={item.title} description={item.description}/>
        ))}
      </Carousel>
    </div>
  )
};
