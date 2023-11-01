// PodcastBox.js
import React, { useState, useEffect } from 'react';
import './PodcastBox.css';
import PodcastCard from '../../atoms/PodcastCard/PodcastCard';
import SearchBar from '../../atoms/Searchbar/Searchbar';
import PodcastCounter from '../../atoms/PodcastCounter/PodcastCounter';
import PodcastDescriptionBox from '../../molecules/PodcastDescriptionBox/PodcastDescriptionBox';

const PodcastBox = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [filteredCount, setFilteredCount] = useState(100);
  const [selectedPodcastId, setSelectedPodcastId] = useState(null);

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        if (response.ok) {
          const data = await response.json();
          setPodcasts(data.feed.entry);
        } else {
          throw new Error('Error al obtener los podcasts populares');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getPodcasts();
  }, []);

  useEffect(() => {
    const filtered = podcasts.filter(podcast =>
      podcast['im:name'].label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPodcasts(filtered);
    setFilteredCount(filtered.length);
  }, [searchTerm, podcasts]);

  const handlePodcastClick = (podcastId) => {
    setSelectedPodcastId(podcastId);
  };

  return (
    <>
      <div className='searchBox'>
        <PodcastCounter count={filteredCount} />
        <SearchBar
          type="text"
          placeholder="Filter podcasts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="podcastBox">
        {filteredPodcasts.map(podcast => (
          <PodcastCard
            key={podcast.id.label}
            podcastId={podcast['id'].label}
            image={podcast['im:image'][0].label}
            name={podcast['im:name'].label}
            artist={podcast['im:artist'].label}
            handleCardClick={handlePodcastClick}
            isSelected={selectedPodcastId === podcast['id'].label}
          />
        ))}
      </div>

      {selectedPodcastId && <PodcastDescriptionBox podcastId={selectedPodcastId} />}
    </>
  );
};

export default PodcastBox;
