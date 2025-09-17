import React from 'react';

const ImageTextSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight">
              FORJADO PARA
              <br />
              <span className="text-gray-600">LA GRANDEZA</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Cada fibra, cada costura, cada detalle está diseñado para acompañarte 
              en tu camino hacia la excelencia. No es solo ropa deportiva, es tu 
              armadura para conquistar cada desafío.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-gray-700 font-medium">Tecnología de secado rápido</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-gray-700 font-medium">Resistencia superior en cada entrenamiento</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black"></div>
                <span className="text-gray-700 font-medium">Diseño ergonómico para máximo rendimiento</span>
              </div>
            </div>
            
            <div className="pt-6">
              <button className="bg-black hover:bg-gray-800 text-white font-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                DESCUBRE LA COLECCIÓN
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/FrrU9cSI (1).jpeg"
                alt="Be Legend Performance Wear"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
              <span className="text-black font-black text-sm uppercase tracking-wide">
                Premium Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;