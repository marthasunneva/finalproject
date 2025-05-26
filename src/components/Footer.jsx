// src/components/Footer.jsx
import React from 'react';
import NewsletterForm from './NewsletterForm';
import './Footer.css';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import youtubeIcon from '../assets/youtube.png';
import linkedinIcon from '../assets/linkedin.png';
import tripadvisorIcon from '../assets/tripadvisor.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <ul className="footer__list">
          <li><a href="#" className="footer__link">Opening Hours &amp; Contact</a></li>
          <li><a href="#" className="footer__link">Support Us</a></li>
          <li><a href="#" className="footer__link">Find us on Maps</a></li>
          <li><a href="#" className="footer__link">Social Media</a></li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/nathistaarhus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/naturhistoriskmuseum/?locale=da_DK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/@naturhistoriskmuseumaarhus6461"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/naturhistorisk-museum-aarhus?originalSubdomain=dk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.tripadvisor.dk/Attraction_Review-g189530-d3600336-Reviews-Naturhistorisk_Museum-Aarhus_East_Jutland_Jutland.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tripadvisorIcon} alt="TripAdvisor" />
          </a>
        </div>
      </div>

      <div className="footer__right">
        <h4>Sign up for our Newsletter</h4>
        <p>Be the first to get exclusive news about new exhibitions &amp; events</p>
        <NewsletterForm />
      </div>
    </footer>
  );
}
