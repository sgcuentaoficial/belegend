import React, { useState } from 'react';
import { ArrowRight, Gift, Truck, Shield, RotateCcw, Star, CheckCircle, Mail } from 'lucide-react';

const ConversionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmail('');
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: "10% Off First Order",
      description: "Exclusive discount for new subscribers"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over €50"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Premium materials & construction"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Value Proposition */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              JOIN THE
              <br />
              <span className="text-gray-600">LEGEND FAMILY</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get exclusive access to new releases, special offers, and fitness tips 
              from our community of athletes.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-white p-2 shadow-sm">
                    <benefit.icon className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-sm mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-xs">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-3 text-gray-600 text-sm">50,000+ subscribers</span>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-black fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">4.8/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="bg-white p-8 shadow-sm">
            <div className="text-center mb-8">
              <div className="inline-block bg-black text-white px-4 py-2 text-sm font-bold mb-4">
                EXCLUSIVE OFFER
              </div>
              <h3 className="text-2xl font-black text-black mb-2">
                GET 10% OFF
              </h3>
              <p className="text-gray-600">
                Subscribe to our newsletter and save on your first order
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 px-4 py-4 focus:outline-none focus:border-black transition-colors text-lg"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white font-bold py-4 hover:bg-gray-800 transition-colors flex items-center justify-center text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span>GET MY 10% DISCOUNT</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-black text-black mb-2">Welcome to the family!</h3>
                <p className="text-gray-600">Check your email for your discount code.</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <Shield className="h-3 w-3 mr-1" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-3 w-3 mr-1" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mt-2">
                By subscribing, you agree to our 
                <a href="/privacy" className="text-black hover:underline ml-1">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;