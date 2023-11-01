import React from 'react';

const PodcastEpisodes = ({ episodes }) => {
  return (
    <div className="episodeList">
      {episodes.map((episode, index) => (
        <div key={index} className="episodeItem">
          <p className="episodeTitle">{episode.trackName}</p>
          <p>Date: {new Date(episode.releaseDate).toLocaleDateString()}</p>
          <p>Duration: {Math.floor(episode.trackTimeMillis / 60000)} minutes</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PodcastEpisodes;