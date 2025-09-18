import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, RotateCcw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Trust Badges */}
      <div className="border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck className="h-8 w-8 text-gray-600 mb-2" />
              <h4 className="font-bold text-black mb-1">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Orders over €50</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="h-8 w-8 text-gray-600 mb-2" />
              <h4 className="font-bold text-black mb-1">Easy Returns</h4>
              <p className="text-gray-500 text-sm">30-day policy</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-gray-600 mb-2" />
              <h4 className="font-bold text-black mb-1">Secure Payment</h4>
              <p className="text-gray-500 text-sm">SSL encrypted</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="h-8 w-8 text-gray-600 mb-2" />
              <h4 className="font-bold text-black mb-1">Multiple Payment</h4>
              <p className="text-gray-500 text-sm">Options available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-black text-black mb-4">BE LEGEND</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Premium fitness apparel designed for performance and style. Join the movement.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-black font-bold mb-6 text-lg">Shop</h4>
              <ul className="space-y-3">
                <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors">Men's Collection</a></li>
                <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors">Women's Collection</a></li>
                <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors">Accessories</a></li>
                <li><a href="/collections" className="text-gray-600 hover:text-black transition-colors">New Arrivals</a></li>
                <li><a href="/collections" className="text-red-600 hover:text-red-700 transition-colors font-medium">Sale Items</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-black font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Shipping Info</a></li>
                <li><a href="/returns" className="text-gray-600 hover:text-black transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Track Your Order</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-black font-bold mb-6 text-lg">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-gray-600">support@belegend.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-600 mr-3" />
                  <span className="text-gray-600">1-800-BE-LEGEND</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-600 mr-3 mt-1" />
                  <span className="text-gray-600">
                    123 Fitness Street<br />
                    Athletic City, AC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-black font-bold text-lg mb-2">Stay Updated</h4>
              <p className="text-gray-600">Get the latest news and exclusive offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 px-4 py-3 flex-1 md:w-64 focus:outline-none focus:border-black transition-colors"
              />
              <button className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © 2024 Be Legend. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;