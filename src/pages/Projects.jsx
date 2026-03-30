import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Zap, 
  Wrench, 
  ArrowRight, 
  MapPin,
  Calendar,
  CheckCircle,
  Filter,
  Grid,
  List,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { images } from '../constants/images';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Grid },
    { id: 'solar', label: 'Solar', icon: Sun },
    { id: 'electrical', label: 'Electrical', icon: Zap },
    { id: 'power', label: 'Power Systems', icon: Wrench }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? images.projectGallery 
    : images.projectGallery.filter(p => p.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(filteredProjects[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % filteredProjects.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  const projectStats = [
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Solar Installations' },
    { value: '30+', label: 'Generator Projects' },
    { value: '70+', label: 'Electrical Works' }
  ];

  const featuredProjects = [
    {
      title: 'Guruve School Solar Installation',
      description: 'Complete solar power system installation for educational facility including inverters, batteries, and panel array.',
      category: 'Solar Energy',
      location: 'Guruve, Zimbabwe',
      image: images.solarInverters,
      features: ['5kW System', 'Battery Backup', 'Inverter Setup', 'Full Installation']
    },
    {
      title: 'Residential Solar System - Harare',
      description: 'Premium residential solar installation with rooftop panels and modern inverter system for complete energy independence.',
      category: 'Solar Energy',
      location: 'Harare, Zimbabwe',
      image: images.solarHouse,
      features: ['Rooftop Panels', 'Grid-Tie System', 'Energy Monitoring', 'Maintenance Plan']
    },
    {
      title: 'Industrial Electrical Panel',
      description: 'Professional industrial-grade electrical distribution board installation with safety features and modern components.',
      category: 'Electrical',
      location: 'Chitungwiza, Zimbabwe',
      image: images.electricalPanel,
      features: ['300A Main Switch', 'Circuit Breakers', 'Safety Compliance', 'Professional Wiring']
    },
    {
      title: 'Commercial Power Cabinet',
      description: 'Industrial power storage and distribution system for commercial applications with advanced battery technology.',
      category: 'Power Systems',
      location: 'Harare, Zimbabwe',
      image: images.industrialPower,
      features: ['Battery Storage', 'Power Distribution', 'Climate Control', 'Remote Monitoring']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.solarGround} 
            alt="Kupuona Projects" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-semibold text-sm rounded-full mb-6">
              OUR PORTFOLIO
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-secondary">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our portfolio of successful energy installations across Zimbabwe. 
              From residential solar systems to industrial power solutions, Kupuona Integral Engineers delivers excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl"
              >
                Start Your Project
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

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              FEATURED WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our best work across solar, electrical, and power system installations by Kupuona Integral Engineers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-secondary text-white text-sm font-bold rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all"
                  >
                    Get Similar Solution <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              PROJECT GALLERY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our <span className="text-secondary">Work Gallery</span>
            </h2>
            <p className="text-xl text-gray-600">
              Browse through our collection of completed projects across Zimbabwe.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <filter.icon size={18} />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <img 
                  src={project.src} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-sm mb-1">{project.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-300">
                      <MapPin size={12} />
                      {project.location}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-5xl max-h-[80vh] relative">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold mb-1">{selectedImage.title}</h3>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={14} />
                {selectedImage.location}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {filteredProjects.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-light to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join our growing list of satisfied clients. Contact Kupuona Integral Engineers today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-xl"
            >
              Get Free Quote
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

export default Projects;
