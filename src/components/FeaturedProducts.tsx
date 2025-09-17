import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Elite Performance Tank",
    fit: "Athletic Fit",
    color: "Midnight Black",
    price: 89,
    originalPrice: 120,
    rating: 4.9,
    reviews: 1247,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "BESTSELLER",
    discount: 26,
    inStock: true,
    fastShipping: true
  },
  {
    id: 2,
    name: "Pro Training Shorts",
    fit: "Compression Fit", 
    color: "Storm Grey",
    price: 75,
    originalPrice: 95,
    rating: 4.8,
    reviews: 892,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "LIMITED",
    discount: 21,
    inStock: true,
    fastShipping: true
  },
  {
    id: 3,
    name: "Legend Sports Bra",
    fit: "High Support",
    color: "Pure White",
    price: 65,
    originalPrice: 85,
    rating: 4.9,
    reviews: 2156,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "TOP RATED",
    discount: 24,
    inStock: true,
    fastShipping: true
  },
  {
    id: 4,
    name: "Champion Hoodie",
    fit: "Relaxed Fit",
    color: "Carbon Black",
    price: 125,
    originalPrice: 160,
    rating: 4.8,
    reviews: 743,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "NEW",
    discount: 22,
    inStock: true,
    fastShipping: false
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4">
            Featured Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            PERFORMANCE <span className="text-gray-600">ESSENTIALS</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Engineered for athletes who demand excellence. Premium materials, cutting-edge design.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-black overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 space-y-2">
                  <div className={`px-3 py-1 text-xs font-black ${
                    product.badge === 'BESTSELLER' ? 'bg-red-600 text-white' :
                    product.badge === 'LIMITED' ? 'bg-orange-600 text-white' :
                    product.badge === 'TOP RATED' ? 'bg-green-600 text-white' :
                    'bg-blue-600 text-white'
                  }`}>
                    {product.badge}
                  </div>
                  {product.discount && (
                    <div className="bg-black text-white px-3 py-1 text-xs font-black">
                      -{product.discount}%
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 z-20 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="w-10 h-10 bg-white hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                {/* Stock & Shipping Indicators */}
                <div className="absolute bottom-4 left-4 z-20 space-y-1">
                  {product.inStock && (
                    <div className="bg-green-600 text-white px-2 py-1 text-xs font-bold">
                      IN STOCK
                    </div>
                  )}
                  {product.fastShipping && (
                    <div className="bg-blue-600 text-white px-2 py-1 text-xs font-bold">
                      FAST SHIPPING
                    </div>
                  )}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Quick Buy Overlay */}
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-white hover:bg-gray-100 text-black font-black px-6 py-3 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
                    <ShoppingCart className="h-5 w-5" />
                    <span>QUICK ADD</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                  </div>
                  <div className="text-green-600 text-sm font-bold">
                    {product.rating}
                  </div>
                </div>

                {/* Product Info */}
                <h3 className="text-lg font-black text-black mb-2 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{product.fit}</p>
                <p className="text-gray-600 text-sm mb-4">{product.color}</p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-black text-black">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-green-600 text-sm font-bold">
                    Save ${product.originalPrice - product.price}
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-black hover:bg-gray-800 text-white py-3 font-bold transition-all duration-300 hover:shadow-lg">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="group bg-black hover:bg-gray-800 text-white font-black px-12 py-4 text-lg transition-all duration-300 hover:scale-105 flex items-center mx-auto">
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;