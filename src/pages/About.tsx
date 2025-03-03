
import React, { useEffect } from 'react';
import { Heart, Building2, BarChart, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
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
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-airguard-blue/20 text-airguard-darkBlue mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our Mission
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-airguard-charcoal mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Building a Cleaner, Healthier Future
            </h1>
            <p className="text-xl text-airguard-gray mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Airguard is dedicated to empowering communities with accurate air quality data, enabling better decision-making for healthier living and sustainable urban planning.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-animation">
              <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80" 
                  alt="Airguard Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="reveal-animation">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-airguard-green/30 text-green-700 mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-airguard-charcoal mb-4">
                From Vision to Reality
              </h2>
              <p className="text-lg text-airguard-gray mb-6">
                Airguard was founded in 2020 by a team of environmental scientists, data engineers, and urban planners who shared a common vision: to make air quality data accessible, understandable, and actionable for everyone.
              </p>
              <p className="text-lg text-airguard-gray mb-6">
                What began as a research project quickly evolved into a comprehensive platform that now serves millions of users worldwide, from individuals concerned about their daily exposure to pollutants to city officials making critical infrastructure decisions.
              </p>
              <p className="text-lg text-airguard-gray">
                Today, we're proud to be at the forefront of air quality monitoring and forecasting, continuing to innovate and expand our services to address the growing challenges of urban air pollution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-airguard-blue/10 to-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-airguard-blue/20 text-airguard-darkBlue mb-4">
              Our Commitment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-airguard-charcoal mb-4">
              Supporting Sustainable Development Goals
            </h2>
            <p className="text-lg text-airguard-gray">
              Airguard is aligned with the United Nations Sustainable Development Goals, particularly focusing on SDG 3 (Good Health and Well-being) and SDG 11 (Sustainable Cities and Communities).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white shadow-lg reveal-animation">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-airguard-charcoal mb-4">
                SDG 3: Good Health and Well-being
              </h3>
              <p className="text-airguard-gray mb-4">
                We contribute to SDG 3 by providing accurate air quality information that helps individuals make informed decisions about outdoor activities and exposure to pollutants, directly improving health outcomes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-red-100 text-red-600 mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-airguard-charcoal">Reducing respiratory illness risks</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-red-100 text-red-600 mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-airguard-charcoal">Supporting vulnerable populations</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-red-100 text-red-600 mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-airguard-charcoal">Facilitating preventive healthcare</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white shadow-lg reveal-animation">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-6">
                <Building2 size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-airguard-charcoal mb-4">
                SDG 11: Sustainable Cities and Communities
              </h3>
              <p className="text-airguard-gray mb-4">
                Our work supports SDG 11 by providing urban planners and policymakers with the data they need to design more sustainable cities with improved air quality and reduced environmental impact.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-amber-100 text-amber-600 mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-airguard-charcoal">Informing urban development decisions</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-amber-100 text-amber-600 mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-airguard-charcoal">Supporting green infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full p-1 bg-amber-100 text-amber-600 mr-3 mt-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-airguard-charcoal">Promoting sustainable transportation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-airguard-green/30 text-green-700 mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-airguard-charcoal mb-4">
              Guided by Purpose
            </h2>
            <p className="text-lg text-airguard-gray">
              At Airguard, our values shape everything we do, from the technology we develop to the partnerships we form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal-animation">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                Data Integrity
              </h3>
              <p className="text-airguard-gray">
                We're committed to providing accurate, transparent, and verifiable data that users can trust without reservation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal-animation">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                Environmental Stewardship
              </h3>
              <p className="text-airguard-gray">
                We believe in the responsible use of resources and technologies to minimize our own environmental footprint.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 reveal-animation lg:col-span-1 md:col-span-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                Inclusive Access
              </h3>
              <p className="text-airguard-gray">
                We're dedicated to making air quality information accessible to all, regardless of technical expertise or resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-airguard-blue/10 to-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-airguard-blue/20 text-airguard-darkBlue mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-airguard-charcoal mb-4">
              Milestones Along the Way
            </h2>
            <p className="text-lg text-airguard-gray">
              From our founding to the present day, we've achieved significant milestones in our mission to improve air quality monitoring and forecasting.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline items */}
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-blue-400 before:to-green-400 md:before:mx-auto md:before:translate-x-0">
              {/* 2020 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-animation">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 shadow-md md:mx-auto md:group-odd:translate-x-5 md:group-even:-translate-x-5">
                  <span className="text-white text-xs font-bold">2020</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md ml-6 md:ml-0">
                  <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                    Founded Airguard
                  </h3>
                  <p className="text-airguard-gray">
                    Established with the mission to democratize access to air quality data and forecasting.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-animation">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 shadow-md md:mx-auto md:group-odd:translate-x-5 md:group-even:-translate-x-5">
                  <span className="text-white text-xs font-bold">2021</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md ml-6 md:ml-0">
                  <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                    Launch of Beta Platform
                  </h3>
                  <p className="text-airguard-gray">
                    Released our first version covering 20 major cities with real-time AQI monitoring.
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-animation">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-400 shadow-md md:mx-auto md:group-odd:translate-x-5 md:group-even:-translate-x-5">
                  <span className="text-white text-xs font-bold">2022</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md ml-6 md:ml-0">
                  <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                    Expanded Coverage
                  </h3>
                  <p className="text-airguard-gray">
                    Reached 75 cities globally and launched our forecasting engine with 85% accuracy.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-animation">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-500 shadow-md md:mx-auto md:group-odd:translate-x-5 md:group-even:-translate-x-5">
                  <span className="text-white text-xs font-bold">2023</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md ml-6 md:ml-0">
                  <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                    AI Integration
                  </h3>
                  <p className="text-airguard-gray">
                    Incorporated machine learning models to improve forecasting accuracy to 95% and expanded to 120+ cities.
                  </p>
                </div>
              </div>

              {/* Today */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal-animation">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gradient-to-br from-green-400 to-green-600 shadow-md md:mx-auto md:group-odd:translate-x-5 md:group-even:-translate-x-5">
                  <span className="text-white text-xs font-bold">Now</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-md ml-6 md:ml-0">
                  <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
                    Today & Beyond
                  </h3>
                  <p className="text-airguard-gray">
                    Continuing to innovate with advanced analytics, expanding services, and partnering with cities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
