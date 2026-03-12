import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flower2, Sprout, Apple } from 'lucide-react';

export default function Productos() {
  const categories = [
    {
      title: 'Producción de Flores',
      description: 'Tecnología aplicada al cultivo floral para exportación y mercado local.',
      icon: <Flower2 className="w-8 h-8 text-[#D1FF4D]" />,
      link: '/productos/flores',
      image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Producción de Raíces',
      description: 'Sistemas de optimización para cultivos subterráneos y tubérculos.',
      icon: <Sprout className="w-8 h-8 text-[#D1FF4D]" />,
      link: '/productos/raices',
      image: 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hojas, Frutos y Semillas',
      description: 'Monitoreo avanzado para hortalizas, frutales y granos de alto rendimiento.',
      icon: <Apple className="w-8 h-8 text-[#D1FF4D]" />,
      link: '/productos/hojas-frutos-semillas',
      image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Nuestras Líneas de <span className="text-eco-green">Producción</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre cómo aplicamos la última tecnología en diferentes tipos de cultivos para maximizar tu rentabilidad de forma ecológica.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <Link 
                to={category.link}
                className="inline-flex items-center text-eco-green font-semibold hover:text-[#8BC34A] transition-colors"
              >
                Ver detalles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
