import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import LearnMore from './components/LearnMore';
import NewsEvents from './components/NewsEvents';
import Exhibitions from './pages/Exhibitions';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <LearnMore />
              <NewsEvents />
            </>
          }
        />

        {/* Exhibitions page */}
        <Route path="/exhibitions" element={<Exhibitions />} />

        {/* TODO: add /tickets route here when ready */}
      </Routes>

      <Footer />
    </>
  );
}
