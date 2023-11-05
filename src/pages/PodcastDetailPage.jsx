import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../atoms/Header/Header';
import PodcastDescriptionBox from '../molecules/PodcastDescriptionBox/PodcastDescriptionBox'; // Asegúrate de importar PodcastDescriptionBox
import { SelectedEpisodeContext } from '../../src/Context' // Asegúrate de que la ruta de importación es correcta

const PodcastDetailPage = () => {
  const { podcastId } = useParams();
  const { setSelectedEpisode } = useContext(SelectedEpisodeContext);

  return (
    <>
      <Header />
      <PodcastDescriptionBox podcastId={podcastId} setSelectedEpisode={setSelectedEpisode} /> {/* Pasa setSelectedEpisode como una prop a PodcastDescriptionBox */}
    </>
  );
};

export default PodcastDetailPage;
