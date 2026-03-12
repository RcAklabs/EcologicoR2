import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonios() {
  const testimonios = [
    {
      name: 'Carlos Mendoza',
      role: 'Productor de Flores, Guayaquil',
      text: 'Desde que implementamos los sensores de Ecológico, nuestra producción de rosas aumentó un 30% y redujimos el uso de agua a la mitad. La tecnología es increíble.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Ana Lucía Torres',
      role: 'Agricultora Orgánica',
      text: 'Los drones para monitoreo de cultivos nos han ahorrado semanas de trabajo manual. Ahora podemos detectar plagas antes de que se conviertan en un problema grave.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Roberto Velez',
      role: 'Gerente de Exportaciones',
      text: 'La calidad certificada que logramos con Ecológico nos abrió las puertas a mercados europeos. Sus soluciones son una inversión que se paga sola en la primera cosecha.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
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
          Historias de <span className="text-eco-green">Éxito</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre cómo nuestros clientes en Guayaquil y todo Ecuador están transformando su producción agrícola con Ecológico.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonios.map((testimonio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="dark-glow-card p-8 rounded-2xl relative"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D1FF4D]/20" />
            <div className="flex items-center mb-6">
              <img 
                src={testimonio.image} 
                alt={testimonio.name} 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D1FF4D] shadow-[0_0_10px_rgba(209,255,77,0.3)]"
                referrerPolicy="no-referrer"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-white">{testimonio.name}</h3>
                <p className="text-sm text-eco-yellow">{testimonio.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic leading-relaxed">
              "{testimonio.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
