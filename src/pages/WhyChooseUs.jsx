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
  Target,
  TrendingUp,
  Headphones,
  ThumbsUp
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Integrated Energy Partner',
      description: 'We offer solar, generator, and electrical services under one roof. No need to coordinate multiple contractors — we handle everything from design to maintenance.',
      benefits: ['Single point of contact', 'Coordinated solutions', 'Simplified project management']
    },
    {
      icon: Users,
      title: 'Expert Technical Team',
      description: 'Our certified technicians bring years of experience in energy systems. We invest in continuous training to stay current with the latest technologies.',
      benefits: ['Certified professionals', 'Ongoing training', 'Industry expertise']
    },
    {
      icon: Leaf,
      title: 'Sustainability Focus',
      description: 'We are committed to promoting renewable energy and helping Zimbabwe transition to cleaner power sources. Our solutions reduce carbon footprint and energy costs.',
      benefits: ['Renewable energy expertise', 'Environmental responsibility', 'Long-term cost savings']
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We use only premium equipment from trusted manufacturers and deliver workmanship that meets international standards. Quality is never compromised.',
      benefits: ['Premium equipment', 'Manufacturer warranties', 'Quality workmanship']
    },
    {
      icon: Clock,
      title: 'Reliable Support',
      description: 'Our commitment doesn\'t end at installation. We provide ongoing maintenance, 24/7 emergency support, and responsive customer service.',
      benefits: ['24/7 emergency support', 'Scheduled maintenance', 'Responsive service']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Every project is unique. We take time to understand your specific needs and design tailored solutions that deliver optimal performance and value.',
      benefits: ['Needs assessment', 'Custom design', 'Scalable systems']
    }
  ];

  const differentiators = [
    { icon: Zap, title: 'Fast Response', value: '24hrs', description: 'Average response time for service requests' },
    { icon: ThumbsUp, title: 'Satisfaction Rate', value: '98%', description: 'Customer satisfaction across all projects' },
    { icon: TrendingUp, title: 'Cost Savings', value: '70%', description: 'Average electricity bill reduction with solar' },
    { icon: Headphones, title: 'Support', value: '24/7', description: 'Round-the-clock technical support available' }
  ];

  const commitments = [
    'Transparent pricing with no hidden costs',
    'Detailed project documentation and handover',
    'Comprehensive warranties on all installations',
    'Regular maintenance reminders and scheduling',
    'Free initial consultation and site assessment',
    'Flexible payment options available',
    'Local presence with national reach',
    'Environmentally responsible practices'
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
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted <span className="text-secondary">Energy Partner</span> in Zimbabwe
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover why homes, businesses, and institutions across Zimbabwe 
              choose Kupuona Integral Engineers for their energy needs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
                <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Kupuona Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Six Reasons to Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              We've built our reputation on delivering exceptional value, 
              quality workmanship, and outstanding customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-secondary/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <reason.icon size={28} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-600 mb-4">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-secondary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
                Our Commitment to You
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                When you choose Kupuona Integral Engineers, you're not just getting 
                a service provider — you're gaining a long-term energy partner committed 
                to your success.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Customer-First Approach</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At Kupuona, our customers are at the heart of everything we do. 
                  We listen to your needs, provide honest advice, and deliver solutions 
                  that truly work for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target size={20} className="text-secondary" />
                    <span>Focused on your specific requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-secondary" />
                    <span>Committed to your long-term success</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Headphones size={20} className="text-secondary" />
                    <span>Always available when you need us</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Trusted By</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-6">
              Building Trust Through Excellence
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to serve leading organizations and countless families across Zimbabwe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Zimbuku Trust Microfinance', type: 'Financial Partner', description: 'Trusted financial partnership enabling flexible payment solutions for our clients.' },
              { name: 'Chicken Hut', type: 'Commercial Client', description: 'Reliable energy solutions powering business operations across multiple locations.' },
              { name: 'Ecobank', type: 'Banking Partner', description: 'Strong banking relationship supporting our business growth and client financing.' }
            ].map((partner, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{partner.name}</h3>
                <div className="text-secondary font-medium mb-3">{partner.type}</div>
                <p className="text-gray-600 text-sm">{partner.description}</p>
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
            Experience the Kupuona Difference
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the growing number of satisfied customers who trust us 
            with their energy needs. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Get Free Consultation
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

export default WhyChooseUs;
