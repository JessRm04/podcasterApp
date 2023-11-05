import React, { useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import Header from '../atoms/Header/Header';
import EpisodeBox from '../molecules/EpisodeBox/EpisodeBox';
import { SelectedEpisodeContext, PodcastIdContext } from '../../src/Context'

const EpisodeDetailPage = () => {

  const { selectedEpisode } = useContext(SelectedEpisodeContext); 
  const { podcastId} = useContext(PodcastIdContext); 

  return (
    <>
      <Header />
      <EpisodeBox selectedEpisode={selectedEpisode} podcastId={podcastId}/>
    </>
  );
};

export default EpisodeDetailPage;
