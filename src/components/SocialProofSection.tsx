import React from 'react';
import { Star, Quote, Instagram, CheckCircle, Users, Award, Shield } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Influencer",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "Be Legend's quality is unmatched. The fit and comfort are perfect for my training sessions.",
    rating: 5,
    product: "Essential Training Set",
    verified: true,
    location: "London, UK"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Personal Trainer",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "I recommend Be Legend to all my clients. Great quality at an affordable price point.",
    rating: 5,
    product: "Performance Shorts",
    verified: true,
    location: "New York, USA"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Yoga Instructor",
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The sports bras are incredibly supportive and comfortable. Perfect for all my classes.",
    rating: 5,
    product: "Sports Bra Collection",
    verified: true,
    location: "Sydney, AU"
  }
];

const stats = [
  { number: "50K+", label: "Happy Customers", icon: Users },
  { number: "4.8", label: "Average Rating", icon: Star },
  { number: "98%", label: "Satisfaction Rate", icon: Award },
  { number: "30", label: "Day Returns", icon: Shield }
];

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
            TRUSTED BY ATHLETES
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Join thousands of satisfied customers worldwide
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 p-6 mb-4">
                  <stat.icon className="h-8 w-8 text-black mx-auto mb-3" />
                  <div className="text-3xl font-black text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="h-8 w-8 text-black" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-black fill-current" />
                  ))}
                </div>
                <div className="flex items-center text-green-600 text-sm font-bold">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  VERIFIED
                </div>
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-black font-bold">{testimonial.name}</h4>
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

        {/* Instagram Section */}
        <div className="text-center">
          <h3 className="text-2xl font-black text-black mb-4">
            JOIN THE COMMUNITY
          </h3>
          <p className="text-gray-600 mb-8">Share your workouts with #BeLegend</p>
          
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
                  alt={`Community ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-3 hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center mx-auto">
            <Instagram className="h-5 w-5 mr-2" />
            FOLLOW @BELEGEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;