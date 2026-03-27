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

const About = () => {
  const values = [
    { icon: Shield, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards in all our dealings.' },
    { icon: Users, title: 'Customer Focus', description: 'Our clients are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace new technologies and creative approaches to deliver cutting-edge energy solutions.' },
    { icon: Leaf, title: 'Sustainability', description: 'We are committed to promoting renewable energy and environmentally responsible practices.' },
    { icon: Award, title: 'Quality', description: 'We deliver excellence in every project, using premium materials and skilled workmanship.' },
    { icon: Handshake, title: 'Teamwork', description: 'We collaborate effectively, leveraging diverse skills to achieve common goals.' },
    { icon: Heart, title: 'Community Engagement', description: 'We actively contribute to the communities we serve, supporting local development.' },
    { icon: Lock, title: 'Safety', description: 'We prioritize safety in all operations, protecting our team, clients, and the environment.' }
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
              About Kupuona Integral Engineers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Powering Zimbabwe's <span className="text-secondary">Energy Future</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A Zimbabwe-based engineering company delivering integrated energy solutions 
              across solar systems, diesel generators, and electrical installations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
                Building a Sustainable Energy Future for Zimbabwe
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Kupuona Integral Engineers was founded with a clear vision: to provide Zimbabwe 
                  with reliable, sustainable, and affordable energy solutions. Based in Chitungwiza, 
                  we have grown to become a trusted partner for homes, businesses, and institutions 
                  seeking comprehensive energy services.
                </p>
                <p>
                  Our name "Kupuona" reflects our commitment to helping Zimbabwe thrive through 
                  better energy infrastructure. We understand the challenges of power reliability 
                  in our region, and we've built our company to address these challenges head-on.
                </p>
                <p>
                  What sets us apart is our integrated approach. Rather than offering isolated 
                  products, we provide complete energy solutions — from initial consultation and 
                  system design to professional installation and ongoing maintenance. This 
                  end-to-end service ensures our clients receive seamless, reliable energy systems 
                  that truly meet their needs.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">100+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-secondary/30 transition-all">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Target size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To deliver high-quality electrical and energy services that empower our clients 
                with reliable, efficient, and sustainable power solutions.
              </p>
              <ul className="space-y-3">
                {[
                  'Promote energy efficiency and sustainability',
                  'Provide reliable installations and maintenance',
                  'Reduce customer energy costs',
                  'Ensure backup power readiness'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Eye size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To become a leading national provider of integrated energy solutions, 
                driving Zimbabwe's transition to sustainable and reliable power.
              </p>
              <ul className="space-y-3">
                {[
                  'Lead solar energy adoption in Zimbabwe',
                  'Build long-term customer relationships',
                  'Support greener, smarter communities',
                  'Set industry standards for excellence'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-xl text-gray-600">
              Our core values define who we are and how we conduct business. 
              They are the foundation of our commitment to excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <value.icon size={24} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Commitment to Zimbabwe
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                At Kupuona Integral Engineers, we believe in the potential of Zimbabwe's energy future. 
                We are committed to:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Advancing renewable energy adoption',
                  'Creating local employment opportunities',
                  'Supporting sustainable development',
                  'Delivering world-class service standards',
                  'Building energy-independent communities',
                  'Reducing carbon footprint nationwide'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the growing number of Zimbabwean homes and businesses 
            that trust Kupuona Integral Engineers for their energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30"
            >
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
