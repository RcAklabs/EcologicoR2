import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contactos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Ponte en <span className="text-eco-green">Contacto</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Listo para transformar tu producción agrícola? Nuestro equipo de expertos en Guayaquil está listo para asesorarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="dark-glow-card p-8 rounded-2xl flex items-start">
              <div className="w-12 h-12 rounded-xl bg-[#D1FF4D]/10 flex items-center justify-center mr-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20 shrink-0">
                <MapPin className="w-6 h-6 text-[#D1FF4D]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ubicación Principal</h3>
                <p className="text-gray-400">Av. Francisco de Orellana, Edificio World Trade Center, Guayaquil, Ecuador.</p>
              </div>
            </div>

            <div className="dark-glow-card p-8 rounded-2xl flex items-start">
              <div className="w-12 h-12 rounded-xl bg-[#D1FF4D]/10 flex items-center justify-center mr-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20 shrink-0">
                <Phone className="w-6 h-6 text-[#D1FF4D]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Llámanos</h3>
                <p className="text-gray-400">+593 99 999 9999</p>
                <p className="text-gray-400">+593 4 222 2222</p>
              </div>
            </div>

            <div className="dark-glow-card p-8 rounded-2xl flex items-start">
              <div className="w-12 h-12 rounded-xl bg-[#D1FF4D]/10 flex items-center justify-center mr-6 shadow-[0_0_15px_rgba(209,255,77,0.15)] border border-[#D1FF4D]/20 shrink-0">
                <Mail className="w-6 h-6 text-[#D1FF4D]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Correo Electrónico</h3>
                <p className="text-gray-400">info@ecologico.com.ec</p>
                <p className="text-gray-400">ventas@ecologico.com.ec</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-eco-green focus:border-transparent outline-none transition-all"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-eco-green focus:border-transparent outline-none transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Área de Interés</label>
                <select 
                  id="interest" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-eco-green focus:border-transparent outline-none transition-all bg-white"
                >
                  <option>Producción de Flores</option>
                  <option>Producción de Raíces</option>
                  <option>Hojas, Frutos y Semillas</option>
                  <option>Consultoría General</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-eco-green focus:border-transparent outline-none transition-all resize-none"
                  placeholder="¿Cómo podemos ayudarte?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#F89C1B] rounded-xl btn-glow-orange"
              >
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
