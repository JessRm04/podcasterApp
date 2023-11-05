import React from 'react';
import './PodcastCard.css';
import { Link } from 'react-router-dom';

const PodcastCard = ({ image, name, artist, podcastId, handleCardClick, isSelected }) => {
  
  const cardClick = () => {
    handleCardClick(podcastId);
  };

  const extractIdFromUrl = (podcastUrl) => {
    const id = podcastUrl.match(/\d+/);
    return id ? id[0] : null;
  };

  return (
    <div className={`card ${isSelected ? 'selected' : ''}`} onClick={cardClick}>
      <Link to={`/podcast/${extractIdFromUrl(podcastId)}`} onClick={() => handleCardClick(podcastId)} className="link">
        <div className="imageContainer">
          <img src={image} alt={name} />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <p>Author: {artist}</p>
        </div>
      </Link>
    </div>
  );
};

export default PodcastCard;
