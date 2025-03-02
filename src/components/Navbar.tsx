import React, { useState } from 'react';
import { Menu, X, Sun, MapPin } from 'lucide-react';
import FleetLogo from '../assets/FLEET-SALES-LOGO-FLAT-HORIZONTAL.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-fleet-dark text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={FleetLogo} alt="Fleet Logo" className="h-12 w-auto" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-fleet-blue transition-colors">Services</a>
            <a href="#benefits" className="text-gray-300 hover:text-fleet-blue transition-colors">Benefits</a>
            <a href="#process" className="text-gray-300 hover:text-fleet-blue transition-colors">Process</a>
            <a href="#testimonials" className="text-gray-300 hover:text-fleet-blue transition-colors">Testimonials</a>
            <div className="flex items-center text-gray-300">
              <MapPin size={18} className="mr-1 text-fleet-blue" />
              <span>Chicago & Dallas</span>
            </div>
            <a href="#contact" className="btn-primary">Get a Quote</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-fleet-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-fleet-dark shadow-lg">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-fleet-blue">Services</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-300 hover:text-fleet-blue">Benefits</a>
            <a href="#process" className="block px-3 py-2 text-gray-300 hover:text-fleet-blue">Process</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:text-fleet-blue">Testimonials</a>
            <div className="flex items-center px-3 py-2 text-gray-300">
              <MapPin size={18} className="mr-1 text-fleet-blue" />
              <span>Chicago & Dallas</span>
            </div>
            <a href="#contact" className="block px-3 py-2 btn-primary text-center mx-3 mt-4">Get a Quote</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;