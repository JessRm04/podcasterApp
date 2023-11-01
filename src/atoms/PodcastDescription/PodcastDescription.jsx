import React from 'react';

const PodcastDescription = ({ name, artist, description, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{artist}</p>
      <p>{description}</p>
    </div>
  );
};

export default PodcastDescription;
