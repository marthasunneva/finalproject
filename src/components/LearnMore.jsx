// src/components/LearnMore.jsx
import React from 'react';
import './LearnMore.css';
import doorImage from '../assets/doorimg.png';

const LINKS = [
  'School & Institution',
  'Knowledge & Research',
  'The Mols Laboratory',
  'Organization',
  'Webshop'
];

export default function LearnMore() {
  return (
    <section className="learn-more">
      <div className="learn-more__list">
        <h2>Learn More About Us</h2>
        <ul>
          {LINKS.map(text => (
            <li key={text}>
              <button className="learn-more__link">
                {text}
                <span className="learn-more__arrow">→</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="learn-more__image">
        <img src={doorImage} alt="Museum Entrance" />
      </div>
    </section>
  );
}
