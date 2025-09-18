import React, { useState, useEffect } from 'react';
import { Clock, Users, ShoppingCart, Zap } from 'lucide-react';

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 23
  });

  const [liveViewers, setLiveViewers] = useState(247);

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
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(activityTimer);
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-500 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6">
              FLASH SALE
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              UP TO 50% OFF
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Limited time offer on selected items
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-12">
              <div className="text-center">
                <div className="bg-black text-white p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-2xl md:text-4xl font-black">{timeLeft.hours.toString().padStart(2, '0')}</div>
                </div>
                <div className="text-sm text-gray-600 mt-2 uppercase tracking-wider">HOURS</div>
              </div>
              <div className="text-2xl font-black text-black">:</div>
              <div className="text-center">
                <div className="bg-black text-white p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-2xl md:text-4xl font-black">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                </div>
                <div className="text-sm text-gray-600 mt-2 uppercase tracking-wider">MINUTES</div>
              </div>
              <div className="text-2xl font-black text-black">:</div>
              <div className="text-center">
                <div className="bg-black text-white p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-2xl md:text-4xl font-black">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                </div>
                <div className="text-sm text-gray-600 mt-2 uppercase tracking-wider">SECONDS</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-2xl font-black text-black">{liveViewers}</span>
                </div>
                <p className="text-gray-600 text-sm">People viewing now</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <ShoppingCart className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-2xl font-black text-black">89</span>
                </div>
                <p className="text-gray-600 text-sm">Sold in last 24h</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-2xl font-black text-black">LIMITED</span>
                </div>
                <p className="text-gray-600 text-sm">Stock remaining</p>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-black text-white px-12 py-4 font-bold text-lg hover:bg-gray-800 transition-colors inline-flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              SHOP SALE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;