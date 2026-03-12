import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

export default function Empresa() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#406324] to-[#8BC34A]">Ecológico</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una empresa líder en innovación agrícola con sede en Guayaquil, Ecuador. Combinamos tecnología de vanguardia con prácticas ecológicas para transformar el campo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fundada en el corazón agrícola de Ecuador, Ecológico nació de la necesidad de modernizar las prácticas de cultivo sin comprometer el medio ambiente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoy, proveemos soluciones tecnológicas a cientos de productores, ayudándoles a optimizar recursos, aumentar rendimientos y certificar sus procesos bajo estándares internacionales.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Agricultura Tecnológica" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="dark-glow-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D1FF4D]/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20">
              <Target className="w-8 h-8 text-[#D1FF4D]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Misión</h3>
            <p className="text-gray-400">
              Empoderar a los agricultores con herramientas tecnológicas sostenibles que maximicen su productividad y protejan los ecosistemas.
            </p>
          </div>

          <div className="dark-glow-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D1FF4D]/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20">
              <Eye className="w-8 h-8 text-[#D1FF4D]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visión</h3>
            <p className="text-gray-400">
              Ser el referente latinoamericano en agrotecnología ecológica, liderando la transición hacia una agricultura 100% inteligente y regenerativa.
            </p>
          </div>

          <div className="dark-glow-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D1FF4D]/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20">
              <Award className="w-8 h-8 text-[#D1FF4D]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
            <p className="text-gray-400">
              Innovación constante, compromiso ambiental, transparencia, calidad certificada y enfoque en el éxito del productor.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
