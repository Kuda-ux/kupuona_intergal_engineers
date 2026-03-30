import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  Shield,
  Users,
  Leaf,
  Award,
  Clock,
  Settings,
  Zap,
  Heart,
  Star,
  ThumbsUp,
  Headphones,
  Target
} from 'lucide-react';
import { images } from '../constants/images';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Integrated Solutions',
      description: 'One company for all your energy needs - solar, generators, and electrical. No need to coordinate multiple contractors.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified technicians bring 10+ years of combined experience to every project, ensuring quality workmanship.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'We are committed to promoting renewable energy and helping Zimbabwe transition to cleaner power sources.',
      color: 'from-green-500 to-lime-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We use only premium equipment from trusted suppliers, backed by comprehensive warranties.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and emergency services. We are always here when you need us.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Every project is unique. We design tailored solutions that perfectly match your specific requirements.',
      color: 'from-red-500 to-rose-500'
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed', icon: Target },
    { value: '10+', label: 'Years Experience', icon: Clock },
    { value: '98%', label: 'Client Satisfaction', icon: ThumbsUp },
    { value: '24/7', label: 'Support Available', icon: Headphones }
  ];

  const testimonials = [
    {
      quote: "Kupuona installed our solar system and it has been working flawlessly. Our electricity bills dropped by 75%!",
      author: "Commercial Client",
      company: "Harare Business",
      rating: 5
    },
    {
      quote: "Professional team, quality work, and excellent after-sales support. Highly recommended for any electrical work.",
      author: "Residential Client",
      company: "Chitungwiza",
      rating: 5
    },
    {
      quote: "Their generator maintenance service has kept our backup power running smoothly for years. Very reliable.",
      author: "Industrial Client",
      company: "Manufacturing Company",
      rating: 5
    }
  ];

  const commitments = [
    'Free site assessments and consultations',
    'Transparent pricing with no hidden costs',
    'Quality equipment from trusted suppliers',
    'Professional installation by certified technicians',
    'Comprehensive warranties on all work',
    'Ongoing maintenance and support',
    'Emergency response services',
    'Customer satisfaction guarantee'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.solarRoof} 
            alt="Why Choose Kupuona" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary font-semibold text-sm rounded-full mb-6">
              WHY KUPUONA
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Choose <span className="text-secondary">Kupuona?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover what makes Kupuona Integral Engineers the trusted choice for energy solutions in Zimbabwe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/30"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-secondary/10 group-hover:bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <stat.icon size={28} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              OUR ADVANTAGES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Sets Us <span className="text-secondary">Apart</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kupuona Integral Engineers delivers excellence through our unique combination of expertise, quality, and customer focus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r ${reason.color}`}>
                  <reason.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
                OUR COMMITMENT
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Promise to <span className="text-secondary">You</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                When you choose Kupuona Integral Engineers, you're choosing a partner committed to your success. Here's what you can expect:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={images.solarResidential} 
                  alt="Kupuona Quality Work"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src={images.electricalPanel} 
                  alt="Kupuona Electrical"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
                <img 
                  src={images.batterySystem} 
                  alt="Kupuona Battery"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src={images.solarGround} 
                  alt="Kupuona Solar"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Our Clients <span className="text-secondary">Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with Kupuona.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
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
            Ready to Experience the Kupuona Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join our growing list of satisfied clients. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-xl"
            >
              Contact Us Now
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

export default WhyChooseUs;
