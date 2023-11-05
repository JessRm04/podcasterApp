import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import PodcastDetailPage from "./pages/PodcastDetailPage.jsx";
import EpisodeDetailPage from "./pages/EpisodeDetailPage.jsx";
import { SelectedEpisodeContext } from '../src/Context.jsx'

const Router = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <SelectedEpisodeContext.Provider value={{ selectedEpisode, setSelectedEpisode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="podcast/:podcastId" element={<PodcastDetailPage />}></Route>
          <Route path="podcast/:podcastId/episode/:trackId" element={<EpisodeDetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </SelectedEpisodeContext.Provider>
  );
};

export default Router;