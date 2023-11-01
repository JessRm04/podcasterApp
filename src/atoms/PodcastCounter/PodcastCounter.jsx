import React from 'react';
import './podcastCounter.css'

const PodcastCounter = ({ count }) => {
  return (
    <div className='podcastCounter'>
      <p>{count}</p>
    </div>
  );
};

export default PodcastCounter;