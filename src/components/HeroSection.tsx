import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Crown, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "CRAFTED FOR",
      subtitle: "CHAMPIONS",
      description: "Where precision meets performance. Every thread engineered for excellence.",
      cta: "Explore Masterpiece Collection",
      badge: "HANDCRAFTED EXCELLENCE"
    },
    {
      image: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "BEYOND",
      subtitle: "ORDINARY",
      description: "Transcend limitations. Embrace the extraordinary.",
      cta: "Discover Elite Series",
      badge: "LIMITED MASTERPIECE"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden min-h-screen">
      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90 z-10"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover filter brightness-50 contrast-125"
            />
          </div>
        ))}
        
        {/* Luxury Content */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Premium Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black px-8 py-3 mb-8 backdrop-blur-sm border border-amber-300/30">
                <Crown className="h-5 w-5 mr-3" />
                <span className="text-sm font-black uppercase tracking-[0.2em] font-serif">
                  {slides[currentSlide].badge}
                </span>
              </div>
              
              {/* Luxury Typography */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 leading-[0.85] tracking-tight font-serif">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent mb-6 leading-[0.85] tracking-tight font-serif">
                  {slides[currentSlide].subtitle}
                </h2>
              </div>
              
              {/* Elegant Description */}
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light leading-relaxed max-w-3xl font-serif italic">
                {slides[currentSlide].description}
              </p>
              
              {/* Premium Social Proof */}
              <div className="flex items-center space-x-12 mb-12">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white ml-3 font-medium text-lg">5.0 Excellence</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="h-6 w-6 mr-2 text-amber-400" />
                  <span className="font-medium text-lg">Award Winning Design</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Shield className="h-6 w-6 mr-2 text-amber-400" />
                  <span className="font-medium text-lg">Lifetime Guarantee</span>
                </div>
              </div>
              
              {/* Luxury CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
                <button className="group relative bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black px-12 py-6 font-black text-xl hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center tracking-wide">
                    {slides[currentSlide].cta}
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group relative border-2 border-amber-400 text-amber-400 px-12 py-6 font-black text-xl hover:bg-amber-400 hover:text-black transition-all duration-500 backdrop-blur-sm">
                  <span className="flex items-center justify-center tracking-wide">
                    <Play className="mr-3 h-6 w-6" />
                    Experience Story
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Luxury Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-16 h-1 transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-500' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Premium Trust Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-8 border-t border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-serif">
                COMPLIMENTARY
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Worldwide Delivery</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-serif">
                LIFETIME
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Craftsmanship Guarantee</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-serif">
                EXCLUSIVE
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Member Benefits</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl font-black text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300 font-serif">
                CONCIERGE
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Personal Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;