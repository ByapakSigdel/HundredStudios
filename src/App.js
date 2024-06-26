import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import WorksPage from './pages/WorksPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div className="bg-[#1b1b1a] min-h-screen text-white">
      <Router>
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
