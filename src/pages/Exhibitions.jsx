// src/pages/Exhibitions.jsx
import React from 'react';
import './Exhibitions.css';

export default function Exhibitions() {
  return (
    <div className="exhibitions">
      {/* Back link */}
      <div className="exhibitions__back">
        ← Back to Current Exhibitions
      </div>

      {/* Hero */}
      <div className="exhibitions__hero">
        <img
          src="/assets/savannahimg.png"
          alt="Savannah Diorama"
        />
        <div className="exhibitions__hero-text">
          <h1>Expedition to Africa</h1>
          <p className="subtitle">
            The African Savannah has roared back to life!
          </p>
          <p className="body">
            We’ve reimagined the experience with modern interaction,
            digital storytelling, and fresh design.
          </p>
          <p className="footnote">
            Discover what’s new in the exhibition below!
          </p>
        </div>
      </div>

      {/* New & Elevated */}
      <section className="exhibitions__new-elevated">
        <div className="text">
          <h2>New &amp; Elevated Exhibition</h2>
          <p>
            Step into the savannah like never before. The beloved African
            Savannah exhibition has been digitally elevated, bringing new
            life to familiar dioramas.
          </p>
          <p>
            Curious sounds, moving images, and real-time reflections will
            make your visit unique!
          </p>
        </div>
        <div className="media">
          {/* Primary: GIF */}
          <img
            src="/assets/lion.gif"
            alt="Lion Head Exhibit"
            className="exhibitions__gif"
          />

          {/*
          // If you ever want to swap in video + poster fallback instead, use:
          <video controls poster="/assets/lion_frame.png" className="exhibitions__video">
            <source src="/assets/lion.MOV" type="video/quicktime" />
            Your browser doesn’t support embedded videos.
          </video>
          */}
        </div>
      </section>

      {/* Different Times */}
      <section className="exhibitions__different-times">
        <div className="dt-text">
          <h2>Different Times</h2>
          <p>
            The exhibition was created following a Danish hunting expedition
            to Kenya in 1947. Today, we acknowledge that this method of
            collecting animals no longer aligns with modern ethical
            standards.
          </p>
          <p>
            While the origins of the exhibition reflect a different era, the
            changes made to the exhibition offer a critical lens into how our
            relationship with nature has evolved. By preserving and
            recontextualizing this collection, the museum aims to foster
            reflection, responsibility, and dialogue about conservation,
            representation, and the choices we make today.
          </p>
        </div>
        <div className="dt-images">
          <img
            src="/assets/antelopesimg.png"
            alt="Antelopes Exhibit"
          />
        </div>
        <div className="dt-caption">
          Examples from museum exhibition
        </div>
      </section>

      {/* Call to action */}
      <div className="exhibitions__cta">
        <p>
          Come see what’s changed and most importantly what still needs
          protecting.
        </p>
        <p className="bold">
          Visit the museum and have a look for yourself!
        </p>
        <button className="btn">Get Tickets</button>
      </div>
    </div>
  );
}
