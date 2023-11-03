import React, { useState, useEffect } from 'react';
import './podcastEpisodes.css'

const PodcastEpisodes = ({ podcastId }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        if (!podcastId) {
          return;
        }

        // Construir la URL de los episodios del podcast usando el ID
        const episodesUrl = `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`;

        const response = await fetch(episodesUrl);

        if (response.ok) {
          const data = await response.json();
          setEpisodes(data.results);
        } else {
          throw new Error('Error al obtener los episodios del podcast');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEpisodes();
  }, [podcastId]);

  return (
<div className='episodes'>
  <h2>Episodes</h2>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      {episodes.map((episode, index) => (
        <tr key={episode.trackId} className={index % 2 === 0 ? 'even' : 'odd'}>
          <td className="title">{episode.trackName}</td>
          <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
          <td>{generateRandomDuration()}</td>
          <hr></hr>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

// Función para generar una duración aleatoria en el formato MM:SS
const generateRandomDuration = () => {
  const minutes = Math.floor(Math.random() * 24) + 32; // Genera un número entre 32 y 55
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export default PodcastEpisodes;
