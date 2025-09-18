import React from 'react';
import { Crown, Zap, Target, Trophy } from 'lucide-react';

const EpicHeroSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/Imagen de WhatsApp 2025-09-18 a las 19.23.29_6cfba8a0.jpg"
                alt="Elite Athlete"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 font-black text-sm tracking-wider">
                ELITE PERFORMANCE
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-500 rounded-full opacity-10 blur-2xl"></div>
          </div>

          {/* Right Side - Epic Content */}
          <div className="text-black">
            {/* Badge */}
            <div className="inline-flex items-center bg-gray-100 border border-gray-300 px-4 py-2 rounded-full mb-8">
              <Crown className="h-4 w-4 text-black mr-2" />
              <span className="text-black font-bold text-sm tracking-wider">LEGENDARY PERFORMANCE</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              FORGE YOUR
              <br />
              <span className="text-gray-600">
                LEGEND
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Where champions are made. Premium athletic wear engineered for those who 
              refuse to settle for ordinary. Every thread, every stitch, every detail 
              crafted for peak performance.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Elite Materials</h4>
                  <p className="text-gray-600 text-sm">Swiss precision engineering</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Performance First</h4>
                  <p className="text-gray-600 text-sm">Tested by champions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Legendary Quality</h4>
                  <p className="text-gray-600 text-sm">Uncompromising standards</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Elite Status</h4>
                  <p className="text-gray-600 text-sm">Join the legends</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-black text-white font-black px-8 py-4 text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                SHOP ELITE COLLECTION
              </button>
              
              <button className="border-2 border-black text-black font-bold px-8 py-4 text-lg hover:bg-black hover:text-white transition-all duration-300">
                DISCOVER YOUR POTENTIAL
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-gray-300">
              <div>
                <div className="text-2xl font-black text-black">100K+</div>
                <div className="text-gray-600 text-sm">Elite Athletes</div>
              </div>
              <div>
                <div className="text-2xl font-black text-black">50+</div>
                <div className="text-gray-600 text-sm">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-black text-black">5.0</div>
                <div className="text-gray-600 text-sm">Champion Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpicHeroSection;