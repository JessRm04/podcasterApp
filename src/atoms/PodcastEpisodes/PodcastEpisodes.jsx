import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { PodcastIdContext } from '../../Context'
import './PodcastEpisodes.css';

const PodcastEpisodes = ({ podcastId: initialPodcastId, setSelectedEpisode }) => {
  const { setPodcastId } = useContext(PodcastIdContext); // Obtén setPodcastId del contexto
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setPodcastId(initialPodcastId); // Actualiza podcastId en el contexto

    const fetchEpisodes = async () => {
      try {
        if (!initialPodcastId) {
          return;
        }

        const episodesUrl = `https://itunes.apple.com/lookup?id=${initialPodcastId}&entity=podcastEpisode`;

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
  }, [initialPodcastId]);

  const handleEpisodeClick = (selected) => {
    console.log('Datos del episodio seleccionado:', selected);
    setSelectedEpisode(selected, initialPodcastId);
  };

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
            <tr
              key={episode.trackId}
              className={index % 2 === 0 ? 'even' : 'odd'}
              onClick={() => handleEpisodeClick(episode)}
            >
              <td className="title">
                <Link to={`/podcast/${initialPodcastId}/episode/${episode.trackId}`} className="linkEpisode">
                  {episode.trackName}
                </Link>
              </td>
              <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
              <td>{generateRandomDuration()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Función para generar una duración aleatoria en el formato MM:SS
const generateRandomDuration = () => {
  const minutes = Math.floor(Math.random() * 24) + 32;
  const seconds = Math.floor(Math.random() * 60);
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

export default PodcastEpisodes;
