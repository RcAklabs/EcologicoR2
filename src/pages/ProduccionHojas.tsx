import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lechuga', produccion: 6000, eficiencia: 4400 },
  { name: 'Espinaca', produccion: 4500, eficiencia: 3398 },
  { name: 'Tomate', produccion: 9000, eficiencia: 7800 },
  { name: 'Pimiento', produccion: 5780, eficiencia: 4908 },
  { name: 'Maíz', produccion: 11890, eficiencia: 8800 },
];

export default function ProduccionHojas() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Producción de <span className="text-eco-green">Hojas, Frutos y Semillas</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Tecnología de punta para el cultivo de hortalizas, frutos y granos. Aseguramos un crecimiento vigoroso, mayor tamaño de frutos y semillas de alta calidad genética mediante monitoreo constante.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rendimiento por Cultivo (kg/ha)</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(209, 255, 77, 0.1)' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                />
                <Legend iconType="circle" />
                <Bar dataKey="produccion" name="Producción (kg)" fill="#406324" radius={[4, 4, 0, 0]} />
                <Bar dataKey="eficiencia" name="Eficiencia (%)" fill="#D1FF4D" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="dark-glow-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Drones Agrícolas</h3>
            <p className="text-gray-400">Mapeo aéreo y aplicación precisa de biopesticidas en grandes extensiones.</p>
          </div>
          <div className="dark-glow-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Sensores Foliares</h3>
            <p className="text-gray-400">Medición del estrés hídrico y nutricional directamente en las hojas.</p>
          </div>
          <div className="dark-glow-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Clasificación por IA</h3>
            <p className="text-gray-400">Sistemas de visión artificial para seleccionar los mejores frutos y semillas.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
