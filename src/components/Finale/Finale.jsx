import { motion } from "framer-motion";

function Finale() {
  return (
    <section className="finale-section">

      <div className="fireworks">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="spark"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <motion.h1
        className="finale-title"
        initial={{ opacity: 0, scale: .8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        🎉 Happy Birthday Ammu ❤️
      </motion.h1>

      <motion.p
        className="finale-subtitle"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: .3 }}
        viewport={{ once: true }}
      >
        Thank you for being the most beautiful
        part of my life.
      </motion.p>

      <motion.h3
        className="made-by"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        ❤️ Made with Love by Your Ammu ❤️
      </motion.h3>

    </section>
  );
}

export default Finale;