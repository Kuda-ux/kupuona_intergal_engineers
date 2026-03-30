import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
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
      {/* Top Bar - Premium Style */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary-light text-white py-3 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <a href="tel:+263771492799" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span>+263 771 492 799</span>
              </a>
              <a href="https://wa.me/263718340328" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <span>WhatsApp: +263 718 340 328</span>
              </a>
              <a href="mailto:info@kupuonazim.co.zw" className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <span>info@kupuonazim.co.zw</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <MapPin size={14} className="text-secondary" />
              <span>14752 Makoni Shopping Centre, Chitungwiza, Zimbabwe</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-2xl shadow-primary/10' 
          : 'bg-white/98 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo and Company Name - BIGGER */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Kupuona Integral Engineers" 
                  className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-primary leading-tight tracking-tight">
                  KUPUONA
                </h1>
                <p className="text-sm font-semibold text-secondary tracking-wider">
                  INTEGRAL ENGINEERS
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Solar • Generators • Electrical
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-lg ${
                    isActive(link.path)
                      ? 'text-secondary bg-secondary/5'
                      : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-secondary rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+263771492799"
                className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">Call Us</span>
              </a>
              <a
                href="https://wa.me/263718340328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-secondary to-green-500 hover:from-green-500 hover:to-secondary text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 text-primary hover:text-secondary hover:bg-gray-50 rounded-xl transition-all"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t px-4 py-6 space-y-2 shadow-xl">
            {/* Mobile Logo & Name */}
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
              <img src={logo} alt="Kupuona" className="h-12 w-auto" />
              <div>
                <h2 className="font-bold text-primary">KUPUONA INTEGRAL ENGINEERS</h2>
                <p className="text-xs text-gray-500">Solar • Generators • Electrical</p>
              </div>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-secondary/10 text-secondary border-l-4 border-secondary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Contact Buttons */}
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:+263771492799"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-semibold"
              >
                <Phone size={18} />
                Call: +263 771 492 799
              </a>
              <a
                href="https://wa.me/263718340328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-secondary to-green-500 text-white py-3 rounded-xl font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
