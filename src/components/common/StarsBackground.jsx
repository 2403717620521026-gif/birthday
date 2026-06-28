function StarsBackground() {
  return (
    <div className="stars">

      {[...Array(80)].map((_, index) => (
        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        ></span>
      ))}

    </div>
  );
}

export default StarsBackground;