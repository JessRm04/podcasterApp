import React, { useState, useEffect } from 'react';
import PodcastDescription from '../../atoms/PodcastDescription/PodcastDescription';
import PodcastEpisodes from '../../atoms/PodcastEpisodes/PodcastEpisodes';

const PodcastDescriptionBox = ({ podcastId }) => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        if (!podcastId) {
          return;
        }

        // Construir la URL del podcast usando el ID
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
    <div>
    <PodcastDescription
    name={selectedPodcast.collectionName}
    artist={selectedPodcast.artistName}
    description={selectedPodcast.description}
    imageUrl={selectedPodcast.artworkUrl100}
  />

  </div>
  );
};

export default PodcastDescriptionBox;
