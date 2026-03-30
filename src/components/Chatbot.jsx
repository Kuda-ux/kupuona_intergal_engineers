import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, ExternalLink } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "👋 Welcome to Kupuona Integral Engineers!\n\nI'm your virtual assistant. How can I help you today?\n\n• Solar installations\n• Generator solutions\n• Electrical services\n• Get a quote\n• Contact information"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'Solar Installation',
    'Generator Services',
    'Get a Quote',
    'Contact Info'
  ];

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Solar related
    if (msg.includes('solar') || msg.includes('panel') || msg.includes('sun') || msg.includes('photovoltaic')) {
      return {
        text: "☀️ **Solar Energy Solutions**\n\nKupuona Integral Engineers offers complete solar solutions:\n\n✅ Residential solar systems\n✅ Commercial installations\n✅ Grid-tie & off-grid systems\n✅ Battery storage solutions\n✅ System design & consultation\n✅ Maintenance & repairs\n\n**Benefits:**\n• Reduce electricity bills by up to 80%\n• Clean, renewable energy\n• Increase property value\n• Energy independence\n\nWould you like a free site assessment and quote?",
        showWhatsApp: true
      };
    }
    
    // Generator related
    if (msg.includes('generator') || msg.includes('backup') || msg.includes('power outage') || msg.includes('diesel')) {
      return {
        text: "⚡ **Generator Solutions**\n\nWe provide comprehensive generator services:\n\n✅ Generator sales (various capacities)\n✅ Leasing options\n✅ Short & long-term rentals\n✅ Professional installation\n✅ Maintenance & servicing\n✅ Emergency repairs\n\n**Available Capacities:**\n• Residential: 5kVA - 20kVA\n• Commercial: 20kVA - 100kVA\n• Industrial: 100kVA+\n\nNeed a generator solution? Let's discuss your requirements!",
        showWhatsApp: true
      };
    }
    
    // Electrical related
    if (msg.includes('electric') || msg.includes('wiring') || msg.includes('installation') || msg.includes('db board') || msg.includes('circuit')) {
      return {
        text: "🔌 **Electrical Services**\n\nOur certified electricians handle:\n\n✅ Commercial wiring\n✅ Residential installations\n✅ DB board installations\n✅ Electrical maintenance\n✅ Fault finding & repairs\n✅ Safety inspections\n✅ Turnkey solutions\n\nAll work is code-compliant and safety-focused. Our team has 10+ years of experience.\n\nWant to schedule an electrical assessment?",
        showWhatsApp: true
      };
    }
    
    // Pricing/Quote
    if (msg.includes('price') || msg.includes('cost') || msg.includes('quote') || msg.includes('how much') || msg.includes('estimate') || msg.includes('budget')) {
      return {
        text: "💰 **Get a Free Quote**\n\nPricing depends on your specific requirements. We offer:\n\n✅ FREE site assessments\n✅ Customized solutions\n✅ Transparent pricing\n✅ Flexible payment options\n✅ No hidden costs\n\nTo get an accurate quote, our team needs to understand your:\n• Energy requirements\n• Property size\n• Current setup\n• Budget range\n\n**Contact us now for a free consultation!**",
        showWhatsApp: true,
        isComplex: true
      };
    }
    
    // Location/Address
    if (msg.includes('location') || msg.includes('address') || msg.includes('where') || msg.includes('office') || msg.includes('visit')) {
      return {
        text: "📍 **Our Location**\n\n**Kupuona Integral Engineers**\n14752 Makoni Shopping Centre\nChitungwiza, Zimbabwe\n\n**Service Areas:**\n• Chitungwiza\n• Harare\n• Bulawayo\n• Mutare\n• Gweru\n• All major cities in Zimbabwe\n\n**Business Hours:**\nMonday - Friday: 8:00 AM - 5:00 PM\nSaturday: 8:00 AM - 1:00 PM\nSunday: Closed\n\nWe also offer on-site consultations!",
        showWhatsApp: false
      };
    }
    
    // Contact
    if (msg.includes('contact') || msg.includes('call') || msg.includes('phone') || msg.includes('whatsapp') || msg.includes('email') || msg.includes('reach')) {
      return {
        text: "📞 **Contact Kupuona Integral Engineers**\n\n**Phone:**\n+263 771 492 799\n\n**WhatsApp:**\n+263 718 340 328\n\n**Email:**\ninfo@kupuonazim.co.zw\nadmin@kupuonazim.co.zw\n\n**Address:**\n14752 Makoni Shopping Centre\nChitungwiza, Zimbabwe\n\n**Hours:**\nMon-Fri: 8AM - 5PM\nSat: 8AM - 1PM\n\nFor fastest response, WhatsApp us!",
        showWhatsApp: true
      };
    }
    
    // Services overview
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('offer') || msg.includes('help')) {
      return {
        text: "🏢 **Kupuona Integral Engineers Services**\n\nWe provide integrated energy solutions:\n\n**1️⃣ Solar Energy Systems**\n• Design & installation\n• Grid-tie & off-grid\n• Battery storage\n• Maintenance\n\n**2️⃣ Generator Solutions**\n• Sales & supply\n• Leasing & rentals\n• Installation & servicing\n\n**3️⃣ Electrical Installations**\n• Commercial wiring\n• Residential work\n• DB boards & repairs\n\n**Our Process:**\nDesign → Supply → Install → Maintain\n\nWhich service interests you?",
        showWhatsApp: false
      };
    }
    
    // Maintenance
    if (msg.includes('maintenance') || msg.includes('repair') || msg.includes('fix') || msg.includes('broken') || msg.includes('not working')) {
      return {
        text: "🔧 **Maintenance & Repairs**\n\nWe offer comprehensive maintenance:\n\n✅ Solar system maintenance\n✅ Generator servicing\n✅ Electrical repairs\n✅ Emergency call-outs\n✅ Preventive maintenance plans\n✅ 24/7 emergency support\n\n**Response Times:**\n• Emergency: Same day\n• Standard: Within 48 hours\n• Scheduled: As agreed\n\nHaving an issue? Let us help!",
        showWhatsApp: true,
        isComplex: true
      };
    }
    
    // Thank you
    if (msg.includes('thank') || msg.includes('thanks') || msg.includes('appreciate')) {
      return {
        text: "You're welcome! 😊\n\nKupuona Integral Engineers is always here to help with your energy needs.\n\nIs there anything else I can assist you with?\n\n• Solar installations\n• Generator solutions\n• Electrical services\n• Get a quote",
        showWhatsApp: false
      };
    }
    
    // Greeting
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good morning') || msg.includes('good afternoon') || msg.includes('good evening')) {
      return {
        text: "Hello! 👋 Welcome to Kupuona Integral Engineers!\n\nI'm here to help you with:\n\n☀️ Solar installations\n⚡ Generator solutions\n🔌 Electrical services\n💰 Quotes & pricing\n📍 Contact information\n\nWhat would you like to know about?",
        showWhatsApp: false
      };
    }

    // About company
    if (msg.includes('about') || msg.includes('company') || msg.includes('who are you') || msg.includes('kupuona')) {
      return {
        text: "🏢 **About Kupuona Integral Engineers**\n\nWe are Zimbabwe's trusted energy partner, providing integrated solutions since 2014.\n\n**Our Mission:**\nTo deliver high-quality electrical and energy services that promote efficiency and sustainability.\n\n**What Sets Us Apart:**\n✅ 10+ years experience\n✅ 150+ completed projects\n✅ Certified technicians\n✅ Quality equipment\n✅ Excellent after-sales support\n✅ Competitive pricing\n\n**Trusted By:**\n• Zimbuku Trust Microfinance\n• Chicken Hut\n• Ecobank\n• The Planet Pharmaceuticals\n\nWant to learn more?",
        showWhatsApp: false
      };
    }
    
    // Default response - redirect to WhatsApp for complex queries
    return {
      text: "Thank you for your message! 🙏\n\nFor detailed assistance with your specific requirements, I recommend speaking directly with our team.\n\nThey can provide:\n✅ Personalized consultation\n✅ Accurate pricing\n✅ Technical advice\n✅ Site assessment scheduling\n\n**Contact us now:**\n📞 +263 771 492 799\n💬 WhatsApp: +263 718 340 328\n\nOr ask me about:\n• Solar installations\n• Generator services\n• Electrical work\n• Our locations",
      showWhatsApp: true,
      isComplex: true
    };
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = text.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMessage);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: response.text,
        showWhatsApp: response.showWhatsApp,
        isComplex: response.isComplex
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickReply = (reply) => {
    handleSend(reply);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/263718340328"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="absolute left-full ml-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-red-500 hover:bg-red-600 rotate-0' : 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageCircle size={28} className="text-white" />
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-light p-5 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <Bot size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Kupuona Assistant</h3>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Replies instantly
                </div>
              </div>
              <a
                href="https://wa.me/263718340328"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`flex items-start gap-3 ${
                    message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' ? 'bg-secondary' : 'bg-primary'
                  }`}>
                    {message.type === 'user' ? (
                      <User size={18} className="text-white" />
                    ) : (
                      <Bot size={18} className="text-white" />
                    )}
                  </div>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-secondary text-white rounded-tr-none'
                      : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                  }`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                </div>
                
                {/* WhatsApp CTA for complex queries */}
                {message.type === 'bot' && message.showWhatsApp && (
                  <div className="ml-12 mt-3">
                    <a
                      href="https://wa.me/263718340328"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        message.isComplex 
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-green-50 hover:bg-green-100 text-green-700 border border-green-200'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      {message.isComplex ? 'Chat with Our Team' : 'Continue on WhatsApp'}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-white border-t border-gray-100">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="flex-shrink-0 px-3 py-1.5 bg-gray-100 hover:bg-secondary hover:text-white text-gray-700 text-xs font-medium rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-12 h-12 bg-secondary hover:bg-secondary-light disabled:bg-gray-300 rounded-xl flex items-center justify-center transition-colors"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
              <Phone size={12} />
              <span>Or call: <a href="tel:+263771492799" className="text-secondary hover:underline">+263 771 492 799</a></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
