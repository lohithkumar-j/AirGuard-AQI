
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wind, ThermometerSun, Users, MapPin, Activity, BarChart3 } from 'lucide-react';
import Hero from '@/components/Hero';
import AQICard from '@/components/AQICard';
import InfoMetric from '@/components/InfoMetric';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  // References for scroll animations
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  // Handle scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-airguard-blue/10">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Key Metrics Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto text-center mb-12 reveal-animation">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-airguard-blue/20 text-airguard-darkBlue mb-4">
              Our Impact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-airguard-charcoal mb-4">
              Making Air Quality Data Accessible
            </h2>
            <p className="text-lg text-airguard-gray">
              We're empowering communities with the data they need to make informed decisions about air quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoMetric 
              icon={<MapPin size={24} />}
              label="Cities Monitored"
              value={120}
              className="reveal-animation" 
            />
            <InfoMetric 
              icon={<Users size={24} />}
              label="Users Reached"
              value={5000000}
              suffix="+"
              className="reveal-animation" 
              duration={2500}
            />
            <InfoMetric 
              icon={<Activity size={24} />}
              label="Data Points Collected"
              value={1000000000}
              suffix="+"
              className="reveal-animation" 
              duration={3000}
            />
            <InfoMetric 
              icon={<BarChart3 size={24} />}
              label="Forecasting Accuracy"
              value={95}
              suffix="%"
              className="reveal-animation" 
              duration={1500}
            />
          </div>
        </div>
      </section>

      {/* AQI Showcase Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-airguard-blue/10 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-animation">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-airguard-green/30 text-green-700 mb-4">
                Real-time Monitoring
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-airguard-charcoal mb-4">
                Live Air Quality Updates Wherever You Are
              </h2>
              <p className="text-lg text-airguard-gray mb-6">
                Our platform provides real-time air quality data, forecasting, and health recommendations to help you make informed decisions about outdoor activities.
              </p>
              <ul className="space-y-3 mb-8">
                {['Real-time AQI monitoring for 120+ cities', 'Personalized health recommendations', 'Historical data analysis', 'Forecasting up to 72 hours in advance'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full p-1 bg-green-100 text-green-600 mr-3 mt-1">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-airguard-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/aqi-tool" 
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-airguard-darkBlue to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                Explore AQI Tool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-animation">
              <AQICard className="md:transform md:translate-y-4" />
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white shadow-lg">
                  <ThermometerSun className="w-8 h-8 text-amber-500 mb-2" />
                  <h3 className="text-lg font-semibold text-airguard-charcoal mb-1">Temperature Trends</h3>
                  <p className="text-sm text-airguard-gray">Track temperature changes and their impact on air quality.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-lg">
                  <Wind className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="text-lg font-semibold text-airguard-charcoal mb-1">Wind Patterns</h3>
                  <p className="text-sm text-airguard-gray">Understand how wind affects pollutant distribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 shadow-xl">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-[10%] right-[10%] w-40 h-40 rounded-full bg-white/10 animate-pulse-slow"></div>
              <div className="absolute bottom-[20%] left-[5%] w-64 h-64 rounded-full bg-white/5 animate-float"></div>
              <div className="absolute top-[40%] right-[20%] w-20 h-20 rounded-full bg-white/10 animate-spin-slow"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:max-w-xl mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to breathe better?
                </h2>
                <p className="text-blue-50 text-lg mb-0 md:pr-8">
                  Join thousands of users who rely on Airguard for accurate air quality data and forecasting.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300 text-center shadow-lg"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/aqi-tool" 
                  className="px-6 py-3 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors duration-300 text-center shadow-lg"
                >
                  Try Our AQI Tool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
