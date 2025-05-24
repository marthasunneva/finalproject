// src/components/NewsletterForm.jsx
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function NewsletterForm() {
  const [email, setEmail]   = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending…');
    try {
      await addDoc(collection(db, 'newsletter'), {
        email,
        timestamp: Date.now()
      });
      setStatus('Thanks for signing up! 🎉');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('Oops—couldn’t submit. Try again?');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="email-input"
      />
      <button type="submit" className="submit-button">
        Sign Up
      </button>
      {status && <p className="status-message">{status}</p>}
    </form>
  );
}
