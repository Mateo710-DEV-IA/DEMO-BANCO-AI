import React from 'react';
import { CreditCard, Home, PiggyBank, TrendingUp, ArrowRight } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Cuenta Corriente",
      description: "Gestiona tu dinero con total libertad y sin comisiones de mantenimiento.",
      features: ["Sin comisiones", "Tarjeta incluida", "Banca online"],
      color: "bg-blue-50 text-red-500"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Hipoteca Joven",
      description: "Tu primera vivienda con las mejores condiciones del mercado.",
      features: ["Financiación 100%", "Sin comisiones", "Asesoramiento gratuito"],
      color: "bg-green-50 text-red-500"
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Ahorro Programado",
      description: "Haz crecer tus ahorros con nuestros planes de inversión adaptados.",
      features: ["Rentabilidad garantizada", "Flexibilidad", "Sin permanencia"],
      color: "bg-yellow-50 text-red-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Inversión",
      description: "Invierte en fondos de inversión con el asesoramiento de nuestros expertos.",
      features: ["Asesoramiento personalizado", "Diversificación", "Desde 30€"],
      color: "bg-purple-50 text-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-red-900 mb-6">
            Productos diseñados
            <span className="block text-red-500">para ti</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de productos financieros adaptados a cada momento de tu vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 group">
              <div className={`inline-flex p-3 rounded-xl ${product.color} mb-6`}>
                {product.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-red-700 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center text-red-500 font-semibold group-hover:text-red-800 transition-colors">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;