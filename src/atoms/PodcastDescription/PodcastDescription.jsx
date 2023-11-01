import React from 'react';
import './PodcastDescription.css'; // Ajusta la ruta del archivo CSS

const PodcastDescription = ({ name, artist, description, imageUrl }) => {
  return (
    <div className="PodcastDescriptionContainer">
      <img src={imageUrl} alt={name} />
      <p><b>{name}</b></p>
      <p><i>by {artist}</i></p>
      <hr />
      <p><b>Description:</b></p>
      <p><i>The service does not provide description data for this podcast.</i></p>
    </div>
  );
};

export default PodcastDescription;
