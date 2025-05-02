import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';

import IndiaPage from './Component/IndiaPage';
import AwardsPage from './Component/AwardsPage';
import ReviewsPage from './Component/ReviewsPage';
import AboutPage from './Component/AboutPage';
import ContactPage from './Component/ContactPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/india" element={<IndiaPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<h1 className="text-center text-3xl mt-10">Welcome to the Home Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
