// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar'; 
// import Footer from './Component/Footer'; 
// import IndiaPage from './Component/IndiaPage';
// import AwardsPage from './Component/AwardsPage';
// import ReviewsPage from './Component/ReviewsPage';
// import AboutPage from './Component/AboutPage';
// import ContactPage from './Component/ContactPage';
// import LoginPage from './Component/LoginPage';
// import RegisterPage from './Component/RegisterPage';
// import HomePage from './Component/HomePage'; 
// import IndiaTours from './Component/IndiaTours'; 

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} /> 
//         <Route path="/india" element={<IndiaPage />} />
//         <Route path="/awards" element={<AwardsPage />} />
//         <Route path="/reviews" element={<ReviewsPage/>} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/indiatours" element={<IndiaTours />} /> 
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;











import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'; 
import Footer from './Component/Footer'; 
import IndiaPage from './Component/IndiaPage';
import AwardsPage from './Component/AwardsPage';
import ReviewsPage from './Component/ReviewsPage';
import AboutPage from './Component/AboutPage';
import ContactPage from './Component/ContactPage';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import HomePage from './Component/HomePage'; 
import IndiaTours from './Component/IndiaTours'; 
import TourDetailPage from './Component/TourDetailPage.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/india" element={<IndiaPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/reviews" element={<ReviewsPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/indiatours" element={<IndiaTours />} /> 
        <Route path="/details/:place" element={<TourDetailPage />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
