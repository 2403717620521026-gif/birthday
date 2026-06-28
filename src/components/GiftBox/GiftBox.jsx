import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import birthdayData from "../../data/birthdayData";
import FloatingHearts from "../common/FloatingHearts";
import StarsBackground from "../common/StarsBackground";
function GiftBox() {
  const [opened, setOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const openGift = () => {
    setOpened(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <section className="gift-section" id="gift">
<StarsBackground />
      <FloatingHearts />

      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={300}
        />
      )}

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            key="closed"
            className="gift-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >

            <div className="gift-icon">
              🎁
            </div>

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
            key="opened"
            className="gift-open"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <div className="gift-glow"></div>

            <div className="gift-heart">
              ❤️
            </div>

            <h1>
              ✨ Your Surprise Begins...
            </h1>

            <p>
              Every memory tells a beautiful story.
            </p>

            <button
              className="continue-btn"
              onClick={() =>
                document
                  .getElementById("story")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Continue Our Story →
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}

export default GiftBox;