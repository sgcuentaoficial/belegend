import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import ImageTextSection from './components/ImageTextSection';
import BrandStory from './components/BrandStory';
import Community from './components/Community';
import TrustSignals from './components/TrustSignals';
import SEOContent from './components/SEOContent';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Collections from './pages/Collections';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Returns from './pages/Returns';

const HomePage = () => (
  <>
    <HeroSection />
    <CategoryGrid />
    <FeaturedProducts />
    <BrandStory />
    <Community />
    <ImageTextSection />
    <TrustSignals />
    <SEOContent />
    <Newsletter />
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