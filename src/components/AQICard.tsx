
import React, { useState, useEffect } from 'react';
import { Wind, ThermometerSun, Droplets, AlertTriangle } from 'lucide-react';

interface AQICardProps {
  className?: string;
}

// AQI level color mappings
const aqiColors = {
  good: "bg-green-100 text-green-800 border-green-200",
  moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  unhealthySensitive: "bg-orange-100 text-orange-800 border-orange-200",
  unhealthy: "bg-red-100 text-red-800 border-red-200",
  veryUnhealthy: "bg-purple-100 text-purple-800 border-purple-200",
  hazardous: "bg-rose-100 text-rose-800 border-rose-200"
};

const getAQIStatus = (value: number) => {
  if (value <= 50) return { level: "Good", color: aqiColors.good };
  if (value <= 100) return { level: "Moderate", color: aqiColors.moderate };
  if (value <= 150) return { level: "Unhealthy for Sensitive Groups", color: aqiColors.unhealthySensitive };
  if (value <= 200) return { level: "Unhealthy", color: aqiColors.unhealthy };
  if (value <= 300) return { level: "Very Unhealthy", color: aqiColors.veryUnhealthy };
  return { level: "Hazardous", color: aqiColors.hazardous };
};

const AQICard: React.FC<AQICardProps> = ({ className = "" }) => {
  const [aqiValue, setAqiValue] = useState(35);
  const [cityName, setCityName] = useState("San Francisco");
  const [temperature, setTemperature] = useState(72);
  const [humidity, setHumidity] = useState(65);
  const [windSpeed, setWindSpeed] = useState(8);

  // Simulate changing values for the live effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly adjust AQI within +/- 5 points
      setAqiValue(prev => {
        const newValue = prev + (Math.random() * 10 - 5);
        return Math.round(Math.max(0, Math.min(300, newValue)));
      });

      // Slightly adjust other metrics
      setTemperature(prev => Math.round(prev + (Math.random() * 2 - 1)));
      setHumidity(prev => Math.round(Math.max(30, Math.min(90, prev + (Math.random() * 4 - 2)))));
      setWindSpeed(prev => Number((prev + (Math.random() - 0.5)).toFixed(1)));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const aqiStatus = getAQIStatus(aqiValue);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg bg-white ${className}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-airguard-charcoal">{cityName}</h3>
            <p className="text-sm text-airguard-gray">Current Air Quality</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${aqiStatus.color}`}>
            {aqiStatus.level}
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="text-5xl font-bold text-airguard-darkBlue">{aqiValue}</div>
          <div className="ml-3">
            <div className="text-sm font-medium text-airguard-charcoal">AQI</div>
            <div className="text-xs text-airguard-gray">US EPA Standard</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-2 rounded-lg bg-airguard-blue/20">
            <ThermometerSun className="w-5 h-5 mx-auto mb-1 text-airguard-darkBlue" />
            <div className="text-xs text-airguard-gray">Temp</div>
            <div className="font-semibold text-airguard-charcoal">{temperature}°F</div>
          </div>
          
          <div className="p-2 rounded-lg bg-airguard-blue/20">
            <Droplets className="w-5 h-5 mx-auto mb-1 text-airguard-darkBlue" />
            <div className="text-xs text-airguard-gray">Humidity</div>
            <div className="font-semibold text-airguard-charcoal">{humidity}%</div>
          </div>
          
          <div className="p-2 rounded-lg bg-airguard-blue/20">
            <Wind className="w-5 h-5 mx-auto mb-1 text-airguard-darkBlue" />
            <div className="text-xs text-airguard-gray">Wind</div>
            <div className="font-semibold text-airguard-charcoal">{windSpeed} mph</div>
          </div>
        </div>
      </div>

      <div className={`p-4 text-sm ${aqiValue > 100 ? 'bg-amber-50' : 'bg-airguard-green/30'}`}>
        {aqiValue > 100 ? (
          <div className="flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
            <span>Consider reducing outdoor activities today.</span>
          </div>
        ) : (
          <div className="text-airguard-charcoal/80">Air quality is good for outdoor activities.</div>
        )}
      </div>
    </div>
  );
};

export default AQICard;
