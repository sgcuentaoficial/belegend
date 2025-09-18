import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, Heart, ChevronDown, Crown, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Premium Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black py-3 text-center text-sm font-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4 relative z-10">
          <Crown className="h-4 w-4 animate-pulse" />
          <span className="tracking-wider font-serif">EXCLUSIVE: Private Sale - Up to 60% OFF Masterpiece Collection</span>
          <Crown className="h-4 w-4 animate-pulse" />
        </div>
      </div>

      {/* Luxury Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-gray-900/10 border-b border-amber-400/20' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Premium Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Crown className="h-6 w-6 text-black" />
                </div>
                <span className="text-2xl font-black text-black tracking-tight hover:text-amber-600 transition-colors font-serif">
                  BE LEGEND
                </span>
              </a>
            </div>

            {/* Luxury Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-12">
                <div className="relative group">
                  <a href="/collections" className="text-black hover:text-amber-600 transition-colors text-sm font-bold uppercase tracking-[0.1em] flex items-center font-serif">
                    Gentlemen
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  </a>
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <div className="p-6 space-y-4">
                      <a href="#" className="block text-gray-700 hover:text-amber-600 font-medium font-serif">Masterpiece Collection</a>
                      <a href="#" className="block text-gray-700 hover:text-amber-600 font-medium font-serif">Elite Performance</a>
                      <a href="#" className="block text-gray-700 hover:text-amber-600 font-medium font-serif">Luxury Athleisure</a>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <a href="/collections" className="text-black hover:text-amber-600 transition-colors text-sm font-bold uppercase tracking-[0.1em] flex items-center font-serif">
                    Ladies
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  </a>
                  <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <div className="p-6 space-y-4">
                      <a href="#" className="block text-gray-700 hover:text-amber-600 font-medium font-serif">Couture Collection</a>
                      <a href="#" className="block text-gray-700 hover:text-amber-600 font-medium font-serif">Performance Luxury</a>
                      <a href="#" className="block text-gray-700 hover:text-amber-600 font-medium font-serif">Exclusive Designs</a>
                    </div>
                  </div>
                </div>
                
                <a href="/collections" className="text-black hover:text-amber-600 transition-colors text-sm font-bold uppercase tracking-[0.1em] font-serif">
                  Accessories
                </a>
                
                <a href="/collections" className="text-amber-600 hover:text-amber-700 transition-colors text-sm font-bold uppercase tracking-[0.1em] flex items-center font-serif">
                  <Sparkles className="h-4 w-4 mr-1" />
                  Private Sale
                </a>
              </div>
            </div>

            {/* Luxury Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="p-3 hover:bg-amber-50 rounded-full transition-colors group">
                <Search className="h-5 w-5 text-black group-hover:text-amber-600 transition-colors" />
              </button>
              
              <button className="p-3 hover:bg-amber-50 rounded-full transition-colors group">
                <User className="h-5 w-5 text-black group-hover:text-amber-600 transition-colors" />
              </button>
              
              <button className="p-3 hover:bg-amber-50 rounded-full transition-colors relative group">
                <Heart className="h-5 w-5 text-black group-hover:text-amber-600 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  2
                </span>
              </button>
              
              <button className="p-3 hover:bg-amber-50 rounded-full transition-colors relative group">
                <ShoppingBag className="h-5 w-5 text-black group-hover:text-amber-600 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </button>
              
              {/* VIP Access Button */}
              <button className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-600 text-black px-6 py-3 font-black text-sm transition-all duration-300 hover:scale-105 flex items-center font-serif tracking-wide">
                <Crown className="h-4 w-4 mr-2" />
                VIP ACCESS
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative">
                <ShoppingBag className="h-6 w-6 text-black" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Luxury Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-400/20 shadow-2xl">
            <div className="px-6 pt-6 pb-8 space-y-6">
              <a href="/collections" className="block text-black font-bold text-xl uppercase tracking-wide hover:text-amber-600 py-3 font-serif">
                Gentlemen
              </a>
              <a href="/collections" className="block text-black font-bold text-xl uppercase tracking-wide hover:text-amber-600 py-3 font-serif">
                Ladies
              </a>
              <a href="/collections" className="block text-black font-bold text-xl uppercase tracking-wide hover:text-amber-600 py-3 font-serif">
                Accessories
              </a>
              <a href="/collections" className="block text-amber-600 font-bold text-xl uppercase tracking-wide hover:text-amber-700 py-3 flex items-center font-serif">
                <Sparkles className="h-5 w-5 mr-2" />
                Private Sale
              </a>
              
              <div className="flex items-center space-x-8 pt-6 border-t border-gray-200">
                <Search className="h-6 w-6 text-black" />
                <User className="h-6 w-6 text-black" />
                <div className="relative">
                  <Heart className="h-6 w-6 text-black" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    2
                  </span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-600 text-black py-4 font-black text-lg transition-all duration-300 flex items-center justify-center font-serif tracking-wide">
                <Crown className="h-5 w-5 mr-2" />
                VIP ACCESS
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;