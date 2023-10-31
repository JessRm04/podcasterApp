import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './pages/MainPage'
import Header from './atoms/Header/Header'

function App() {
  return (
    <div>
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
