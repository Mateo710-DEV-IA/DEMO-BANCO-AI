import React from 'react';
import { ArrowRight, Shield, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-red-500 via-red-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Tu banco de
                confianza
                en toda Europa.
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Más de 75 años junto a las familias y empresas canarias. 
                Descubre todo lo que podemos hacer por ti.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 px-8 py-4 bg-white text-red-500 font-semibold rounded-lg hover:bg-yellow-300 transition-colors">
                <span>Hazte Cliente</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                <span>Nuestros Productos</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-sm">Seguridad</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-sm">Cercanía</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-sm">Compromiso</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Familia feliz"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute bg-white text-red-500 p-4 rounded-lg shadow-lg
                            -bottom-4 -left-4
                            sm:p-6 sm:rounded-xl sm:-bottom-6 sm:-left-6">
              <div className="text-lg sm:text-2xl font-bold">75+</div>
              <div className="text-xs sm:text-sm font-semibold">Años contigo</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;