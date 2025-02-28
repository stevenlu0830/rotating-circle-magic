
import { useEffect, useState } from "react";
import RotatingSquare from "@/components/RotatingSquare";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center">
      <div className="text-center space-y-6 max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Subtle eyebrow text */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="px-3 py-1 text-xs font-medium tracking-wider text-neutral-600 uppercase bg-neutral-100 rounded-full inline-block">
            Precision in motion
          </span>
        </div>
        
        {/* Main heading with staggered animation */}
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          The harmony of <span className="font-medium">form</span> and <span className="font-medium">function</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-neutral-600 max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
        </p>
      </div>
      
      {/* Main rotating square in the center */}
      <div className="my-16 relative">
        <RotatingSquare className="z-10" />
        
        {/* Glass effect backdrop */}
        <div className="absolute -inset-12 bg-white/30 backdrop-blur-md -z-10"></div>
        
        {/* Subtle shadow/light effect */}
        <div className="absolute -inset-20 bg-gradient-radial from-white/20 to-transparent -z-20"></div>
      </div>
      
      {/* Bottom text */}
      <div className="text-center space-y-6 max-w-4xl px-4 sm:px-6 md:px-8 mb-10">
        <p className="text-neutral-600 max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials.
        </p>
      </div>
    </div>
  );
};

export default Index;
