import { motion } from "framer-motion";
import birthdayVideo from "../../assets/videos/birthday.mp4";

function VideoSection() {
  return (
    <section className="video-section">

      <motion.div
        className="video-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="video-title">
          🎥 Our Beautiful Memories
        </h2>

        <p className="video-subtitle">
          Every second with you is a memory I'll always treasure ❤️
        </p>

        <video
          className="birthday-video"
          controls
          preload="metadata"
        >
          <source src={birthdayVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </motion.div>

    </section>
  );
}

export default VideoSection;