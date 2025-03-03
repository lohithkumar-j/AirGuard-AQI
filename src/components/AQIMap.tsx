
import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

const AQIMap = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate map loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
      {isLoading ? (
        // Loading state
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
          <div className="w-12 h-12 border-4 border-airguard-blue border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-airguard-charcoal">Loading AQI Map...</p>
        </div>
      ) : (
        <>
          {/* Map background - in a real implementation, this would be replaced with an actual map library */}
          <div className="absolute inset-0 bg-gray-100">
            <svg viewBox="0 0 800 600" className="w-full h-full opacity-20">
              <path d="M0,0 L800,0 L800,600 L0,600 Z" fill="#e5e7eb" />
              <path d="M100,100 Q400,50 700,200 T500,400 T200,300 Z" fill="#d3e4fd" stroke="#0ea5e9" strokeWidth="2" />
              <path d="M200,200 Q500,150 600,300 T400,500 T100,400 Z" fill="#f2fce2" stroke="#86efac" strokeWidth="2" />
            </svg>
          </div>

          {/* Map pins */}
          <div className="absolute inset-0">
            {/* San Francisco */}
            <div className="absolute top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-xs shadow">
                San Francisco: 42 AQI
              </div>
            </div>

            {/* New York */}
            <div className="absolute top-[25%] left-[80%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-xs shadow">
                New York: 85 AQI
              </div>
            </div>

            {/* Los Angeles */}
            <div className="absolute top-[45%] left-[15%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-xs shadow">
                Los Angeles: 112 AQI
              </div>
            </div>

            {/* Chicago */}
            <div className="absolute top-[35%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-xs shadow">
                Chicago: 48 AQI
              </div>
            </div>

            {/* Miami */}
            <div className="absolute top-[65%] left-[75%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded text-xs shadow">
                Miami: 32 AQI
              </div>
            </div>
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 max-w-xs">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-airguard-darkBlue mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-airguard-gray">
                This is a simplified visualization. In the actual tool, you would see a real-time interactive map with detailed AQI data.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AQIMap;
