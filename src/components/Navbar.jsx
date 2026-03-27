import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+263771492799" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              +263 771 492 799
            </a>
            <a href="mailto:info@kupuonazim.co.zw" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              info@kupuonazim.co.zw
            </a>
          </div>
          <div className="text-gray-300">
            Integrated Energy Solutions for Zimbabwe
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Kupuona Integral Engineers" className="h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors relative py-2 ${
                    isActive(link.path)
                      ? 'text-secondary'
                      : 'text-gray-700 hover:text-secondary'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/263718340328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-secondary-light text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-secondary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}>
          <div className="bg-white border-t px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t mt-4">
              <a
                href="https://wa.me/263718340328"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold text-center transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
