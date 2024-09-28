import React from 'react';
import '../../styles/success.module.scss'; // Import the styles

const Item = ({ src, title, description }) => {
  return (
    <div className="carousel-item">
      <img src={src} alt={title} className="carousel-image" />
      <h3 className="carousel-title">{title}</h3>
      <p className="carousel-description">{description}</p>
    </div>
  );
};

export default Item;
