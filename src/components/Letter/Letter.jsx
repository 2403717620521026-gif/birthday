import { motion } from "framer-motion";
import birthdayData from "../../data/birthdayData";

function Letter() {
  return (
    <section className="letter-section">

      <motion.div
        className="letter-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="letter-title">
          {birthdayData.letter.title}
        </h2>

        <div className="letter-content">
          {birthdayData.letter.content}
        </div>

      </motion.div>

    </section>
  );
}

export default Letter;