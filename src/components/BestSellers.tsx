import React, { useState } from 'react';
import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Essential Training Tee",
    category: "Men's Tops",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.9,
    reviews: 1247,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "#1 BESTSELLER",
    colors: ['Black', 'White', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: false,
    onSale: true
  },
  {
    id: 2,
    name: "Performance Shorts",
    category: "Men's Bottoms",
    price: 32.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 892,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "TOP RATED",
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: false,
    onSale: false
  },
  {
    id: 3,
    name: "Legend Sports Bra",
    category: "Women's Tops",
    price: 28.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 756,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "CUSTOMER FAVORITE",
    colors: ['Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: false,
    onSale: true
  },
  {
    id: 4,
    name: "Training Hoodie",
    category: "Men's Outerwear",
    price: 49.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 634,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "MOST POPULAR",
    colors: ['Black', 'Grey', 'White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isNew: false,
    onSale: false
  }
];

const BestSellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
              BEST SELLERS
            </h2>
            <p className="text-gray-600">Our most loved products by athletes worldwide</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="/collections" className="text-black font-medium hover:underline">
              View All
            </a>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white hover:shadow-lg transition-all duration-300 relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-3 left-3 z-10 px-3 py-1 text-xs font-bold ${
                    product.badge === '#1 BESTSELLER' ? 'bg-black text-white' :
                    product.badge === 'TOP RATED' ? 'bg-gray-800 text-white' :
                    product.badge === 'CUSTOMER FAVORITE' ? 'bg-black text-white' :
                    'bg-gray-800 text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}

                {/* Sale Badge */}
                {product.onSale && (
                  <div className="absolute top-3 right-3 z-10 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                    SALE
                  </div>
                )}

                {/* Wishlist */}
                <button className={`absolute top-12 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Quick Add */}
                <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  <button className="w-full bg-black text-white py-3 font-bold hover:bg-gray-800 transition-colors flex items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 mr-1 ${i < Math.floor(product.rating) ? 'bg-black' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                </div>

                {/* Product Info */}
                <h3 className="font-bold text-black mb-1 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <p className="text-gray-400 text-xs mb-3">Black</p>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-black">€{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">€{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;