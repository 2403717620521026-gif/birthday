import { motion } from "framer-motion";
import birthdayData from "../../data/birthdayData";

function StorySection() {
  return (
    <section className="story-section" id="story">

      {birthdayData.story.map((story, index) => (

        <motion.section
          key={story.id}
          className={`story-card ${index % 2 !== 0 ? "reverse" : ""}`}
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >

          <div className="story-image-container">

            <motion.img
              src={story.image}
              alt={story.title}
              className="story-image"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.4 }}
            />

          </div>

          <div className="story-content">

            <span className="chapter">

              {story.chapter}

            </span>

            <h2>

              {story.title}

            </h2>

            <p>

              {story.message}

            </p>

          </div>

        </motion.section>

      ))}

    </section>
  );
}

export default StorySection;