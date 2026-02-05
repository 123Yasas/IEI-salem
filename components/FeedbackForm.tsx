
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Feedback sent successfully! We will get back to you soon.");
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-[#002b5c] text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-300">
                Have questions about membership or events? Feel free to reach out to our team at the Salem Local Centre.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg"><MapPin /></div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-300">IEI Salem Local Centre, Opp. to Government Engineering College, Salem - 636 011.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg"><Phone /></div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-300">+91 427 244 8450</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg"><Mail /></div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-300">salemlc@ieindia.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-white text-gray-900 rounded-xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#002b5c] mb-6">Send Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002b5c] outline-none transition-all"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002b5c] outline-none transition-all"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002b5c] outline-none transition-all"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#002b5c] outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-[#002b5c] text-white font-bold py-4 px-12 rounded-lg hover:bg-[#004080] transition-colors flex items-center justify-center gap-2"
              >
                Send Feedback <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
