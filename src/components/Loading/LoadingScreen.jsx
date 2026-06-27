import { useEffect, useState } from "react";

function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="loading-content">

        <h1 className="loading-logo">
          Divya ❤️
        </h1>

        <p className="loading-text">
          Preparing your surprise...
        </p>

        <div className="loading-bar">
          <div
            className="loading-progress"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <h3 className="loading-percent">
          {progress}%
        </h3>

      </div>
    </div>
  );
}

export default LoadingScreen;