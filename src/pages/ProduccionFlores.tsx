import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Rosas', produccion: 4000, eficiencia: 2400 },
  { name: 'Girasoles', produccion: 3000, eficiencia: 1398 },
  { name: 'Orquídeas', produccion: 2000, eficiencia: 9800 },
  { name: 'Tulipanes', produccion: 2780, eficiencia: 3908 },
  { name: 'Lirios', produccion: 1890, eficiencia: 4800 },
];

export default function ProduccionFlores() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Producción de <span className="text-eco-green">Flores</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Nuestra tecnología optimiza el cultivo de flores, garantizando colores vibrantes, tallos fuertes y una vida útil prolongada. Analizamos datos en tiempo real para ajustar nutrientes y riego.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rendimiento por Tipo de Flor (kg/ha)</h2>
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
            <h3 className="text-xl font-bold text-white mb-2">Control Climático</h3>
            <p className="text-gray-400">Sensores IoT que regulan temperatura y humedad en invernaderos.</p>
          </div>
          <div className="dark-glow-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Nutrición Precisa</h3>
            <p className="text-gray-400">Dosificación exacta de fertilizantes orgánicos para máxima floración.</p>
          </div>
          <div className="dark-glow-card p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Cosecha Predictiva</h3>
            <p className="text-gray-400">Algoritmos que determinan el momento exacto para el corte.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
