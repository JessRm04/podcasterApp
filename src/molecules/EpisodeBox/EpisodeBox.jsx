import React from 'react';
import './episodeBox.css'

const EpisodeBox = ({ selectedEpisode }) => {
  if (!selectedEpisode) {
    return <div className="episodeBox">No se han obtenido datos del episodo.</div>;
  }

  return (
    <div className='episodeBox'>
      <h2>{selectedEpisode.trackName}</h2>
      <p><i>{selectedEpisode.description}</i></p>
      <audio controls className="soundtrack">
        <source src={selectedEpisode.previewUrl} type="audio/mpeg" />
        Audio not soported.
      </audio>
    </div>
  );
};

export default EpisodeBox;
