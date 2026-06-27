import birthdayData from "../../data/birthdayData";
import { FaHeart, FaMusic } from "react-icons/fa";
import Stars from "./Stars";
function Hero() {
  return (
    
    <section className="hero">
<Stars />

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {[...Array(12)].map((_, index) => (
          <span
            key={index}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.6}s`,
              animationDuration: `${6 + Math.random() * 5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-tag">
          ❤️ A Special Birthday Surprise ❤️
        </p>

        <h1 className="hero-title">
          {birthdayData.person.heroTitle}
          <br />
          <span>{birthdayData.person.name}</span>
        </h1>

        <p className="hero-subtitle">
          {birthdayData.person.heroSubtitle}
        </p>

        <div className="hero-buttons">

          <button
  className="hero-btn"
  onClick={() => {
    document
      .getElementById("gift")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  {birthdayData.person.heroButton}
</button>

          <button className="music-btn">
            <FaMusic />
          </button>

        </div>

        <div className="scroll-indicator">

          <span></span>

          <p>Scroll To Begin</p>

        </div>

      </div>

    </section>
  );
}

export default Hero;