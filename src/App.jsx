import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import MainPage from './pages/MainPage'
import Header from './atoms/Header/Header'
import PodcastDetailPage from './pages/PodcastDetailPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
    <Route path="/podcast/:podcastId" element={<PodcastDetailPage />}/>
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
