import { useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import music from "../../assets/audio/birthday.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mp3" />
      </audio>

      <button className="music-player" onClick={toggleMusic}>
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
}

export default MusicPlayer;