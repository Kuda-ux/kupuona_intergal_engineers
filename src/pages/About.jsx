import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Heart,
  Shield,
  Users,
  Lightbulb,
  Leaf,
  Award,
  Handshake,
  Lock,
  CheckCircle
} from 'lucide-react';
import { images } from '../constants/images';

const About = () => {
  const values = [
    { icon: Shield, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards.' },
    { icon: Users, title: 'Customer Focus', description: 'Our clients are at the heart of everything we do.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace new technologies and creative approaches.' },
    { icon: Leaf, title: 'Sustainability', description: 'Committed to renewable energy and responsible practices.' },
    { icon: Award, title: 'Quality', description: 'Excellence in every project with premium materials.' },
    { icon: Handshake, title: 'Teamwork', description: 'Collaborating effectively to achieve common goals.' },
    { icon: Heart, title: 'Community', description: 'Contributing to the communities we serve.' },
    { icon: Lock, title: 'Safety', description: 'Prioritizing safety in all operations.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.solarHouse} 
            alt="Kupuona Projects" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-semibold text-sm rounded-full mb-6">
              ABOUT US
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powering Zimbabwe's <span className="text-secondary">Energy Future</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Kupuona Integral Engineers is a Zimbabwe-based engineering company delivering 
              integrated energy solutions across solar systems, diesel generators, and electrical installations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/30"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
                OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                About <span className="text-secondary">Kupuona Integral Engineers</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary">Kupuona Integral Engineers</strong> is a Zimbabwean engineering 
                  company specializing in integrated energy solutions. We provide comprehensive services 
                  across solar energy systems, diesel generators, and electrical installations.
                </p>
                <p>
                  Based in Chitungwiza, we serve clients throughout Zimbabwe, from residential homeowners 
                  to large commercial and industrial enterprises. Our team of skilled technicians and 
                  engineers brings over 10 years of combined experience to every project.
                </p>
                <p>
                  We believe in delivering end-to-end solutions — from initial design and consultation 
                  through supply, installation, and ongoing maintenance. This integrated approach ensures 
                  quality, reliability, and customer satisfaction.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-secondary">150+</div>
                  <div className="text-sm text-gray-600">Projects Done</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={images.solarResidential} 
                  alt="Kupuona Solar Installation"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src={images.electricalPanel} 
                  alt="Kupuona Electrical Work"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
                <img 
                  src={images.batterySystem} 
                  alt="Kupuona Battery System"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src={images.solarGround} 
                  alt="Kupuona Ground Solar"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-400 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To deliver high-quality electrical and energy services that meet the evolving needs 
                of our clients while promoting energy efficiency and sustainability.
              </p>
              <ul className="space-y-3">
                {[
                  'Provide reliable installations and maintenance',
                  'Reduce customer energy costs',
                  'Ensure backup power readiness',
                  'Promote renewable energy adoption'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-primary-light p-10 rounded-3xl shadow-lg text-white">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To become a leading national provider of integrated energy solutions, 
                recognized for excellence, innovation, and commitment to sustainable development.
              </p>
              <ul className="space-y-3">
                {[
                  'Lead in integrated energy solutions',
                  'Drive solar energy adoption in Zimbabwe',
                  'Build long-term customer relationships',
                  'Support greener, smarter communities'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-200">
                    <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Drives <span className="text-secondary">Kupuona</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-secondary/10 group-hover:bg-secondary rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <value.icon size={26} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={images.solarRoof} 
                alt="Kupuona Commitment"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
                    <Award size={28} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Quality</div>
                    <div className="text-gray-500">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
                OUR COMMITMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Committed to <span className="text-secondary">Zimbabwe</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kupuona Integral Engineers is deeply committed to Zimbabwe's development. 
                We believe that reliable, sustainable energy is the foundation of economic growth 
                and improved quality of life.
              </p>
              
              <div className="space-y-4">
                {[
                  'Supporting local employment and skills development',
                  'Promoting renewable energy adoption across Zimbabwe',
                  'Providing affordable energy solutions for all sectors',
                  'Contributing to Zimbabwe\'s sustainable development goals'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle size={22} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 mt-10 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl"
              >
                Partner With Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary-light to-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the growing list of satisfied clients who trust Kupuona Integral Engineers 
            for their energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-xl"
            >
              Contact Us Today
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

export default About;
