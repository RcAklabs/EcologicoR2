import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Productos from './pages/Productos';
import ProduccionFlores from './pages/ProduccionFlores';
import ProduccionRaices from './pages/ProduccionRaices';
import ProduccionHojas from './pages/ProduccionHojas';
import Testimonios from './pages/Testimonios';
import Contactos from './pages/Contactos';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="productos">
            <Route index element={<Productos />} />
            <Route path="flores" element={<ProduccionFlores />} />
            <Route path="raices" element={<ProduccionRaices />} />
            <Route path="hojas-frutos-semillas" element={<ProduccionHojas />} />
          </Route>
          <Route path="testimonios" element={<Testimonios />} />
          <Route path="contactos" element={<Contactos />} />
        </Route>
      </Routes>
    </Router>
  );
}
