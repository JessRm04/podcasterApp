import React from 'react';
import './podcastCard.css'

const PodcastCard = ({ image, name, artist }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>Author: {artist}</p>
    </div>
  );
};

export default PodcastCard;