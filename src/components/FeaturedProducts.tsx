import React from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Essential Training Tee",
    fit: "Slim Fit",
    color: "Black",
    price: 35,
    rating: 4.3,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Performance Shorts",
    fit: "Regular Fit", 
    color: "Navy",
    price: 55,
    rating: 4.4,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Legend Sports Bra",
    fit: "Compression Fit",
    color: "Black",
    price: 45,
    rating: 4.3,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Training Hoodie",
    fit: "Oversized Fit",
    color: "Grey",
    price: 85,
    rating: 4.3,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400",
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <h2 className="text-2xl font-bold text-black">NEW IN</h2>
            <button className="text-sm text-gray-600 hover:text-black underline">
              Ver Todo
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 border border-gray-300 hover:border-black transition-colors">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border border-gray-300 hover:border-black transition-colors">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-3">
                <button className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-4 w-4 text-black" />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-medium text-black group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600">{product.fit}</p>
                <p className="text-xs text-gray-600">{product.color}</p>
                
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-medium text-black">${product.price}</span>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 ${
                            i < Math.floor(product.rating) ? 'bg-black' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;