import React, { useState } from 'react';
import { Heart, Crown, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: "Elite Performance Tee",
    collection: "Masterpiece Collection",
    price: 189,
    originalPrice: 245,
    rating: 5.0,
    reviews: 342,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "HANDCRAFTED",
    material: "Italian Merino Wool",
    colors: ['Obsidian Black', 'Pearl White', 'Platinum Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    isExclusive: true,
    stockStatus: "Limited Edition"
  },
  {
    id: 2,
    name: "Championship Shorts",
    collection: "Elite Series",
    price: 165,
    originalPrice: null,
    rating: 5.0,
    reviews: 287,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "BESTSELLER",
    material: "Swiss Technical Fabric",
    colors: ['Midnight Black', 'Storm Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    isExclusive: false,
    stockStatus: "In Stock"
  },
  {
    id: 3,
    name: "Luxury Sports Bra",
    collection: "Women's Elite",
    price: 145,
    originalPrice: 185,
    rating: 5.0,
    reviews: 198,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "EXCLUSIVE",
    material: "Premium Compression",
    colors: ['Onyx Black', 'Ivory White'],
    sizes: ['XS', 'S', 'M', 'L'],
    isExclusive: true,
    stockStatus: "Few Remaining"
  },
  {
    id: 4,
    name: "Signature Hoodie",
    collection: "Heritage Line",
    price: 295,
    originalPrice: null,
    rating: 5.0,
    reviews: 156,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "MASTERPIECE",
    material: "Cashmere Blend",
    colors: ['Charcoal Black', 'Stone Grey', 'Pure White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isExclusive: true,
    stockStatus: "Pre-Order"
  }
];

const FeaturedHighlights = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Crown className="h-6 w-6 text-amber-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-wide">
                FEATURED HIGHLIGHTS
              </h2>
            </div>
            <p className="text-gray-600">Curated excellence for the discerning athlete</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="/collections" 
              className="text-gray-900 font-medium hover:text-amber-600 transition-colors tracking-wide"
            >
              View Collection
            </a>
            <div className="flex space-x-2">
              <button className="w-12 h-12 bg-white border border-gray-200 hover:border-amber-600 hover:bg-amber-50 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 shadow-sm">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                {/* Badge */}
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold tracking-wider ${
                  product.badge === 'HANDCRAFTED' ? 'bg-amber-600 text-white' :
                  product.badge === 'BESTSELLER' ? 'bg-gray-900 text-white' :
                  product.badge === 'EXCLUSIVE' ? 'bg-gradient-to-r from-amber-600 to-yellow-500 text-white' :
                  'bg-black text-white'
                }`}>
                  {product.badge}
                </div>

                {/* Wishlist */}
                <button className={`absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                  hoveredProduct === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Stock Status */}
                <div className={`absolute bottom-4 left-4 z-10 px-2 py-1 text-xs font-medium ${
                  product.stockStatus === 'Limited Edition' ? 'bg-red-500 text-white' :
                  product.stockStatus === 'Few Remaining' ? 'bg-orange-500 text-white' :
                  product.stockStatus === 'Pre-Order' ? 'bg-blue-500 text-white' :
                  'bg-green-500 text-white'
                }`}>
                  {product.stockStatus}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick Add Overlay */}
                <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${
                  hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}>
                  <button className="w-full bg-white text-gray-900 py-3 font-bold hover:bg-amber-50 hover:text-amber-600 transition-colors flex items-center justify-center tracking-wide">
                    <Crown className="h-4 w-4 mr-2" />
                    Add to Collection
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-amber-500 mr-1 rounded-sm"></div>
                    ))}
                    <span className="text-gray-500 text-sm ml-2 font-medium">({product.reviews})</span>
                  </div>
                  {product.isExclusive && (
                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 px-2 py-1 text-xs font-bold tracking-wider">
                      EXCLUSIVE
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="mb-4">
                  <h3 className="font-serif font-bold text-gray-900 mb-1 text-lg leading-tight group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium mb-1">{product.collection}</p>
                  <p className="text-gray-400 text-xs">{product.material}</p>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-serif font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through font-medium">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 font-bold">
                      SAVE ${product.originalPrice - product.price}
                    </span>
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

export default FeaturedHighlights;