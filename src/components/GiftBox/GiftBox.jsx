import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import birthdayData from "../../data/birthdayData";

function GiftBox() {
  const [opened, setOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const openGift = () => {
    setOpened(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);

      document.getElementById("story")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 3000);
  };

  return (
    <section className="gift-section" id="gift">

      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={250}
        />
      )}

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            key="closed"
            className="gift-card"
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >

            <div className="gift-icon">🎁</div>

            <h2 className="gift-title">
              {birthdayData.gift.title}
            </h2>

            <p className="gift-subtitle">
              {birthdayData.gift.subtitle}
            </p>

            <button
              className="gift-btn"
              onClick={openGift}
            >
              {birthdayData.gift.button}
            </button>

          </motion.div>

        ) : (

          <motion.div
            className="gift-open"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >

            <h1>❤️</h1>

            <h2>Your Surprise Begins...</h2>

            <p>
              Every memory tells a beautiful story.
            </p>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default GiftBox;