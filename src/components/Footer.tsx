import React from 'react';
import { Car, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">GreenMotor</span>
            </div>
            <p className="text-secondary-200 text-sm leading-relaxed">
              The premier marketplace for independent car dealers. Save money, reach more buyers, and grow your business with our affordable platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-secondary-200 hover:text-white transition-colors duration-200">Browse Cars</Link></li>
              <li><Link to="/pricing" className="text-secondary-200 hover:text-white transition-colors duration-200">Pricing Plans</Link></li>
              <li><Link to="/dealer-dashboard" className="text-secondary-200 hover:text-white transition-colors duration-200">Dealer Dashboard</Link></li>
              <li><Link to="/messaging" className="text-secondary-200 hover:text-white transition-colors duration-200">Messages</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary-300" />
                <span className="text-secondary-200 text-sm">support@greenmotor.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary-300" />
                <span className="text-secondary-200 text-sm">0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary-300" />
                <span className="text-secondary-200 text-sm">London, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
          <p className="text-secondary-300 text-sm">
            © 2024 GreenMotor. All rights reserved. Empowering independent dealers nationwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;