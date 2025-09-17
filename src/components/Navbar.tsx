import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, Heart, ChevronDown } from 'lucide-react';

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
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-center text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4">
          <span className="animate-pulse">🔥</span>
          <span>FLASH SALE: Up to 50% OFF Premium Collection</span>
          <span className="animate-pulse">🔥</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      } border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-black text-black tracking-tight hover:text-gray-600 transition-colors">
                BE LEGEND
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <div className="relative group">
                  <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-bold uppercase tracking-wide flex items-center">
                    Men
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                  {/* Dropdown would go here */}
                </div>
                <div className="relative group">
                  <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-bold uppercase tracking-wide flex items-center">
                    Women
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                </div>
                <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-bold uppercase tracking-wide">
                  Accessories
                </a>
                <a href="/collections" className="text-red-600 hover:text-red-700 transition-colors text-sm font-bold uppercase tracking-wide">
                  Sale
                </a>
              </div>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="h-5 w-5 text-black" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="h-5 w-5 text-black" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Heart className="h-5 w-5 text-black" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  2
                </span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingBag className="h-5 w-5 text-black" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-black" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="/collections" className="block text-black font-bold text-lg uppercase tracking-wide hover:text-gray-600 py-2">
                Men
              </a>
              <a href="/collections" className="block text-black font-bold text-lg uppercase tracking-wide hover:text-gray-600 py-2">
                Women
              </a>
              <a href="/collections" className="block text-black font-bold text-lg uppercase tracking-wide hover:text-gray-600 py-2">
                Accessories
              </a>
              <a href="/collections" className="block text-red-600 font-bold text-lg uppercase tracking-wide hover:text-red-700 py-2">
                Sale
              </a>
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                <Search className="h-6 w-6 text-black" />
                <User className="h-6 w-6 text-black" />
                <div className="relative">
                  <Heart className="h-6 w-6 text-black" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;