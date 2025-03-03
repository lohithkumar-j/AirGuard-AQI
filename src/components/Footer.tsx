
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-airguard-blue/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <span className="text-airguard-darkBlue">Air</span>
              <span className="text-airguard-charcoal">guard</span>
            </Link>
            <p className="text-airguard-charcoal/80 max-w-xs">
              Empowering urban planners and the public with cutting-edge air quality forecasting and insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-airguard-charcoal hover:text-airguard-darkBlue transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-airguard-charcoal hover:text-airguard-darkBlue transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-airguard-charcoal hover:text-airguard-darkBlue transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-airguard-charcoal hover:text-airguard-darkBlue transition-colors duration-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-airguard-charcoal">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/aqi-tool" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  AQI Tool
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-airguard-charcoal">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Real-time Forecasting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Urban Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Public Health Insights
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-airguard-charcoal/80 hover:text-airguard-darkBlue transition-colors duration-300">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-airguard-charcoal">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-airguard-darkBlue flex-shrink-0 mt-1" />
                <span className="text-airguard-charcoal/80">123 Innovation Street, Eco City, EC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-airguard-darkBlue flex-shrink-0" />
                <span className="text-airguard-charcoal/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-airguard-darkBlue flex-shrink-0" />
                <span className="text-airguard-charcoal/80">info@airguard.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-airguard-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-airguard-charcoal/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Airguard. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-airguard-charcoal/60 hover:text-airguard-darkBlue text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-airguard-charcoal/60 hover:text-airguard-darkBlue text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-airguard-charcoal/60 hover:text-airguard-darkBlue text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
