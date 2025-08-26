import React from 'react';
import { Award, Users2, Building2, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-red-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-900"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprometidos con
            <span className="block text-white-400">Canarias</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Somos la entidad financiera de origen canario con mayor implantación en las islas. 
            Nuestro compromiso social y medioambiental nos define.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-white text-red-500 p-4 rounded-xl inline-flex mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">180+</div>
            <div className="text-blue-100">Oficinas</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white text-red-500 p-4 rounded-xl inline-flex mb-4">
              <Users2 className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">500K+</div>
            <div className="text-blue-100">Clientes</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white text-red-500 p-4 rounded-xl inline-flex mb-4">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">75+</div>
            <div className="text-blue-100">Años de experiencia</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white text-red-500 p-4 rounded-xl inline-flex mb-4">
              <Leaf className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-blue-100">Comprometidos</div>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Obra Social</h3>
              <p className="text-blue-100 text-lg mb-6">
                Destinamos parte de nuestros beneficios a proyectos sociales, 
                culturales, educativos y medioambientales que contribuyen al 
                desarrollo sostenible de las Islas Canarias.
              </p>
              <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold transition-colors">
                Conoce nuestros proyectos
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Obra social"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;