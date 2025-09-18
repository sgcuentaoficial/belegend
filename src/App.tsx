import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedHighlights from './components/FeaturedHighlights';
import FeaturedProducts from './components/FeaturedProducts';
import SocialProofSection from './components/SocialProofSection';
import ConversionSection from './components/ConversionSection';
import Footer from './components/Footer';
import Collections from './pages/Collections';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Returns from './pages/Returns';

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturedHighlights />
    <FeaturedProducts />
    <SocialProofSection />
    <ConversionSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/collections" element={<Collections />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/returns" element={<Returns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;