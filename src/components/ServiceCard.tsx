
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  details,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "rounded-2xl bg-white shadow-md transition-all duration-300 overflow-hidden",
        isExpanded ? "shadow-lg" : "hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="p-3 rounded-full bg-airguard-blue/20 text-airguard-darkBlue mr-4 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-airguard-charcoal mb-2">
              {title}
            </h3>
            <p className="text-airguard-gray">
              {description}
            </p>
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
            <p className="text-airguard-charcoal/80 text-sm">
              {details}
            </p>
          </div>
        )}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-sm font-medium text-airguard-darkBlue transition-colors duration-300 hover:text-blue-700"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="ml-1 w-4 h-4" />
            </>
          ) : (
            <>
              <span>Learn More</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
