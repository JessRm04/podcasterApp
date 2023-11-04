import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import PodcastDetailPage from "./pages/PodcastDetailPage.jsx";
const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="podcast/:podcastId" element={<PodcastDetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;