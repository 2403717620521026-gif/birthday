function Stars() {

  return (

    <div className="stars">

      {[...Array(120)].map((_, index) => (

        <span
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></span>

      ))}

    </div>

  );

}

export default Stars;