import React, { useContext } from 'react'; // Asegúrate de importar useContext
import { useParams } from 'react-router-dom';
import Header from '../atoms/Header/Header';
import EpisodeBox from '../molecules/EpisodeBox/EpisodeBox';
import { SelectedEpisodeContext } from '../../src/Context' // Asegúrate de que la ruta de importación es correcta

const EpisodeDetailPage = () => {
  const { podcastId, episode } = useParams();
  const { selectedEpisode } = useContext(SelectedEpisodeContext); // Usa selectedEpisode en lugar de setSelectedEpisode

  return (
    <>
      <Header />
      <EpisodeBox selectedEpisode={selectedEpisode} /> {/* Pasa selectedEpisode como una prop a EpisodeBox */}
    </>
  );
};

export default EpisodeDetailPage;
