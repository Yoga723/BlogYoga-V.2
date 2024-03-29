"use client";
import { useEffect, useState } from "react";

const TwinkleStars = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star", "m-0");
    star.style.animation = `twinkle ${Math.random() * 1 + 5}s linear ${
      Math.random() * 1 + 1
    }s infinite`;
    star.style.top = `${Math.random() * windowSize.height}px`;
    star.style.left = `${Math.random() * windowSize.width}px`;

    document.querySelector(".twinkleStars")?.appendChild(star);
  }
  return <div className="twinkleStars"></div>;
};

export default TwinkleStars;
