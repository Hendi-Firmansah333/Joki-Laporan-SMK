import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceEducation from './pages/ServiceEducation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edukasi/:serviceId" element={<ServiceEducation />} />
      </Routes>
    </Router>
  );
}

export default App;
