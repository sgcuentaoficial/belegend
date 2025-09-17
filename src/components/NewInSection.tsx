import React from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Arrival 7' Shorts",
    fit: "Slim Fit",
    color: "Black",
    price: 26,
    rating: 4.3,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Crest Oversized Hoodie",
    fit: "Oversized Fit", 
    color: "Black",
    price: 46,
    rating: 4.3,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Essential Oversized Joggers",
    fit: "Oversized Fit",
    color: "Black",
    price: 44,
    rating: 4.4,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Essential Oversized Joggers",
    fit: "Oversized Fit",
    color: "Charcoal Grey Marl",
    price: 44,
    rating: 4.3,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400",
  }
];

const NewInSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <h2 className="text-lg font-bold text-black tracking-wide">NEW IN</h2>
            <button className="text-sm text-gray-600 hover:text-black underline font-medium">
              Ver Todo
            </button>
          </div>
          
          <div className="flex items-center space-x-1">
            <button className="w-8 h-8 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-3">
                <button className="absolute top-3 right-3 z-10 p-1.5 bg-white/90 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-black" />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 ${
                          i < Math.floor(product.rating) ? 'bg-black' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{product.rating}</span>
                </div>

                <h3 className="text-sm font-medium text-black leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600">{product.fit}</p>
                <p className="text-xs text-gray-600">{product.color}</p>
                
                <div className="pt-1">
                  <span className="text-sm font-bold text-black">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewInSection;