import { useParams } from 'react-router-dom';
import Header from "../atoms/Header/Header";
import PodcastDescriptionBox from "../molecules/PodcastDescriptionBox/PodcastDescriptionBox";


const PodcastDetailPage = () => {
  const { podcastId } = useParams();

  return (
    <>
      <Header />
      <PodcastDescriptionBox podcastId={podcastId}/>
    </>
  );
};

export default PodcastDetailPage;
