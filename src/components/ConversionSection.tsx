import React, { useState } from 'react';
import { ArrowRight, Gift, Truck, Shield, RotateCcw, Star, CheckCircle } from 'lucide-react';

const ConversionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive 20% Off",
      description: "First-time customer discount"
    },
    {
      icon: Truck,
      title: "Free Express Shipping",
      description: "On orders over $75"
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Premium quality guarantee"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "No questions asked"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Value Proposition */}
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6">
              <Star className="h-4 w-4 mr-2" />
              VIP Access
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              UNLOCK YOUR
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LEGEND STATUS
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our exclusive community and get instant access to premium gear, 
              insider deals, and performance tips from world-class athletes.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <benefit.icon className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-3 text-gray-300">50,000+ members</span>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-300">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2">
                GET INSTANT ACCESS
              </h3>
              <p className="text-gray-300">
                Join now and receive 20% off your first order
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
                    className="w-full bg-white/20 border border-white/30 text-white placeholder-gray-300 px-4 py-4 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-white/30 transition-all"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <span>CLAIM MY 20% DISCOUNT</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Welcome to the Legend Community!</h3>
                <p className="text-gray-300">Check your email for your exclusive discount code.</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-gray-400 text-xs text-center">
                By signing up, you agree to receive marketing emails. Unsubscribe at any time.
                <br />
                <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> • 
                <a href="/terms" className="text-blue-400 hover:underline ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Already a member? 
            <a href="/collections" className="text-blue-400 hover:underline ml-1">Shop the collection</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;