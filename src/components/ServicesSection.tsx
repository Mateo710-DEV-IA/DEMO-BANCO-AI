import React from 'react';
import { Smartphone, Globe, Clock, Headphones } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Servicios que
              <span className="block text-red-500">te facilitan la vida</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Smartphone className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Banca Móvil
                  </h3>
                  <p className="text-gray-600">
                    Gestiona todas tus operaciones desde tu móvil las 24 horas del día.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-50 p-3 rounded-xl">
                  <Globe className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Banca Online
                  </h3>
                  <p className="text-gray-600">
                    Accede a tu banca desde cualquier ordenador con total seguridad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-50 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Horario Ampliado
                  </h3>
                  <p className="text-gray-600">
                    Nuestras oficinas abren en horario ampliado para tu comodidad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <Headphones className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Atención 24/7
                  </h3>
                  <p className="text-gray-600">
                    Nuestro equipo de atención al cliente está disponible siempre que lo necesites.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Mujer usando banca móvil"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-red-700">24/7</div>
              <div className="text-sm font-semibold text-gray-600">Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;