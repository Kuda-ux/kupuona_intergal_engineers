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
  Gauge,
  Home,
  Building2,
  Factory,
  Plug,
  Cable,
  Lightbulb
} from 'lucide-react';

const Services = () => {
  const solarServices = [
    { icon: Sun, title: 'Solar System Design', description: 'Custom solar solutions designed to match your energy consumption patterns and budget.' },
    { icon: Battery, title: 'Grid-Tie Systems', description: 'Connect to the national grid and reduce your electricity bills while earning credits.' },
    { icon: Settings, title: 'Off-Grid Systems', description: 'Complete energy independence with battery storage for areas without reliable grid access.' },
    { icon: Home, title: 'Residential Solar', description: 'Power your home with clean, renewable energy and reduce monthly electricity costs.' },
    { icon: Building2, title: 'Commercial Solar', description: 'Large-scale solar installations for businesses, reducing operational costs significantly.' },
    { icon: Wrench, title: 'Solar Maintenance', description: 'Regular maintenance and cleaning services to ensure optimal system performance.' }
  ];

  const generatorServices = [
    { icon: Zap, title: 'Generator Sales', description: 'Premium diesel generators from trusted manufacturers for all power requirements.' },
    { icon: Clock, title: 'Generator Leasing', description: 'Long-term generator leasing options for businesses needing reliable backup power.' },
    { icon: Gauge, title: 'Generator Rentals', description: 'Short-term rentals for events, construction sites, and emergency power needs.' },
    { icon: Settings, title: 'Installation Services', description: 'Professional installation with proper electrical integration and safety systems.' },
    { icon: Wrench, title: 'Maintenance & Servicing', description: 'Scheduled maintenance programs to keep your generators running efficiently.' },
    { icon: Shield, title: 'Emergency Repairs', description: '24/7 emergency repair services to minimize downtime and restore power quickly.' }
  ];

  const electricalServices = [
    { icon: Building2, title: 'Commercial Wiring', description: 'Complete electrical installations for offices, retail spaces, and commercial buildings.' },
    { icon: Home, title: 'Residential Wiring', description: 'Safe and code-compliant electrical wiring for homes and apartments.' },
    { icon: Factory, title: 'Industrial Electrical', description: 'Heavy-duty electrical infrastructure for factories and industrial facilities.' },
    { icon: Plug, title: 'Electrical Repairs', description: 'Fast and reliable repair services for all electrical issues and faults.' },
    { icon: Cable, title: 'Cable Installation', description: 'Professional cable laying and management for clean, organized installations.' },
    { icon: Lightbulb, title: 'Lighting Solutions', description: 'Energy-efficient lighting design and installation for all environments.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="text-secondary">Energy Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From solar installations to generator services and electrical work — 
              we provide end-to-end energy solutions for homes, businesses, and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { step: 'Design', desc: 'Custom solutions' },
              { step: 'Supply', desc: 'Quality equipment' },
              { step: 'Install', desc: 'Expert installation' },
              { step: 'Maintain', desc: 'Ongoing support' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{item.step}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
                {index < 3 && (
                  <ArrowRight className="text-gray-300 hidden md:block" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Energy Systems */}
      <section id="solar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sun size={18} />
                Solar Energy Systems
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Harness the Power of the Sun
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Zimbabwe enjoys abundant sunshine year-round, making solar energy an ideal 
                solution for reducing electricity costs and achieving energy independence. 
                Our solar systems are designed for maximum efficiency and long-term reliability.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Reduce electricity bills by up to 80%',
                  'Clean, renewable energy source',
                  'Increase property value',
                  'Protection against power outages',
                  'Low maintenance requirements',
                  '25+ year system lifespan'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Get Solar Quote <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {solarServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Generator Solutions */}
      <section id="generators" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4">
              {generatorServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap size={18} />
                Generator Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Reliable Backup Power
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Power outages can disrupt operations and cause significant losses. Our 
                comprehensive generator solutions ensure you're never left in the dark. 
                From sales to rentals and maintenance, we've got you covered.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Wide range of generator capacities',
                  'Flexible rental and leasing options',
                  'Professional installation services',
                  'Scheduled maintenance programs',
                  '24/7 emergency support',
                  'Fuel-efficient diesel generators'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Get Generator Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Installations */}
      <section id="electrical" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wrench size={18} />
                Electrical Installations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Electrical Services
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Safe, reliable electrical infrastructure is the backbone of any property. 
                Our certified electricians deliver quality installations, repairs, and 
                maintenance services for residential, commercial, and industrial clients.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Certified and experienced electricians',
                  'Code-compliant installations',
                  'Safety-first approach',
                  'Quality materials and workmanship',
                  'Comprehensive testing and certification',
                  'Ongoing maintenance support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Get Electrical Quote <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {electricalServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Service Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Flexible Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600">
              Whether you need a one-time installation or ongoing support, 
              we have service packages designed to meet your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Basic Installation',
                description: 'One-time installation service with standard warranty coverage.',
                features: ['System design consultation', 'Professional installation', 'Standard warranty', 'User training', 'Documentation'],
                cta: 'Get Quote'
              },
              {
                title: 'Premium Package',
                description: 'Installation plus extended warranty and annual maintenance.',
                features: ['Everything in Basic', 'Extended warranty', 'Annual maintenance visit', 'Priority support', 'Performance monitoring'],
                cta: 'Most Popular',
                highlighted: true
              },
              {
                title: 'Enterprise Solution',
                description: 'Comprehensive service agreement for businesses and institutions.',
                features: ['Custom system design', '24/7 support hotline', 'Quarterly maintenance', 'Emergency response', 'Dedicated account manager'],
                cta: 'Contact Us'
              }
            ].map((pkg, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-br from-primary to-primary-light text-white ring-4 ring-secondary/50 scale-105' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Recommended
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-primary'}`}>
                  {pkg.title}
                </h3>
                <p className={`mb-6 ${pkg.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} className={pkg.highlighted ? 'text-secondary' : 'text-secondary'} />
                      <span className={pkg.highlighted ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                    pkg.highlighted 
                      ? 'bg-secondary hover:bg-secondary-light text-white' 
                      : 'bg-primary hover:bg-primary-light text-white'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Energy Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Every project is unique. Contact us for a free consultation and 
            let our experts design a solution tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Request Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+263771492799"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20"
            >
              Call +263 771 492 799
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
