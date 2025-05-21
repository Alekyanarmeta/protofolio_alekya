import React, { useEffect, useRef } from "react";
import "./App.css";

function Toppage() {
  const typingRef = useRef(null);

  useEffect(() => {
    const textArray = [
      "MERN Stack Development",
      "Python",
      "ReactJS",
      "Express.js",
    ];
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenWords = 1500;
    let textIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    let timeoutId;

    const type = () => {
      const currentText = textArray[textIndex];
      if (typingRef.current) {
        if (!isErasing) {
          typingRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentText.length) {
            isErasing = true;
            timeoutId = setTimeout(type, delayBetweenWords);
          } else {
            timeoutId = setTimeout(type, typingSpeed);
          }
        } else {
          typingRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
            isErasing = false;
            textIndex = (textIndex + 1) % textArray.length;
            timeoutId = setTimeout(type, typingSpeed);
          } else {
            timeoutId = setTimeout(type, erasingSpeed);
          }
        }
      }
    };

    timeoutId = setTimeout(type, typingSpeed);

    // Cleanup on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="mt-5">
      <div className="contain1">
        <div className="intro">
          <h1>Hello, I'm</h1>
          <h2>Narmeta Alekya</h2>
          <h2>
        I am good at{" "}
        <span className="highlight text-center" style={{ color: "cyan" }} ref={typingRef}></span>
        <span className="cursor">|</span>
      </h2>
        </div>
        <div style={{ backgroundPosition: "right" }}>
          <img src="/alekya1.jpg" alt="Profile" className="profile" />
        </div>
      </div>
    </div>
  );
}

export default Toppage;
