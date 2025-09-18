import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star, Users, Award, Truck } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "TRAIN LIKE A",
      subtitle: "LEGEND",
      description: "Premium fitness apparel designed for performance and style",
      cta: "Shop Collection",
      badge: "NEW COLLECTION"
    },
    {
      image: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "UNLEASH YOUR",
      subtitle: "POTENTIAL",
      description: "High-performance gear for serious athletes",
      cta: "Explore Range",
      badge: "PERFORMANCE GEAR"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-[70vh] md:h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-block bg-white text-black px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6">
                {slides[currentSlide].badge}
              </div>
              
              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-black text-white mb-2 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                {slides[currentSlide].subtitle}
              </h2>
              
              {/* Description */}
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <button className="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Truck className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Free Shipping Over €50</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">50K+ Athletes</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;