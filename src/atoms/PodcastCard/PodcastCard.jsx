import React from 'react';
import './PodcastCard.css';

const PodcastCard = ({ image, name, artist, podcastId, handleCardClick, isSelected }) => {
  
  const cardClick = () => {
    handleCardClick(podcastId);
  };

  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={cardClick}>
      <div className="imageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <p>Author: {artist}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
