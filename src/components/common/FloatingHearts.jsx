function FloatingHearts() {

  return (
    <div className="floating-hearts">

      {[...Array(18)].map((_, index) => (

        <span
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${8 + Math.random() * 6}s`
          }}
        >
          ❤️
        </span>

      ))}

    </div>
  );

}

export default FloatingHearts;