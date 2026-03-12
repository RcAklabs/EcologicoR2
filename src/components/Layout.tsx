import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Empresa', path: '/empresa' },
    { 
      name: 'Productos', 
      path: '/productos',
      submenu: [
        { name: 'Producción Flores', path: '/productos/flores' },
        { name: 'Producción Raíces', path: '/productos/raices' },
        { name: 'Producción Hojas, Frutos y Semillas', path: '/productos/hojas-frutos-semillas' },
      ]
    },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Contactos', path: '/contactos' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-grid-pattern">
      {/* Navbar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-eco-green to-eco-yellow flex items-center justify-center shadow-[0_0_15px_rgba(209,255,77,0.5)]">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                Ecológico
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <button 
                      className="flex items-center text-gray-600 hover:text-eco-green font-medium transition-colors py-2"
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                  ) : (
                    <Link 
                      to={link.path} 
                      className="text-gray-600 hover:text-eco-green font-medium transition-colors py-2 block"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Desktop Submenu */}
                  {link.submenu && (
                    <div className="absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                      <div className="py-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-eco-green"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50 rounded-md"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isProductsOpen && (
                        <div className="pl-6 space-y-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.path}
                              className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-eco-green hover:bg-gray-50 rounded-md"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-eco-green hover:bg-gray-50 rounded-md"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-eco-green to-eco-yellow flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">Ecológico</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-eco-yellow transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-eco-yellow transition-colors">Terms & Conditions</Link>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-eco-yellow transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-eco-yellow transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-eco-yellow transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ecológico. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/593999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
