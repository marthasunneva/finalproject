// src/components/Slider.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

export default function Slider() {
  const images = [
    '../assets/heroslide1.png',
    '../assets/heroslide2.png',
    '../assets/heroslide3.png',
    '../assets/heroslide4.png',
    '../assets/heroslide5.png',
    '../assets/heroslide6.png',
  ];

  const [index, setIndex] = useState(0);
  const slideInterval = useRef(null);

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  useEffect(() => {
    slideInterval.current = setInterval(next, 5000);
    return () => clearInterval(slideInterval.current);
  }, []);

  const goTo = i => {
    setIndex(i);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(next, 5000);
  };

  return (
    <div className="slider">
      <button className="slider__arrow slider__arrow--left" onClick={prev}>
        ◀︎
      </button>

      <div className="slider__frame">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="slider__image"
        />
      </div>

      <button className="slider__arrow slider__arrow--right" onClick={next}>
        ▶︎
      </button>

      <div className="slider__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={
              i === index
                ? 'slider__dot slider__dot--active'
                : 'slider__dot'
            }
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
