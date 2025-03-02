import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import FleetLogo from './FleetLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fleet-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <FleetLogo className="h-10 w-10" />
              <span className="ml-2 text-xl font-bold text-white">Fleet Solar</span>
            </div>
            <p className="mt-4 text-gray-300">
              Powering homes and businesses with clean, renewable solar energy in Chicago and Dallas.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-fleet-blue transition-colors">Residential Solar</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-fleet-blue transition-colors">Commercial Solar</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-fleet-blue transition-colors">Industrial Solar</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-fleet-blue transition-colors">Energy Storage</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-fleet-blue transition-colors">Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">News</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-fleet-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Locations</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <strong className="text-white">Chicago Office</strong><br />
                123 Solar Street<br />
                Chicago, IL 60007
              </li>
              <li className="text-gray-300 mt-4">
                <strong className="text-white">Dallas Office</strong><br />
                456 Energy Avenue<br />
                Dallas, TX 75001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">© {new Date().getFullYear()} Fleet Solar. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-fleet-blue transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;