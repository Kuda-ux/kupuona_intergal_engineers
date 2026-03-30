import { Link } from 'react-router-dom';
import { 
  Sun, 
  Zap, 
  Wrench, 
  ArrowRight, 
  CheckCircle,
  Battery,
  Settings,
  Shield,
  Clock,
  Phone,
  Lightbulb,
  Home,
  Building2,
  Factory
} from 'lucide-react';
import { images } from '../constants/images';

const Services = () => {
  const services = [
    {
      id: 'solar',
      icon: Sun,
      title: 'Solar Energy Systems',
      tagline: 'Harness the Power of the Sun',
      description: 'Complete solar solutions from design to installation. We help homes and businesses reduce electricity costs by up to 80% with our premium solar systems.',
      image: images.solarResidential,
      features: [
        { title: 'System Design', desc: 'Custom solar system design based on your energy needs' },
        { title: 'Panel Installation', desc: 'Professional installation of high-efficiency solar panels' },
        { title: 'Grid-Tie Systems', desc: 'Connect to the grid and sell excess power' },
        { title: 'Off-Grid Solutions', desc: 'Complete energy independence with battery storage' },
        { title: 'Battery Storage', desc: 'Store solar energy for use at night or during outages' },
        { title: 'Maintenance', desc: 'Regular maintenance to ensure optimal performance' }
      ],
      benefits: ['Reduce electricity bills by up to 80%', 'Clean, renewable energy', 'Increase property value', '25+ year panel lifespan', 'Government incentives available'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'generators',
      icon: Zap,
      title: 'Generator Solutions',
      tagline: 'Reliable Backup Power',
      description: 'Comprehensive generator services including sales, leasing, rentals, and professional maintenance. Never be left in the dark again.',
      image: images.industrialPower,
      features: [
        { title: 'Generator Sales', desc: 'Wide range of diesel and petrol generators' },
        { title: 'Leasing Options', desc: 'Flexible leasing plans for businesses' },
        { title: 'Short-term Rentals', desc: 'Rent generators for events or emergencies' },
        { title: 'Installation', desc: 'Professional installation with automatic transfer' },
        { title: 'Maintenance', desc: 'Regular servicing to ensure reliability' },
        { title: 'Emergency Repairs', desc: '24/7 emergency repair services' }
      ],
      benefits: ['Uninterrupted power supply', 'Various capacity options', 'Automatic transfer switches', 'Fuel-efficient models', 'Professional support'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'electrical',
      icon: Wrench,
      title: 'Electrical Installations',
      tagline: 'Professional Electrical Services',
      description: 'Expert electrical services for commercial and residential properties. Our certified technicians deliver safe, code-compliant installations.',
      image: images.electricalPanel,
      features: [
        { title: 'Commercial Wiring', desc: 'Complete electrical systems for businesses' },
        { title: 'Residential Work', desc: 'Home electrical installations and upgrades' },
        { title: 'DB Board Installation', desc: 'Distribution board setup and upgrades' },
        { title: 'Fault Finding', desc: 'Diagnose and repair electrical issues' },
        { title: 'Safety Inspections', desc: 'Comprehensive electrical safety audits' },
        { title: 'Turnkey Solutions', desc: 'End-to-end electrical project management' }
      ],
      benefits: ['Code-compliant work', 'Certified technicians', 'Safety guaranteed', 'Quality materials', 'Warranty included'],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const process = [
    { step: '01', title: 'Consultation', desc: 'We assess your energy needs and site conditions', icon: Phone },
    { step: '02', title: 'Design', desc: 'Custom solution designed for your requirements', icon: Lightbulb },
    { step: '03', title: 'Supply', desc: 'We source quality equipment from trusted suppliers', icon: Settings },
    { step: '04', title: 'Install', desc: 'Professional installation by certified technicians', icon: Wrench },
    { step: '05', title: 'Maintain', desc: 'Ongoing support and maintenance services', icon: Shield }
  ];

  const packages = [
    {
      name: 'Residential',
      icon: Home,
      description: 'Perfect for homes and apartments',
      features: ['Solar systems 1-10kW', 'Home generators', 'Residential wiring', 'DB board upgrades'],
      image: images.solarHouse
    },
    {
      name: 'Commercial',
      icon: Building2,
      description: 'Ideal for offices and retail spaces',
      features: ['Solar systems 10-50kW', 'Commercial generators', 'Office wiring', 'Energy audits'],
      image: images.solarInverters
    },
    {
      name: 'Industrial',
      icon: Factory,
      description: 'Heavy-duty solutions for factories',
      features: ['Large-scale solar', 'Industrial generators', 'Factory wiring', 'Power management'],
      image: images.electricalBoard
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.solarGround} 
            alt="Kupuona Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-semibold text-sm rounded-full mb-6">
              OUR SERVICES
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Integrated <span className="text-secondary">Energy Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Kupuona Integral Engineers delivers comprehensive energy solutions across solar, 
              generators, and electrical installations. One company, complete solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://wa.me/263718340328"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary">Our Process: <span className="text-secondary">Design → Supply → Install → Maintain</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <item.icon size={28} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs text-secondary font-bold mb-1">{item.step}</div>
                <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 bg-gradient-to-r ${service.color}`}>
                  <service.icon size={18} />
                  {service.tagline}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-primary text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100 mb-8">
                  <h4 className="font-bold text-primary mb-4">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl bg-gradient-to-r ${service.color}`}
                >
                  Get {service.title} Quote
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                  />
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} bg-white p-6 rounded-2xl shadow-xl`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${service.color}`}>
                        <service.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-gray-500 text-sm">Support Available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Service Packages */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              SERVICE PACKAGES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Solutions for Every <span className="text-secondary">Sector</span>
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a homeowner, business, or industrial facility, we have the right energy solution for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <pkg.icon size={24} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                  >
                    Get Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-light to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Contact Kupuona Integral Engineers today for a free consultation and quote on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-xl"
            >
              Request Free Quote
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/263718340328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all border border-white/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
