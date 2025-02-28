
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface RotatingCircleProps {
  className?: string;
}

const RotatingCircle = ({ className }: RotatingCircleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure animations trigger correctly
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "relative w-[300px] h-[300px] opacity-0",
      isVisible && "animate-fade-in",
      className
    )}>
      {/* Outer circle with gradient border */}
      <div className="absolute inset-0 rounded-full border-[1px] border-neutral-200 backdrop-blur-sm animate-rotate-slow"></div>
      
      {/* Second rotating circle - reverse direction */}
      <div className="absolute inset-[25px] rounded-full border-[1px] border-neutral-300 backdrop-blur-sm animate-rotate-reverse-medium"></div>
      
      {/* Third rotating circle */}
      <div className="absolute inset-[50px] rounded-full border-[1px] border-neutral-200 backdrop-blur-sm animate-rotate-medium"></div>
      
      {/* Fourth rotating circle - reverse direction */}
      <div className="absolute inset-[75px] rounded-full border-[1px] border-neutral-300 backdrop-blur-sm animate-rotate-reverse-fast"></div>
      
      {/* Inner circle with subtle glow */}
      <div className="absolute inset-[100px] rounded-full bg-white/80 shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-pulse-subtle">
        {/* Centered dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
        </div>
      </div>
      
      {/* Stationary dots on the circles */}
      <div className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-800"></div>
      <div className="absolute left-0 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-700"></div>
      <div className="absolute right-0 top-1/2 w-3 h-3 translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-600"></div>
      <div className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-neutral-900"></div>
      
      {/* Additional small dots */}
      <div className="absolute left-[15%] top-[15%] w-2 h-2 rounded-full bg-neutral-500"></div>
      <div className="absolute right-[15%] top-[15%] w-2 h-2 rounded-full bg-neutral-400"></div>
      <div className="absolute left-[15%] bottom-[15%] w-2 h-2 rounded-full bg-neutral-300"></div>
      <div className="absolute right-[15%] bottom-[15%] w-2 h-2 rounded-full bg-neutral-600"></div>
    </div>
  );
};

export default RotatingCircle;
