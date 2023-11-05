import React from 'react';
import './episodeBox.css'
import { SelectedEpisodeContext, PodcastIdContext } from '../../Context'
import PodcastDescription from '../../atoms/PodcastDescription/PodcastDescription';


const EpisodeBox = ({ selectedEpisode, podcastId }) => {
  if (!selectedEpisode) {
    return <div className="episodeBox">No se han obtenido datos del episodo.</div>;
  }

  if (!podcastId) {
    return <div className="episodeBox">No se han obtenido datos del episodo.</div>;
  }

  return (
    <>
    <div className='episodeBox'>
      <PodcastDescription         
          name={podcastId.collectionName}
          artist={podcastId.artistName}
          imageUrl={podcastId.artworkUrl100}/>
      <div className='episodeDescription'>
        <h2>{selectedEpisode.trackName}</h2>
        <p><i>{selectedEpisode.description}</i></p>
        <audio controls className="soundtrack">
          <source src={selectedEpisode.previewUrl} type="audio/mpeg" />
          Audio not soported.
        </audio>
      </div>
    </div>
  </>
  );
};

export default EpisodeBox;
