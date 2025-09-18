import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, Heart, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(2);

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
      <div className="bg-black text-white py-2 text-center text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <span className="font-medium">Free shipping on orders over €50 | 30-day returns</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-black text-black">
                BE LEGEND
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <div className="relative group">
                  <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide flex items-center">
                    Men
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                    <div className="p-4 space-y-2">
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Tops</a>
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Bottoms</a>
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Outerwear</a>
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Accessories</a>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide flex items-center">
                    Women
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                    <div className="p-4 space-y-2">
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Tops</a>
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Bottoms</a>
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Sports Bras</a>
                      <a href="#" className="block text-gray-700 hover:text-black text-sm">Accessories</a>
                    </div>
                  </div>
                </div>
                
                <a href="/collections" className="text-black hover:text-gray-600 transition-colors text-sm font-medium uppercase tracking-wide">
                  Accessories
                </a>
                
                <a href="/collections" className="text-red-600 hover:text-red-700 transition-colors text-sm font-medium uppercase tracking-wide">
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
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  1
                </span>
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingBag className="h-5 w-5 text-black" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="relative">
                <ShoppingBag className="h-6 w-6 text-black" />
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
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="/collections" className="block text-black font-medium text-lg uppercase tracking-wide py-2">
                Men
              </a>
              <a href="/collections" className="block text-black font-medium text-lg uppercase tracking-wide py-2">
                Women
              </a>
              <a href="/collections" className="block text-black font-medium text-lg uppercase tracking-wide py-2">
                Accessories
              </a>
              <a href="/collections" className="block text-red-600 font-medium text-lg uppercase tracking-wide py-2">
                Sale
              </a>
              
              <div className="flex items-center space-x-6 pt-4 border-t">
                <Search className="h-6 w-6 text-black" />
                <User className="h-6 w-6 text-black" />
                <div className="relative">
                  <Heart className="h-6 w-6 text-black" />
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    1
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