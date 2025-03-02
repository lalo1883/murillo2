import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Get a Free Quote</h2>
          <p className="section-subtitle">
            Ready to start saving with solar? Contact us today for a free, no-obligation quote.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-fleet-dark mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">
                  Have questions about solar energy? Our team is here to help you make the switch to clean, renewable energy.
                </p>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-fleet-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-fleet-dark">Locations</h4>
                  <p className="text-gray-600">123 Solar Street, Chicago, IL 60007</p>
                  <p className="text-gray-600">456 Energy Avenue, Dallas, TX 75001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-fleet-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-fleet-dark">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-fleet-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-fleet-dark">Email</h4>
                  <p className="text-gray-600">info@fleetsolar.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-fleet-light p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fleet-blue focus:border-fleet-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fleet-blue focus:border-fleet-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fleet-blue focus:border-fleet-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fleet-blue focus:border-fleet-blue"
                  >
                    <option value="">Select your location</option>
                    <option value="Chicago">Chicago, IL</option>
                    <option value="Dallas">Dallas, TX</option>
                    <option value="Chicago Suburbs">Chicago Suburbs</option>
                    <option value="Dallas Suburbs">Dallas Suburbs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fleet-blue focus:border-fleet-blue"
                    placeholder="Tell us about your project or ask any questions..."
                  ></textarea>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;