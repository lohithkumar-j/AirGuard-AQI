
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface InfoMetricProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const InfoMetric: React.FC<InfoMetricProps> = ({
  icon,
  label,
  value,
  suffix = "",
  duration = 2000,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Increment counter animation
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const totalFrames = 60;
    const increment = end / totalFrames;
    const timePerFrame = duration / totalFrames;
    
    const counter = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      }
    }, timePerFrame);

    return () => clearInterval(counter);
  }, [value, duration, isInView]);

  // Intersection observer for triggering animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex flex-col items-center p-6 rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="p-3 rounded-full bg-airguard-blue/20 text-airguard-darkBlue mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-airguard-charcoal mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-airguard-gray text-center">
        {label}
      </div>
    </div>
  );
};

export default InfoMetric;
