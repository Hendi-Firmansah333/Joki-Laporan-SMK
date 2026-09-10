import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ServiceEducation from './pages/ServiceEducation';
import PaymentMethods from './pages/PaymentMethods';
import InfoPage from './pages/InfoPage';
import { PageTransition } from './components/PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/edukasi/:serviceId" element={<PageTransition><ServiceEducation /></PageTransition>} />
        <Route path="/bantuan/metode-pembayaran" element={<PageTransition><PaymentMethods /></PageTransition>} />
        <Route path="/info/:pageId" element={<PageTransition><InfoPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
