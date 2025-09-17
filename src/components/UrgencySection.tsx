import React, { useState, useEffect } from 'react';
import { Clock, Flame, Users, ShoppingCart } from 'lucide-react';

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [liveViewers, setLiveViewers] = useState(847);

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

    // Simulate live viewers fluctuation
    const viewerTimer = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(viewerTimer);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          {/* Flash Sale Badge */}
          <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 font-black text-sm uppercase tracking-wider mb-4 animate-pulse">
            <Flame className="h-4 w-4 mr-2" />
            FLASH SALE - LIMITED TIME
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            UP TO 50% OFF
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Premium Athletic Wear - Don't Miss Out!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-black">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">HOURS</div>
              </div>
            </div>
            <div className="text-2xl font-black">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-black">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">MINS</div>
              </div>
            </div>
            <div className="text-2xl font-black">:</div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-black">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">SECS</div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-sm">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span className="font-bold">{liveViewers}</span> people viewing now
            </div>
            <div className="flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span className="font-bold">234</span> sold in last 24h
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span className="font-bold">Limited</span> stock remaining
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-white text-red-600 hover:bg-gray-100 font-black px-12 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
            SHOP FLASH SALE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;