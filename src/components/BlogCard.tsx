
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageSrc: string;
  slug: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  category,
  date,
  readTime,
  imageSrc,
  slug,
  className = "",
}) => {
  return (
    <article className={cn(
      "overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg group",
      className
    )}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-airguard-darkBlue rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-xs text-airguard-gray mb-3">
          <span className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-airguard-charcoal mb-2 line-clamp-2 group-hover:text-airguard-darkBlue transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-airguard-gray mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-airguard-darkBlue"
        >
          Read More
          <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
