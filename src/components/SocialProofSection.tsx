import React from 'react';
import { Star, Quote, Instagram, CheckCircle, Crown, Award, Shield, Users } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alexander Rothschild",
    role: "Olympic Champion",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Be Legend represents the pinnacle of athletic luxury. Every piece is a masterwork that elevates both performance and presence.",
    rating: 5,
    product: "Obsidian Elite Collection",
    verified: true,
    location: "Monaco",
    achievement: "3x Olympic Gold Medalist"
  },
  {
    id: 2,
    name: "Victoria Sterling",
    role: "Elite Performance Coach",
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The craftsmanship is extraordinary. Be Legend understands that true champions demand nothing less than perfection in every detail.",
    rating: 5,
    product: "Diamond Performance Series",
    verified: true,
    location: "Beverly Hills, CA",
    achievement: "Celebrity Trainer to A-List"
  },
  {
    id: 3,
    name: "Marcus Wellington",
    role: "Professional Athlete",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Uncompromising quality meets unparalleled style. Be Legend has redefined what premium athletic wear should be.",
    rating: 5,
    product: "Platinum Training Collection",
    verified: true,
    location: "London, UK",
    achievement: "World Championship Winner"
  }
];

const stats = [
  { number: "100K+", label: "Elite Members", icon: Crown },
  { number: "5.0", label: "Perfect Rating", icon: Star },
  { number: "99.8%", label: "Satisfaction Rate", icon: Award },
  { number: "50+", label: "Countries Served", icon: Shield }
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Luxury Stats Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black px-6 py-3 text-sm font-black uppercase tracking-[0.2em] mb-8 font-serif">
            <Users className="h-4 w-4 mr-2" />
            Elite Community
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 font-serif">
            TRUSTED BY
          </h2>
          <h3 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-8 font-serif">
            CHAMPIONS
          </h3>
          
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto font-light leading-relaxed font-serif italic">
            Join an exclusive community of world-class athletes, celebrities, and discerning individuals 
            who demand nothing but the finest.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-400/30">
                  <stat.icon className="h-12 w-12 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-black text-black mb-2 group-hover:text-amber-600 transition-colors font-serif">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium font-serif">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 hover:bg-gradient-to-br hover:from-white hover:to-amber-50 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-400/30 rounded-2xl relative overflow-hidden">
              {/* Luxury Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-amber-600" />
              </div>
              
              {/* Perfect Rating */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center text-amber-600 text-sm font-bold">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  VERIFIED
                </div>
              </div>
              
              {/* Testimonial Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-light font-serif italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                />
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <h4 className="text-black font-black text-lg font-serif">{testimonial.name}</h4>
                    <Crown className="h-4 w-4 text-amber-600 ml-2" />
                  </div>
                  <p className="text-gray-600 text-sm font-medium font-serif">{testimonial.role}</p>
                  <p className="text-amber-600 text-xs font-bold font-serif">{testimonial.achievement}</p>
                  <p className="text-gray-500 text-xs font-serif">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Product */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-black font-bold text-sm font-serif">
                  Collection: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury Instagram Community */}
        <div className="text-center">
          <h3 className="text-4xl font-black text-black mb-4 font-serif">
            JOIN THE <span className="text-amber-600">ELITE</span>
          </h3>
          <p className="text-gray-700 mb-12 text-lg font-serif italic">Share your legend with #BeLegendElite</p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {[
              "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg?auto=compress&cs=tinysrgb&w=300"
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden group cursor-pointer rounded-xl">
                <img
                  src={image}
                  alt={`Elite community ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-2 right-2 bg-amber-400 text-black rounded-full p-1">
                  <Crown className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-black px-12 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center mx-auto rounded-full font-serif tracking-wide">
            <Instagram className="h-6 w-6 mr-3" />
            FOLLOW @BELEGEND.ELITE
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;