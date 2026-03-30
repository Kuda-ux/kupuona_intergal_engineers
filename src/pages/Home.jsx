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
  Settings,
  Star,
  Play
} from 'lucide-react';
import { images } from '../constants/images';

const Home = () => {
  const services = [
    {
      icon: Sun,
      title: 'Solar Energy Systems',
      description: 'Complete solar solutions from design to installation. Reduce electricity costs by up to 80% with our premium solar systems.',
      features: ['System Design', 'Panel Installation', 'Grid-Tie & Off-Grid', 'Battery Storage'],
      color: 'from-amber-500 to-orange-500',
      image: images.solarResidential
    },
    {
      icon: Zap,
      title: 'Generator Solutions',
      description: 'Reliable backup power solutions including sales, leasing, rentals, and professional maintenance services.',
      features: ['Sales & Supply', 'Leasing & Rentals', 'Installation', 'Maintenance'],
      color: 'from-blue-500 to-indigo-500',
      image: images.industrialPower
    },
    {
      icon: Wrench,
      title: 'Electrical Installations',
      description: 'Professional electrical services for commercial and residential properties with certified technicians.',
      features: ['Commercial Wiring', 'Residential', 'DB Boards', 'Repairs'],
      color: 'from-emerald-500 to-teal-500',
      image: images.electricalPanel
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
    { icon: HomeIcon, title: 'Residential', description: 'Homes & Apartments', image: images.solarHouse },
    { icon: Building2, title: 'Commercial', description: 'Offices & Retail', image: images.solarInverters },
    { icon: Factory, title: 'Industrial', description: 'Factories & Warehouses', image: images.industrialPower },
    { icon: Landmark, title: 'Institutional', description: 'Schools & Hospitals', image: images.batterySystem }
  ];

  const partners = [
    { name: 'Zimbuku Trust Microfinance', type: 'Financial Partner' },
    { name: 'Chicken Hut', type: 'Commercial Client' },
    { name: 'Ecobank', type: 'Banking Partner' },
    { name: 'The Planet Pharmaceuticals', type: 'Commercial Client', address: '29 Cruster Road Southerton, Harare' }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '10+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Kupuona Solar Installation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Zimbabwe's Trusted Energy Partner</span>
              </div>
              
              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Powering</span>
                  <span className="block text-secondary">Zimbabwe's</span>
                  <span className="block">Future</span>
                </h1>
              </div>
              
              {/* Company Name Highlight */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-2xl font-bold text-secondary mb-2">KUPUONA INTEGRAL ENGINEERS</p>
                <p className="text-lg text-gray-300">
                  Complete energy solutions: Solar Systems • Generators • Electrical Installations
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/40 hover:-translate-y-1"
                >
                  Get Free Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/263718340328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30 hover:border-secondary"
                >
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Project Showcase */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={images.solarHouse} 
                    alt="Kupuona Solar Project" 
                    className="w-full h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Card - Top Right */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary to-green-400 rounded-xl flex items-center justify-center">
                      <Sun size={28} className="text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">80%</div>
                      <div className="text-sm text-gray-500">Energy Savings</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card - Bottom Left */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary to-primary-light rounded-2xl p-5 text-white shadow-2xl max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-xs font-bold">K</div>
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold">I</div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">E</div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-medium">Trusted by 150+ clients across Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-10 h-14 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-4 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Name Banner */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-primary py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 101px)'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">KUPUONA INTEGRAL ENGINEERS</h2>
            <div className="hidden md:block w-px h-10 bg-white/30"></div>
            <p className="text-lg text-gray-300">Design → Supply → Install → Maintain</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">OUR SERVICES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Three Pillars of <span className="text-secondary">Energy Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive energy solutions from Kupuona Integral Engineers - your trusted partner for solar, generator, and electrical systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70 group-hover:opacity-80 transition-opacity`}></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <service.icon size={32} className="text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/services"
                    className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all group/link"
                  >
                    Learn More 
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">WHY KUPUONA</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Your Trusted Partner for <span className="text-secondary">Energy Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Kupuona Integral Engineers delivers reliable, sustainable, and cost-effective energy solutions across Zimbabwe.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={26} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/why-choose-us"
                className="inline-flex items-center gap-3 mt-10 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl"
              >
                Discover More About Us
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src={images.solarGround} 
                    alt="Kupuona Solar Project"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  />
                  <img 
                    src={images.batterySystem} 
                    alt="Kupuona Battery System"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src={images.electricalPanel} 
                    alt="Kupuona Electrical Work"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  />
                  <img 
                    src={images.solarRoof} 
                    alt="Kupuona Roof Installation"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-400 rounded-xl flex items-center justify-center">
                    <Award size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10+ Years</div>
                    <div className="text-gray-500">Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">INDUSTRIES WE SERVE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Powering Every <span className="text-secondary">Sector</span>
            </h2>
            <p className="text-xl text-gray-600">
              From homes to factories, Kupuona Integral Engineers provides tailored energy solutions for every need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                    <p className="text-sm text-gray-300">{industry.description}</p>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <industry.icon size={24} className="text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <Link to="/services" className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    View Solutions <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">TRUSTED PARTNERS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Building Trust Through <span className="text-secondary">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kupuona Integral Engineers is proud to work with leading organizations across Zimbabwe.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl text-center border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors">
                  <Building2 size={36} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{partner.name}</h3>
                <p className="text-secondary font-medium text-sm">{partner.type}</p>
                {partner.address && (
                  <p className="text-gray-500 text-xs mt-2">{partner.address}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.solarGround}
            alt="Kupuona Solar Installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Get a free consultation from Kupuona Integral Engineers and discover how we can transform your energy infrastructure with reliable, sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-light text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/40"
            >
              Get Free Consultation
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/263718340328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all border border-white/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Frequently Asked <span className="text-secondary">Questions</span>
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
                a: 'You can request a free quote by calling us at +263 771 492 799, sending a WhatsApp message to +263 718 340 328, or filling out our contact form. Our team will assess your energy needs and provide a customized solution with transparent pricing.'
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="p-6 cursor-pointer font-bold text-primary hover:text-secondary transition-colors flex items-center justify-between text-lg">
                  {faq.q}
                  <span className="text-secondary text-2xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
