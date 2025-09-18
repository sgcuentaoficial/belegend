import React, { useState, useEffect } from 'react';
import { Clock, Flame, Users, ShoppingCart, Crown, Zap, Star } from 'lucide-react';

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 47,
    seconds: 23
  });

  const [liveViewers, setLiveViewers] = useState(1247);
  const [recentPurchases, setRecentPurchases] = useState(89);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Simulate live activity
    const activityTimer = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 20) - 10);
      if (Math.random() > 0.7) {
        setRecentPurchases(prev => prev + 1);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(activityTimer);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Premium Flash Sale Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black px-8 py-4 font-black text-lg uppercase tracking-[0.2em] mb-8 animate-pulse shadow-2xl shadow-amber-500/25 font-serif">
            <Crown className="h-6 w-6 mr-3" />
            PRIVATE SALE - MEMBERS ONLY
            <Crown className="h-6 w-6 ml-3" />
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 font-serif">
            EXCLUSIVE
          </h2>
          <h3 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent mb-8 font-serif">
            ACCESS
          </h3>
          
          <p className="text-2xl mb-12 opacity-90 font-light max-w-3xl mx-auto leading-relaxed font-serif italic">
            Unprecedented savings on our most coveted pieces. This exclusive opportunity expires soon.
          </p>

          {/* Luxury Countdown Timer */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400/20 to-yellow-500/20 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-8 min-w-[120px] shadow-2xl">
                <div className="text-5xl font-black text-amber-400 mb-2 font-serif">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80 uppercase tracking-wider font-serif">HOURS</div>
              </div>
            </div>
            <div className="text-4xl font-black text-amber-400">:</div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400/20 to-yellow-500/20 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-8 min-w-[120px] shadow-2xl">
                <div className="text-5xl font-black text-amber-400 mb-2 font-serif">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80 uppercase tracking-wider font-serif">MINUTES</div>
              </div>
            </div>
            <div className="text-4xl font-black text-amber-400">:</div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400/20 to-yellow-500/20 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-8 min-w-[120px] shadow-2xl">
                <div className="text-5xl font-black text-amber-400 mb-2 font-serif">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80 uppercase tracking-wider font-serif">SECONDS</div>
              </div>
            </div>
          </div>

          {/* Premium Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-amber-400 mr-2" />
                <span className="text-3xl font-black text-amber-400 font-serif">{liveViewers}</span>
              </div>
              <p className="text-gray-300 font-medium font-serif">VIP Members Viewing</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <ShoppingCart className="h-6 w-6 text-amber-400 mr-2" />
                <span className="text-3xl font-black text-amber-400 font-serif">{recentPurchases}</span>
              </div>
              <p className="text-gray-300 font-medium font-serif">Acquired Today</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-amber-400 mr-2" />
                <span className="text-3xl font-black text-amber-400 font-serif">LIMITED</span>
              </div>
              <p className="text-gray-300 font-medium font-serif">Pieces Remaining</p>
            </div>
          </div>

          {/* Luxury CTA */}
          <div className="space-y-6">
            <button className="group bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-yellow-500 hover:to-amber-600 text-black font-black px-16 py-6 text-2xl transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-amber-500/50 relative overflow-hidden font-serif tracking-wide">
              <span className="relative z-10 flex items-center justify-center">
                <Zap className="mr-3 h-6 w-6" />
                CLAIM EXCLUSIVE ACCESS
                <Zap className="ml-3 h-6 w-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-gray-400 text-sm font-serif italic">
              *Exclusive pricing available to VIP members only. Limited time offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;