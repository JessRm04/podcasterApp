import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './pages/MainPage'
import Header from './atoms/Header/Header'
import PodcastDetailPage from './pages/PodcastDetailPage'

function App() {
  return (
    <div>
      <PodcastDetailPage/>
    </div>
  );
}

export default App;
