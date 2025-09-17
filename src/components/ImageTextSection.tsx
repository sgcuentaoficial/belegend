import React from 'react';

const ImageTextSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-black leading-tight">
              DISEÑADO PARA
              <br />
              <span className="text-gray-600">CAMPEONES</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada prenda Be Legend está creada con la precisión de un atleta de élite. 
              Materiales premium que se adaptan a tu cuerpo y potencian tu rendimiento.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm">Ajuste perfecto para máxima movilidad</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm">Tecnología anti-sudor avanzada</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm">Durabilidad probada por atletas</span>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-3 transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wide">
                Ver Colección
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:pl-8">
            <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Be Legend Performance Shorts"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay Badge */}
            <div className="absolute top-4 left-8 lg:left-12 bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm">
              <span className="text-black font-black text-xs uppercase tracking-wider">
                Elite Series
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;