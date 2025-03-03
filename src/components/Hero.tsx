
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxBgRef.current && heroRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.3;
        parallaxBgRef.current.style.transform = `translateY(-${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxBgRef}
        className="absolute inset-0 z-0 bg-gradient-to-b from-airguard-blue/30 to-airguard-green/30"
      >
        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-airguard-darkBlue/20 animate-pulse-slow blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-airguard-blue/30 animate-float blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-airguard-green/20 animate-pulse-slow blur-2xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/80 text-airguard-darkBlue mb-6 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block w-2 h-2 rounded-full bg-airguard-darkBlue mr-2"></span>
            Breathe Better with Airguard
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-airguard-charcoal leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            The Future of <span className="text-airguard-darkBlue">Air Quality</span> Monitoring & Forecasting
          </h1>
          
          <p className="text-lg md:text-xl text-airguard-charcoal/80 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Empowering urban planners and citizens with real-time insights for healthier, more sustainable cities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link 
              to="/aqi-tool" 
              className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-airguard-darkBlue to-blue-500 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
            >
              Explore AQI Tool
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              to="/about" 
              className="px-6 py-3 rounded-full text-airguard-darkBlue font-medium bg-white hover:bg-gray-50 border border-airguard-blue/30 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="text-sm text-airguard-charcoal/70 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-airguard-charcoal/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-airguard-darkBlue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
