import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-red-500">
              Banco Santaner
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu entidad financiera de confianza en Canarias. 
              Más de 75 años acompañando a las familias y empresas canarias.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Productos</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Cuentas Corrientes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuentas de Ahorro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarjetas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hipotecas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Préstamos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inversión</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planes de Pensiones</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Banca Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banca Móvil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bizum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Traspasos y Transferencias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Domiciliaciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cajeros Automáticos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cambio de Moneda</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium">Atención al Cliente</div>
                  <div className="text-gray-300">+1 234 567 890</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300">info@bancosantander.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium">Sede Central</div>
                  <div className="text-gray-300">
                    C/ Profesor Agustín Millares Carlo, 18<br />
                    35003 Las Palmas de Gran Canaria
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enlaces legales */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Condiciones Generales</a>
              <a href="#" className="hover:text-white transition-colors">Defensor del Cliente</a>
              <a href="#" className="hover:text-white transition-colors">Tarifas</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 Cajasiete. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;