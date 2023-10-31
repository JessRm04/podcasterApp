import React, { useState, useEffect } from 'react';
import './PodcastBox.css';
import PodcastCard from '../../atoms/PodcastCard/PodcastCard';
import SearchBar from '../../atoms/SearchBar/Searchbar'

const PodcastBox = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    const getPodcast = async () => {
      try {
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        if (response.ok) {
          const data = await response.json();
          setPodcasts(data.feed.entry); // Almacenar los podcasts en el estado
        } else {
          throw new Error('Error al obtener los podcasts populares');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getPodcast();
  }, []);

  // Filtrar los podcasts según el término de búsqueda
  useEffect(() => {
    setFilteredPodcasts(
      podcasts.filter(podcast =>
        podcast['im:name'].label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, podcasts]);

  const renderPodcasts = filteredPodcasts.length > 0 ? filteredPodcasts : podcasts;

  return (
    <>
    <SearchBar
    type="text"
    placeholder="Filter podcasts..."
    value={searchTerm}
    onChange={e => setSearchTerm(e.target.value)}
    /> 
    <div className="podcastBox">
      {renderPodcasts.map(podcast => (
        <PodcastCard
          key={podcast.id.label}
          image={podcast['im:image'][0].label}
          name={podcast['im:name'].label}
          artist={podcast['im:artist'].label}
        />
      ))}
    </div>
    </>
  );
};

export default PodcastBox;
