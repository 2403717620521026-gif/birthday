import { useState } from "react";
import { motion } from "framer-motion";

function Cake() {
  const [blown, setBlown] = useState(false);

  return (
    <section className="cake-section">

      <motion.h2
        className="cake-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🎂 Make A Wish
      </motion.h2>

      <motion.p
        className="cake-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Close your eyes... make a wish... ❤️
      </motion.p>

      <div className="cake">

        <div className="candle">

          {!blown && <div className="flame"></div>}

        </div>

        <div className="cake-top"></div>

        <div className="cake-middle"></div>

        <div className="cake-bottom"></div>

      </div>

      {!blown ? (

        <button
          className="cake-btn"
          onClick={() => setBlown(true)}
        >
          💨 Blow The Candle
        </button>

      ) : (

        <motion.h3
          className="wish-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✨ Your wish has been sent to the stars ❤️
        </motion.h3>

      )}

    </section>
  );
}

export default Cake;