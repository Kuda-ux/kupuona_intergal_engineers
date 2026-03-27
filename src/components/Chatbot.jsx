import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! Welcome to Kupuona Integral Engineers. I'm here to help you with questions about our solar, generator, and electrical services. How can I assist you today?"
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

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    // Solar related
    if (msg.includes('solar') || msg.includes('panel') || msg.includes('sun')) {
      return "We offer comprehensive solar energy solutions including system design, installation, and maintenance. Our solar systems can reduce your electricity bills by up to 80%. Would you like a free quote? Call us at +263 771 492 799 or WhatsApp +263 718 340 328.";
    }
    
    // Generator related
    if (msg.includes('generator') || msg.includes('backup') || msg.includes('power outage')) {
      return "We provide complete generator solutions including sales, leasing, rentals, installation, and maintenance. Our generators range from small residential units to large industrial systems. Contact us at +263 771 492 799 for more information.";
    }
    
    // Electrical related
    if (msg.includes('electric') || msg.includes('wiring') || msg.includes('installation')) {
      return "Our certified electricians handle all electrical work including commercial and residential wiring, maintenance, repairs, and turnkey infrastructure solutions. All our work is code-compliant and safety-focused.";
    }
    
    // Pricing/Quote
    if (msg.includes('price') || msg.includes('cost') || msg.includes('quote') || msg.includes('how much')) {
      return "Pricing depends on your specific requirements. We offer free site assessments and consultations. Contact us for a personalized quote:\n📞 +263 771 492 799\n💬 WhatsApp: +263 718 340 328\n📧 info@kupuonazim.co.zw";
    }
    
    // Location/Address
    if (msg.includes('location') || msg.includes('address') || msg.includes('where') || msg.includes('office')) {
      return "We're located at 14752 Makoni Shopping Centre, Chitungwiza, Zimbabwe. We serve clients throughout Zimbabwe including Harare, Bulawayo, Mutare, and surrounding areas.";
    }
    
    // Contact
    if (msg.includes('contact') || msg.includes('call') || msg.includes('phone') || msg.includes('whatsapp')) {
      return "You can reach us through:\n📞 Phone: +263 771 492 799\n💬 WhatsApp: +263 718 340 328\n📧 Email: info@kupuonazim.co.zw\n📧 Admin: admin@kupuonazim.co.zw\n\nWe're available Monday-Friday 8AM-5PM, Saturday 8AM-1PM.";
    }
    
    // Services
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('offer')) {
      return "Kupuona Integral Engineers provides three core services:\n\n1️⃣ Solar Energy Systems - Design, installation & maintenance\n2️⃣ Generator Solutions - Sales, leasing, rentals & servicing\n3️⃣ Electrical Installations - Commercial & residential wiring\n\nWe provide end-to-end solutions: Design → Supply → Install → Maintain";
    }
    
    // Maintenance
    if (msg.includes('maintenance') || msg.includes('repair') || msg.includes('service')) {
      return "We offer comprehensive maintenance services for all our installations including solar systems, generators, and electrical infrastructure. We have 24/7 emergency support available. Call +263 771 492 799 for immediate assistance.";
    }
    
    // Thank you
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with? Feel free to ask about our solar, generator, or electrical services.";
    }
    
    // Greeting
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg.includes('good')) {
      return "Hello! How can I help you today? I can provide information about our solar installations, generator solutions, or electrical services.";
    }
    
    // Default response
    return "Thank you for your message. For detailed assistance, please contact our team:\n\n📞 +263 771 492 799\n💬 WhatsApp: +263 718 340 328\n📧 info@kupuonazim.co.zw\n\nOr ask me about our solar, generator, or electrical services!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-secondary hover:bg-secondary-light'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageCircle size={28} className="text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-semibold">Kupuona Assistant</h3>
                <p className="text-xs text-gray-300">Online | Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.type === 'user' ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' ? 'bg-secondary' : 'bg-primary'
                }`}>
                  {message.type === 'user' ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>
                <div className={`max-w-[75%] p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-secondary text-white rounded-tr-none'
                    : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-secondary hover:bg-secondary-light disabled:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              >
                <Send size={18} className="text-white" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Or call us: <a href="tel:+263771492799" className="text-secondary">+263 771 492 799</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
