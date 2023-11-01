// PodcastDescriptionBox.js
import React, { useState, useEffect } from 'react';
import PodcastDescription from '../../atoms/PodcastDescription/PodcastDescription';

const PodcastDescriptionBox = ({ podcastId }) => {
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        if (!podcastId) {
          return;
        }

        // Construir la URL del podcast usando el ID
        const podcastUrl = `https://podcasts.apple.com/us/podcast/class-of-88-with-will-smith/${podcastId}?uo=2`;

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
    return <div>Cargando detalles del podcast...</div>;
  }

  return (
    <PodcastDescription
      name={selectedPodcast.name}
      artist={selectedPodcast.artistName}
      description={selectedPodcast.description}
      imageUrl={selectedPodcast.artworkUrl100}
    />
  );
};

export default PodcastDescriptionBox;
