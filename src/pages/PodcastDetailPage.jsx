import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../atoms/Header/Header';
import PodcastDescriptionBox from '../molecules/PodcastDescriptionBox/PodcastDescriptionBox'; 
import { SelectedEpisodeContext } from '../../src/Context' 

const PodcastDetailPage = () => {
  const { podcastId } = useParams();
  const { setSelectedEpisode } = useContext(SelectedEpisodeContext);

  return (
    <>
      <Header />
      <PodcastDescriptionBox podcastId={podcastId} />
    </>
  );
};

export default PodcastDetailPage;
