import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "UNLEASH YOUR LEGEND",
      subtitle: "Premium Performance Gear",
      cta: "Shop Elite Collection",
      badge: "NEW ARRIVAL"
    },
    {
      image: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "BUILT FOR CHAMPIONS",
      subtitle: "Professional Grade Athletic Wear",
      cta: "Discover Pro Series",
      badge: "LIMITED EDITION"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
                <span className="text-white text-sm font-bold uppercase tracking-wider">
                  {slides[currentSlide].badge}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none">
                {slides[currentSlide].title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                {slides[currentSlide].subtitle}
              </p>
              
              {/* Social Proof */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-white ml-2 font-medium">4.9/5</span>
                </div>
                <div className="text-white/80">
                  <span className="font-bold">50,000+</span> Athletes Trust Us
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group bg-white text-black px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  {slides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Story
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-2xl font-black text-black mb-1 group-hover:scale-110 transition-transform">FREE SHIPPING</div>
              <div className="text-gray-600 text-sm">Orders $75+</div>
            </div>
            <div className="group">
              <div className="text-2xl font-black text-black mb-1 group-hover:scale-110 transition-transform">30-DAY RETURNS</div>
              <div className="text-gray-600 text-sm">No Questions Asked</div>
            </div>
            <div className="group">
              <div className="text-2xl font-black text-black mb-1 group-hover:scale-110 transition-transform">LIFETIME WARRANTY</div>
              <div className="text-gray-600 text-sm">Premium Quality</div>
            </div>
            <div className="group">
              <div className="text-2xl font-black text-black mb-1 group-hover:scale-110 transition-transform">24/7 SUPPORT</div>
              <div className="text-gray-600 text-sm">Expert Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;