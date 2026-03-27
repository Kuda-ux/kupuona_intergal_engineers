import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sun, 
  Zap, 
  Wrench,
  Home,
  Building2,
  Factory,
  Landmark,
  CheckCircle,
  MapPin
} from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    {
      icon: Sun,
      title: 'Solar Installations',
      description: 'Residential and commercial solar power systems',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      projects: [
        {
          title: 'Residential Solar System',
          location: 'Chitungwiza',
          description: '5kW grid-tie solar system for a family home, reducing electricity bills by 70%.',
          features: ['5kW capacity', 'Grid-tie system', 'Battery backup', 'Smart monitoring']
        },
        {
          title: 'Commercial Solar Installation',
          location: 'Harare CBD',
          description: '25kW solar system for a retail complex, providing clean energy for daily operations.',
          features: ['25kW capacity', 'Roof-mounted panels', 'Inverter system', 'Energy monitoring']
        },
        {
          title: 'Farm Solar Project',
          location: 'Mashonaland',
          description: 'Off-grid solar system powering irrigation pumps and farm buildings.',
          features: ['Off-grid system', 'Water pumping', 'Battery storage', 'Expansion ready']
        }
      ]
    },
    {
      icon: Zap,
      title: 'Generator Solutions',
      description: 'Backup power systems for businesses and institutions',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      projects: [
        {
          title: 'Hotel Backup Power',
          location: 'Victoria Falls',
          description: '100kVA generator installation ensuring uninterrupted power for hotel operations.',
          features: ['100kVA capacity', 'Auto-transfer switch', 'Sound attenuation', '24/7 monitoring']
        },
        {
          title: 'Manufacturing Plant',
          location: 'Bulawayo',
          description: 'Dual generator setup providing redundant backup power for critical manufacturing processes.',
          features: ['Dual generators', 'Load sharing', 'Remote monitoring', 'Maintenance contract']
        },
        {
          title: 'Event Power Supply',
          location: 'Various Locations',
          description: 'Generator rental services for major events and conferences across Zimbabwe.',
          features: ['Flexible capacity', 'On-site support', 'Fuel management', 'Quick deployment']
        }
      ]
    },
    {
      icon: Wrench,
      title: 'Electrical Projects',
      description: 'Commercial and industrial electrical installations',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      projects: [
        {
          title: 'Office Complex Wiring',
          location: 'Harare',
          description: 'Complete electrical installation for a new 5-story office building.',
          features: ['Full wiring', 'Distribution boards', 'Emergency lighting', 'Data cabling']
        },
        {
          title: 'Shopping Centre Upgrade',
          location: 'Chitungwiza',
          description: 'Electrical system upgrade and modernization for improved safety and efficiency.',
          features: ['System upgrade', 'LED lighting', 'Power factor correction', 'Safety compliance']
        },
        {
          title: 'Industrial Facility',
          location: 'Gweru',
          description: 'Heavy-duty electrical infrastructure for a new manufacturing facility.',
          features: ['High voltage', 'Motor controls', 'Safety systems', 'Automation ready']
        }
      ]
    }
  ];

  const industries = [
    { icon: Home, title: 'Residential', count: '50+', description: 'Homes powered' },
    { icon: Building2, title: 'Commercial', count: '30+', description: 'Businesses served' },
    { icon: Factory, title: 'Industrial', count: '15+', description: 'Facilities equipped' },
    { icon: Landmark, title: 'Institutional', count: '10+', description: 'Institutions supported' }
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
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Proven <span className="text-secondary">Solutions</span> Across Zimbabwe
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of successful energy projects — from residential solar 
              installations to large-scale industrial power solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon size={28} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{industry.count}</div>
                <div className="text-gray-600">{industry.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      {projectCategories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-12">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                <category.icon size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.projects.map((project, projectIndex) => (
                <div 
                  key={projectIndex}
                  className={`bg-gradient-to-br ${category.bgColor} rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group`}
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-secondary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Solution Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Solutions for Every Scale
            </h2>
            <p className="text-xl text-gray-600">
              From small residential projects to large industrial installations, 
              we have the expertise to deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Residential', range: '1kW - 10kW', description: 'Home solar systems, backup generators, and electrical upgrades', icon: Home },
              { title: 'Small Business', range: '10kW - 50kW', description: 'Office buildings, retail stores, and small commercial facilities', icon: Building2 },
              { title: 'Commercial', range: '50kW - 200kW', description: 'Shopping centers, hotels, and medium-scale commercial operations', icon: Building2 },
              { title: 'Industrial', range: '200kW+', description: 'Factories, warehouses, and large-scale industrial facilities', icon: Factory }
            ].map((solution, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon size={28} className="text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-1">{solution.title}</h3>
                <div className="text-secondary font-semibold text-sm mb-3">{solution.range}</div>
                <p className="text-gray-600 text-sm">{solution.description}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let us help you design and implement the perfect energy solution 
            for your home, business, or institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Start Your Project
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
