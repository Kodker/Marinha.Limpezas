import React from 'react';
import { Waves, Droplets, Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'vertical';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'horizontal', 
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-8 h-8'
  };

  const isVertical = variant === 'vertical';

  return (
    <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center gap-3 group cursor-pointer`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        {/* Background Circle with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"></div>
        
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-700/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
        </div>
        
        {/* Icons Container */}
        <div className="relative z-10 flex items-center justify-center">
          <Waves className={`${iconSizeClasses[size]} text-white absolute transform -translate-x-1 translate-y-1 opacity-80`} />
          <Droplets className={`${iconSizeClasses[size]} text-white/90 absolute transform translate-x-1 -translate-y-1`} />
          <Sparkles className={`${iconSizeClasses[size]} text-cyan-100 absolute transform animate-pulse`} />
        </div>
        
        {/* Sparkle Effects */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-75 animate-ping"></div>
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-200 rounded-full opacity-60 animate-pulse delay-700"></div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className={`${isVertical ? 'text-center' : 'text-left'} flex flex-col`}>
          <h1 className={`${textSizeClasses[size]} font-bold text-gray-800 leading-tight tracking-wide`}>
            <span className="text-blue-600">Marinha</span>
            <span className="text-cyan-600 ml-1">Limpezas</span>
          </h1>
          <p className={`${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} text-gray-500 font-medium tracking-wider uppercase`}>
            Cleaning Excellence
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;