import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Exhibitions from './pages/Exhibitions';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              {/* other homepage sections */}
            </>
          }
        />
        <Route path="/exhibitions" element={<Exhibitions />} />
        {/* add /tickets route when you build it */}
      </Routes>
      <Footer />
    </>
  );
}
