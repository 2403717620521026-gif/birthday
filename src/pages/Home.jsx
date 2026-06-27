import { useState } from "react";
import Letter from "../components/Letter/Letter";
import LoadingScreen from "../components/Loading/LoadingScreen";
import Hero from "../components/Hero/Hero";
import GiftBox from "../components/GiftBox/GiftBox";
import StorySection from "../components/Story/StorySection";
import VideoSection from "../components/Video/VideoSection";
import Cake from "../components/Cake/Cake";
import Finale from "../components/Finale/Finale";
import MusicPlayer from "../components/Music/MusicPlayer";
function Home() {

  const [loading, setLoading] = useState(true);

  return (

    <div className="app">

      {loading ? (

        <LoadingScreen
          onFinish={() => setLoading(false)}
        />

      ) : (

        <>

          <>
  <MusicPlayer />

  <Hero />

  <GiftBox />

  <StorySection />

  <Letter />

  <VideoSection />

  <Cake />

  <Finale />
</>
        </>

      )}

    </div>

  );

}

export default Home;