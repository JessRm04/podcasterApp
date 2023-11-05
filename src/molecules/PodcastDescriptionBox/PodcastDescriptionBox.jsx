import React, { useState, useEffect, useContext } from 'react'; 
import PodcastDescription from '../../atoms/PodcastDescription/PodcastDescription';
import PodcastEpisodes from '../../atoms/PodcastEpisodes/PodcastEpisodes';
import { SelectedEpisodeContext } from '../../Context'
import './podcastDescriptionBox.css'

const PodcastDescriptionBox = ({ podcastId }) => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const { setSelectedEpisode } = useContext(SelectedEpisodeContext); 

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        if (!podcastId) {
          return;
        }

        const podcastUrl = ` https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`;

        console.log('URL del podcast:', podcastUrl); // Comprobar la URL enviada mediante fetch

        const response = await fetch(podcastUrl);

        if (response.ok) {
          const data = await response.json();
          setSelectedPodcast(data.results[0]);
        } else {
          throw new Error('Error al obtener los detalles del podcast');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPodcast();
  }, [podcastId]);

  if (!selectedPodcast) {
    return ; // *NOTA: El json de itunes para la dirección indicada no provee descripciones de los podcast
  }

  console.log(selectedPodcast)
  return (
    <div className='descriptionBox'>
      <PodcastDescription
        name={selectedPodcast.collectionName}
        artist={selectedPodcast.artistName}
        imageUrl={selectedPodcast.artworkUrl100}
      />
      <PodcastEpisodes podcastId={podcastId} setSelectedEpisode={setSelectedEpisode} /> 
    </div>
  );
};

export default PodcastDescriptionBox;
