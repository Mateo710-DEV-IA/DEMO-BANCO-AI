import React, { useState } from 'react';
import { Menu, X, User, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-red-500 text-white py-2 text-sm">

        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Tu oficina</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-blue-200 transition-colors">
              Atención al Cliente
            </button>
            <button className="hover:text-blue-200 transition-colors">
              Trabaja con nosotros
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-red-500">
                BANCO SANTANDER
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                  Particulares
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                  Empresas
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                  Productos
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                  Obra Social
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                  Quiénes Somos
                </button>
              </div>
            </nav>

            {/* Access buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 text-red-700 border border-red-700 rounded-lg hover:bg-blue-50 transition-colors">
                <User className="w-4 h-4" />
                <span>Acceso Clientes</span>
              </button>
              <button className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                Hazte Cliente
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-blue-700 font-medium">
                Particulares
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 font-medium">
                Empresas
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 font-medium">
                Productos
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 font-medium">
                Obra Social
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-700 font-medium">
                Quiénes Somos
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-500 border border-re-500 rounded-lg hover:bg-blue-50 transition-colors">
                  <User className="w-4 h-4" />
                  <span>Acceso Clientes</span>
                </button>
                <button className="w-full px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  Hazte Cliente
                </button>
              </div>   
             
            </div>
        
          </div>
    )} 
      </header>
   
    </>
  );
};

export default Header;