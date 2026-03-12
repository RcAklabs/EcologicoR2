import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Zap, Leaf, ShieldCheck, Recycle, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const useCases = [
    {
      title: 'Aumentar la productividad',
      description: 'Optimiza tus cultivos con tecnología de precisión y análisis de datos en tiempo real.',
      icon: <TrendingUp className="w-6 h-6 text-[#D1FF4D]" />,
    },
    {
      title: 'Alta Eficiencia',
      description: 'Reduce costos operativos y maximiza el rendimiento de cada hectárea sembrada.',
      icon: <Zap className="w-6 h-6 text-[#D1FF4D]" />,
    },
    {
      title: '100% Orgánico',
      description: 'Soluciones libres de químicos dañinos, protegiendo la salud del suelo y del consumidor.',
      icon: <Leaf className="w-6 h-6 text-[#D1FF4D]" />,
    },
    {
      title: 'Calidad Certificada',
      description: 'Estándares internacionales que garantizan la excelencia en cada etapa de producción.',
      icon: <ShieldCheck className="w-6 h-6 text-[#D1FF4D]" />,
    },
    {
      title: '100% Ecológico',
      description: 'Compromiso total con el medio ambiente, promoviendo la biodiversidad y sostenibilidad.',
      icon: <Recycle className="w-6 h-6 text-[#D1FF4D]" />,
    },
    {
      title: 'Innovación Tecnológica',
      description: 'Integración de IA y sensores IoT para un monitoreo agrícola inteligente y predictivo.',
      icon: <Cpu className="w-6 h-6 text-[#D1FF4D]" />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#406324]/20 to-[#D1FF4D]/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[#D1FF4D]/10 border border-[#D1FF4D]/30 text-[#406324] font-semibold text-sm mb-6 shadow-[0_0_10px_rgba(209,255,77,0.2)]">
                El Futuro de la Agricultura en Guayaquil
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Revolucionando el Campo con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#406324] to-[#8BC34A]">Tecnología Ecológica</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Soluciones agrícolas innovadoras que maximizan tu producción mientras protegen nuestro planeta. Inteligencia, eficiencia y sostenibilidad en cada semilla.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                to="/productos" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#F89C1B] rounded-xl btn-glow-orange"
              >
                Explorar Productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contactos" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              >
                Contactar Asesor
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-gray-50 relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Beneficios de nuestra tecnología
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre cómo Ecológico transforma tu producción agrícola con soluciones de vanguardia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="dark-glow-card rounded-2xl p-8 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#D1FF4D]/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#111827]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent to-[#406324]/20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Lleva tu producción al <span className="text-[#D1FF4D]">siguiente nivel</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Únete a los cientos de agricultores en Guayaquil que ya están maximizando sus cosechas con Ecológico.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Link 
              to="/contactos" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#F89C1B] rounded-xl btn-glow-orange mb-4"
            >
              Cotizar Ahora
            </Link>
            <span className="text-sm text-gray-400 font-medium">
              * No se requiere tarjeta de crédito
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
