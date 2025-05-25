// src/components/NewsEvents.jsx
import React, { useRef, useState, useEffect } from 'react';
import './NewsEvents.css';

const ITEMS = [
  { img: '/assets/newsimg1.png', title: 'Experience the Wild Horses with Peter Lassen', overlay: 'Get a very special experience in Denmark’s most beautiful nature!' },
  { img: '/assets/newsimg2.png', title: 'Animals In Cities',                     overlay: 'Join Vimse on an adventure in the city and meet lots of exciting animals!' },
  { img: '/assets/newsimg3.png', title: 'Participate and Win!',                   overlay: 'Participate in the survey and win fun prizes!' },
];

export default function NewsEvents() {
  const scrollerRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);

  // update scrollPct whenever the user scrolls
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollPct(maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0);
  };

  // attach listener
  useEffect(() => {
    const el = scrollerRef.current;
    el.addEventListener('scroll', handleScroll, { passive: true });
    // set initial in case already scrolled
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="news-events">
      <h2>News &amp; Events</h2>
      <p className="news-events__subhead">Scroll to explore</p>
      <div className="news-events__scroller" ref={scrollerRef}>
        {ITEMS.map(({ img, title, overlay }, i) => (
          <div className="news-card" key={i}>
            <img src={img} alt={title} className="news-card__img" />
            <div className="news-card__overlay">
              <p className="news-card__overlay-text">{overlay}</p>
              <button className="news-card__button">
                Read More <span className="news-card__btn-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar container */}
      <div className="news-events__progress">
        <div
          className="news-events__progress-bar"
          style={{ width: `${scrollPct}%` }}
        />
      </div>
    </section>
  );
}
