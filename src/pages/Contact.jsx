import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+263 771 492 799', '+263 718 340 328'],
      action: 'tel:+263771492799'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@kupuonazim.co.zw', 'admin@kupuonazim.co.zw'],
      action: 'mailto:info@kupuonazim.co.zw'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['14752 Makoni Shopping Centre', 'Chitungwiza, Zimbabwe'],
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 8:00 AM - 1:00 PM'],
      action: null
    }
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's <span className="text-secondary">Power</span> Your Future
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your energy infrastructure? Get in touch with our team 
              for a free consultation and personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  info.action ? (
                    <a 
                      key={idx}
                      href={info.action}
                      className="block text-gray-600 hover:text-secondary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all"
                        placeholder="+263 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="solar">Solar Energy Systems</option>
                        <option value="generator">Generator Solutions</option>
                        <option value="electrical">Electrical Installations</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact & Map */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Response via WhatsApp</h3>
                    <p className="text-green-100 mb-4">
                      Need a faster response? Chat with us directly on WhatsApp for immediate assistance.
                    </p>
                    <a
                      href="https://wa.me/263771492799"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all"
                    >
                      <MessageCircle size={20} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Location</h3>
                    <p className="text-gray-500">
                      14752 Makoni Shopping Centre<br />
                      Chitungwiza, Zimbabwe
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-primary mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 text-sm">
                    We welcome walk-in consultations during business hours. 
                    Our team is ready to discuss your energy needs and provide expert advice.
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-2">24/7 Emergency Support</h3>
                <p className="text-gray-300 text-sm mb-4">
                  For urgent generator or electrical emergencies, our support team is available around the clock.
                </p>
                <a
                  href="tel:+263771492799"
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary-light transition-colors"
                >
                  <Phone size={18} />
                  +263 771 492 799
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-primary mt-4 mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do I request a quote for solar installation?',
                a: 'You can request a quote by filling out the contact form above, calling us directly at +263 771 492 799, or sending a WhatsApp message. We\'ll schedule a free site assessment to understand your needs and provide a detailed quotation.'
              },
              {
                q: 'Do you offer financing options for solar systems?',
                a: 'Yes, through our partnership with Zimbuku Trust Microfinance, we offer flexible payment plans to make solar energy accessible. Contact us to learn about available financing options.'
              },
              {
                q: 'What areas do you service in Zimbabwe?',
                a: 'While based in Chitungwiza, we provide services throughout Zimbabwe including Harare, Bulawayo, Mutare, Gweru, and surrounding areas. Contact us to confirm service availability in your location.'
              },
              {
                q: 'How long does a typical solar installation take?',
                a: 'Residential installations typically take 1-3 days, while commercial projects may take 1-2 weeks depending on system size and complexity. We\'ll provide a detailed timeline during the quotation process.'
              },
              {
                q: 'Do you provide maintenance services after installation?',
                a: 'Yes, we offer comprehensive maintenance packages including regular inspections, cleaning, and repairs. All our installations come with warranty coverage and ongoing support.'
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

export default Contact;
