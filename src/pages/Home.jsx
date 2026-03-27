import { Link } from 'react-router-dom';
import { 
  Sun, 
  Zap, 
  Wrench, 
  ArrowRight, 
  CheckCircle, 
  Phone,
  Building2,
  Home as HomeIcon,
  Factory,
  Landmark,
  Shield,
  Users,
  Leaf,
  Award,
  Clock,
  Settings
} from 'lucide-react';
import { images } from '../constants/images';

const Home = () => {
  const services = [
    {
      icon: Sun,
      title: 'Solar Energy Systems',
      description: 'Design and installation of solar systems for homes and businesses. Reduce electricity costs and embrace sustainable energy.',
      features: ['System Design', 'Installation', 'Grid-Tie & Off-Grid', 'Maintenance'],
      color: 'from-yellow-500 to-orange-500',
      image: images.solarResidential
    },
    {
      icon: Zap,
      title: 'Generator Solutions',
      description: 'Complete generator services including supply, leasing, rentals, installation, and maintenance for reliable backup power.',
      features: ['Sales & Supply', 'Leasing & Rentals', 'Installation', 'Servicing'],
      color: 'from-blue-500 to-cyan-500',
      image: images.generator
    },
    {
      icon: Wrench,
      title: 'Electrical Installations',
      description: 'Professional commercial and residential electrical wiring, maintenance, repairs, and turnkey infrastructure solutions.',
      features: ['Commercial Wiring', 'Residential', 'Maintenance', 'Repairs'],
      color: 'from-green-500 to-emerald-500',
      image: images.electrician
    }
  ];

  const whyChooseUs = [
    { icon: Shield, title: 'Integrated Solutions', description: 'Complete energy solutions under one roof - solar, generators, and electrical.' },
    { icon: Users, title: 'Expert Team', description: 'Skilled technicians with years of experience in energy systems.' },
    { icon: Leaf, title: 'Sustainability Focus', description: 'Committed to promoting renewable energy and reducing carbon footprint.' },
    { icon: Award, title: 'Quality Assurance', description: 'Premium products and workmanship backed by comprehensive warranties.' },
    { icon: Clock, title: 'Reliable Support', description: '24/7 technical support and maintenance services for peace of mind.' },
    { icon: Settings, title: 'Custom Solutions', description: 'Tailored energy systems designed to meet your specific needs.' }
  ];

  const industries = [
    { icon: HomeIcon, title: 'Residential', description: 'Homes & Apartments', image: images.home },
    { icon: Building2, title: 'Commercial', description: 'Offices & Retail', image: images.commercial },
    { icon: Factory, title: 'Industrial', description: 'Factories & Warehouses', image: images.industrial },
    { icon: Landmark, title: 'Institutional', description: 'Schools & Hospitals', image: images.office }
  ];

  const partners = [
    { name: 'Zimbuku Trust Microfinance', type: 'Financial Partner' },
    { name: 'Chicken Hut', type: 'Commercial Client' },
    { name: 'Ecobank', type: 'Banking Partner' },
    { name: 'The Planet Pharmaceuticals', type: 'Commercial Client', address: '29 Cruster Road Southerton, Harare' }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Solar panels installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                Zimbabwe's Trusted Energy Partner
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Integrated Energy Solutions for a{' '}
                <span className="text-secondary">Smarter Zimbabwe</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                From solar systems to generators and electrical installations — we deliver 
                complete energy solutions that power homes, businesses, and industries across Zimbabwe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30"
                >
                  Request a Quote
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="https://wa.me/263718340328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20"
                >
                  <Phone size={20} />
                  WhatsApp Us
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-gray-400 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">10+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <img 
                  src={images.solarInstallation} 
                  alt="Professional solar installation" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Sun size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Reduce Bills by 80%</div>
                      <div className="text-sm text-gray-500">With Solar Energy</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm">Site Assessment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Complete Energy Solutions, End-to-End
            </h2>
            <p className="text-xl text-gray-600">
              We don't just sell products — we deliver comprehensive energy solutions 
              from initial design to ongoing maintenance.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Design', description: 'Custom system design tailored to your energy needs', image: images.meeting },
              { step: '02', title: 'Supply', description: 'Premium quality equipment from trusted manufacturers', image: images.generator },
              { step: '03', title: 'Install', description: 'Professional installation by certified technicians', image: images.electrician },
              { step: '04', title: 'Maintain', description: 'Ongoing support and maintenance services', image: images.technician }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-bold text-secondary/20 mb-2">{item.step}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-secondary/30" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Three Pillars of Energy Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive energy solutions covering solar, generator, and electrical systems 
              for residential, commercial, and industrial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon size={28} className="text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/services"
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
                Your Trusted Partner for Energy Solutions in Zimbabwe
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With years of experience and a commitment to excellence, Kupuona Integral Engineers 
                delivers reliable, sustainable, and cost-effective energy solutions.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/why-choose-us"
                className="inline-flex items-center gap-2 mt-8 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <img 
                src={images.team} 
                alt="Kupuona team at work"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white max-w-xs">
                <h3 className="text-xl font-bold mb-3">Our Commitment</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    Professional installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    Premium equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-secondary" />
                    Ongoing support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Powering Every Sector
            </h2>
            <p className="text-xl text-gray-600">
              From homes to factories, we provide tailored energy solutions for every need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 border-4 border-white group-hover:bg-secondary transition-colors">
                    <industry.icon size={24} className="text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Trusted Partners</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Building Trust Through Excellence
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to work with leading organizations across Zimbabwe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl text-center border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{partner.name}</h3>
                <p className="text-secondary font-medium">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.solarFarm} 
            alt="Solar farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get a free consultation and discover how Kupuona Integral Engineers can transform 
            your energy infrastructure with reliable, sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30"
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/263718340328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What solar installation services does Kupuona offer in Zimbabwe?',
                a: 'Kupuona Integral Engineers provides complete solar installation services in Zimbabwe including system design, equipment supply, professional installation, and ongoing maintenance. We offer both grid-tie and off-grid solar solutions for residential, commercial, and industrial clients throughout Chitungwiza, Harare, and all of Zimbabwe.'
              },
              {
                q: 'Do you offer generator rental services in Zimbabwe?',
                a: 'Yes, we offer comprehensive generator solutions including sales, leasing, and rental services. Our generator fleet includes various capacities suitable for homes, businesses, events, and industrial applications. We also provide installation and maintenance services for all generator types.'
              },
              {
                q: 'What areas in Zimbabwe do you serve?',
                a: 'Kupuona Integral Engineers is based in Chitungwiza and serves clients throughout Zimbabwe. We provide energy solutions to residential, commercial, and industrial clients across all major cities including Harare, Bulawayo, Mutare, Gweru, and surrounding areas.'
              },
              {
                q: 'How can I get a quote for solar installation?',
                a: 'You can request a free quote by calling us at +263 771 492 799, sending a WhatsApp message to +263 718 340 328, or filling out our contact form at kupuonazim.co.zw. Our team will assess your energy needs and provide a customized solution with transparent pricing.'
              },
              {
                q: 'What makes Kupuona different from other energy companies in Zimbabwe?',
                a: 'Kupuona Integral Engineers offers integrated energy solutions combining solar, generator, and electrical services under one roof. We provide end-to-end service from design to maintenance, ensuring quality workmanship, reliable support, and sustainable solutions tailored to Zimbabwe\'s energy landscape.'
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
              >
                <summary className="p-6 cursor-pointer font-semibold text-primary hover:text-secondary transition-colors flex items-center justify-between">
                  {faq.q}
                  <span className="text-secondary ml-4">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
