import React from 'react';
import { Star, Quote, Instagram, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marcus Johnson",
    role: "Professional Athlete",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Be Legend gear has completely transformed my training. The quality is unmatched and the performance benefits are real.",
    rating: 5,
    product: "Elite Training Set",
    verified: true,
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Fitness Influencer",
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "I've tried every brand out there. Be Legend is the only one that delivers on both style and performance. My followers love it too!",
    rating: 5,
    product: "Legend Sports Bra",
    verified: true,
    location: "New York, NY"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "CrossFit Champion",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Durability, comfort, and style. Be Legend understands what serious athletes need. This is my go-to brand.",
    rating: 5,
    product: "Pro Training Shorts",
    verified: true,
    location: "Miami, FL"
  }
];

const stats = [
  { number: "50,000+", label: "Happy Customers", icon: "👥" },
  { number: "4.9/5", label: "Average Rating", icon: "⭐" },
  { number: "98%", label: "Would Recommend", icon: "💯" },
  { number: "15+", label: "Countries Served", icon: "🌍" }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            TRUSTED BY <span className="text-gray-600">CHAMPIONS</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Join thousands of athletes worldwide who trust Be Legend for their performance needs
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-black mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-200">
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-black mb-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="text-black font-bold">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
              
              {/* Product */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-black font-medium text-sm">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Preview */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-black mb-2">
            JOIN THE <span className="text-gray-600">COMMUNITY</span>
          </h3>
          <p className="text-gray-700 mb-8">Share your legend with #BeLegend</p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {[
              "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg?auto=compress&cs=tinysrgb&w=300"
            ].map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden group cursor-pointer">
                <img
                  src={image}
                  alt={`Community post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black px-8 py-3 transition-all duration-300 hover:scale-105 flex items-center mx-auto">
            <Instagram className="h-5 w-5 mr-2" />
            FOLLOW @BELEGEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;