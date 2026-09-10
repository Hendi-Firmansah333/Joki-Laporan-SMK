import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceEducation from './pages/ServiceEducation';
import PaymentMethods from './pages/PaymentMethods';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edukasi/:serviceId" element={<ServiceEducation />} />
        <Route path="/bantuan/metode-pembayaran" element={<PaymentMethods />} />
        <Route path="/info/:pageId" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
