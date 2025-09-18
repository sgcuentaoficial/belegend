import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye, ArrowRight, Crown, Award, Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Obsidian Elite Tank",
    collection: "Masterpiece Series",
    material: "Italian Merino Blend",
    price: 189,
    originalPrice: 250,
    rating: 5.0,
    reviews: 847,
    image: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "MASTERPIECE",
    discount: 24,
    inStock: true,
    exclusive: true,
    craftsmanship: "Hand-finished"
  },
  {
    id: 2,
    name: "Platinum Performance Short",
    collection: "Elite Athleisure", 
    material: "Swiss Technical Fabric",
    price: 165,
    originalPrice: 220,
    rating: 5.0,
    reviews: 623,
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "EXCLUSIVE",
    discount: 25,
    inStock: true,
    exclusive: true,
    craftsmanship: "Precision Cut"
  },
  {
    id: 3,
    name: "Diamond Sports Bra",
    collection: "Luxury Performance",
    material: "Japanese Compression Tech",
    price: 145,
    originalPrice: 195,
    rating: 5.0,
    reviews: 1156,
    image: "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "AWARD WINNER",
    discount: 26,
    inStock: true,
    exclusive: true,
    craftsmanship: "Seamless Design"
  },
  {
    id: 4,
    name: "Sovereign Hoodie",
    collection: "Royal Collection",
    material: "Cashmere Blend",
    price: 295,
    originalPrice: 395,
    rating: 5.0,
    reviews: 432,
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "LIMITED",
    discount: 25,
    inStock: true,
    exclusive: true,
    craftsmanship: "Artisan Made"
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Luxury Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black px-6 py-3 text-sm font-black uppercase tracking-[0.2em] mb-8 font-serif">
            <Crown className="h-4 w-4 mr-2" />
            Curated Excellence
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight font-serif">
            MASTERPIECE
          </h2>
          <h3 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-8 leading-tight font-serif">
            COLLECTION
          </h3>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 font-light leading-relaxed font-serif italic">
            Where artisanal craftsmanship meets cutting-edge performance. Each piece meticulously designed 
            for the discerning athlete who accepts nothing less than perfection.
          </p>
        </div>

        {/* Premium Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-700 border border-gray-100 hover:border-amber-400/30 overflow-hidden relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Premium Badges */}
                <div className="absolute top-4 left-4 z-20 space-y-2">
                  <div className={`px-4 py-2 text-xs font-black backdrop-blur-sm ${
                    product.badge === 'MASTERPIECE' ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black' :
                    product.badge === 'EXCLUSIVE' ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' :
                    product.badge === 'AWARD WINNER' ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' :
                    'bg-gradient-to-r from-gray-800 to-black text-white'
                  } font-serif tracking-wider`}>
                    {product.badge}
                  </div>
                  {product.exclusive && (
                    <div className="bg-black/80 text-amber-400 px-3 py-1 text-xs font-black backdrop-blur-sm font-serif">
                      EXCLUSIVE
                    </div>
                  )}
                </div>

                {/* Luxury Action Buttons */}
                <div className="absolute top-4 right-4 z-20 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="w-12 h-12 bg-white/90 hover:bg-amber-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="w-12 h-12 bg-white/90 hover:bg-amber-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>

                {/* Craftsmanship Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-white/90 text-black px-3 py-1 text-xs font-bold backdrop-blur-sm font-serif">
                    {product.craftsmanship}
                  </div>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter group-hover:brightness-110"
                />
                
                {/* Luxury Quick Buy Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-8 transition-all duration-500 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-yellow-500 hover:to-amber-600 text-black font-black px-8 py-4 flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="tracking-wide font-serif">ADD TO COLLECTION</span>
                  </button>
                </div>
              </div>

              <div className="p-8">
                {/* Perfect Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2 font-medium">({product.reviews})</span>
                  </div>
                  <div className="flex items-center text-amber-600 text-sm font-bold">
                    <Sparkles className="h-4 w-4 mr-1" />
                    {product.rating}
                  </div>
                </div>

                {/* Product Info */}
                <div className="mb-4">
                  <p className="text-gray-500 text-sm font-medium mb-1 font-serif">{product.collection}</p>
                  <h3 className="text-xl font-black text-black mb-2 group-hover:text-amber-600 transition-colors font-serif">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium font-serif italic">{product.material}</p>
                </div>

                {/* Luxury Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-black text-black font-serif">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through font-serif">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-green-600 text-sm font-bold font-serif">
                    Save ${product.originalPrice - product.price}
                  </div>
                </div>

                {/* Premium Add to Cart */}
                <button className="w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white py-4 font-black transition-all duration-300 hover:shadow-xl font-serif tracking-wide">
                  ACQUIRE MASTERPIECE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury View All CTA */}
        <div className="text-center">
          <button className="group bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-yellow-500 hover:to-amber-600 text-black font-black px-16 py-6 text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 flex items-center mx-auto font-serif tracking-wide">
            <span>EXPLORE FULL COLLECTION</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;