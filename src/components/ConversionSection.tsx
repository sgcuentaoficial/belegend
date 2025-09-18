import React, { useState } from 'react';
import { ArrowRight, Gift, Truck, Shield, RotateCcw, Star, CheckCircle, Crown, Sparkles, Award } from 'lucide-react';

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
      icon: Crown,
      title: "VIP Status",
      description: "Exclusive member privileges",
      color: "text-amber-400"
    },
    {
      icon: Gift,
      title: "Private Access",
      description: "First access to new collections",
      color: "text-purple-400"
    },
    {
      icon: Truck,
      title: "White Glove Service",
      description: "Complimentary worldwide delivery",
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "Concierge Support",
      description: "Personal styling consultation",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Premium Value Proposition */}
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black px-6 py-3 text-sm font-black uppercase tracking-[0.2em] mb-8 font-serif">
              <Crown className="h-4 w-4 mr-2" />
              Elite Membership
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight font-serif">
              BECOME
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                LEGENDARY
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed font-light font-serif italic">
              Join an exclusive circle of discerning individuals who understand that true excellence 
              is not just worn, but lived. Experience luxury redefined.
            </p>

            {/* Premium Benefits Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/20 transition-all duration-300">
                    <benefit.icon className={`h-6 w-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-2 font-serif">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm font-serif">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Luxury Social Proof */}
            <div className="flex items-center space-x-8 mb-12">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full border-3 border-black flex items-center justify-center">
                      <Crown className="h-6 w-6 text-black" />
                    </div>
                  ))}
                </div>
                <span className="ml-4 text-gray-300 font-serif">100,000+ Elite Members</span>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-300 font-serif">Perfect 5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Side - Premium Signup Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-amber-400/30 p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-black mb-4 font-serif">
                <Sparkles className="h-4 w-4 mr-2" />
                EXCLUSIVE INVITATION
              </div>
              <h3 className="text-3xl font-black text-white mb-3 font-serif">
                ELITE ACCESS
              </h3>
              <p className="text-gray-300 font-serif italic">
                Unlock 30% savings + VIP privileges
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-8">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your exclusive email"
                    className="w-full bg-white/10 border-2 border-amber-400/30 text-white placeholder-gray-400 px-6 py-5 rounded-xl focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all duration-300 text-lg font-serif"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-yellow-500 hover:to-amber-600 text-black font-black py-5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center text-lg font-serif tracking-wide"
                >
                  <Crown className="mr-3 h-6 w-6" />
                  <span>CLAIM ELITE STATUS</span>
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 font-serif">Welcome to Elite Status!</h3>
                <p className="text-gray-300 font-serif italic">Your exclusive access code is being prepared.</p>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  <span className="font-serif">Secure</span>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-4 w-4 mr-1" />
                  <span className="font-serif">Cancel Anytime</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  <span className="font-serif">VIP Support</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs text-center mt-4 font-serif italic">
                By joining, you agree to our 
                <a href="/privacy" className="text-amber-400 hover:underline ml-1">Privacy Policy</a> and 
                <a href="/terms" className="text-amber-400 hover:underline ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Premium CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-6 text-lg font-serif italic">
            Already an Elite Member? 
            <a href="/collections" className="text-amber-400 hover:underline ml-2 font-bold">Access Your Collection</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;