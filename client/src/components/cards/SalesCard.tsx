import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {
  const [growth, setGrowth] = useState(28);

  useEffect(() => {
    const growthValues = [28, 32, 35, 38];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % growthValues.length;
      setGrowth(growthValues[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="relative p-4 h-full flex flex-col">
        {/* Growth indicator */}
        <div className="flex justify-end mb-2">
          <div className="flex items-center gap-1 text-white text-xs font-medium bg-[#0FB981] px-2 py-1 rounded-full">
            <ArrowUpRight className="w-3 h-3" />
            +{growth}%
          </div>
        </div>

        {/* Main Revenue */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-medium text-white mb-1">$45.2K</div>
            <div className="text-sm text-gray-400">Monthly Revenue</div>
          </div>
        </div>

        {/* Line Chart */}
        <div className="relative h-8 mb-2">
          <svg className="w-full h-full" viewBox="0 0 200 32">
            <motion.path
              d="M10,25 L40,15 L70,20 L100,10 L130,15 L160,5 L190,8"
              stroke="#0FB981"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <motion.circle
              r="3"
              fill="#0FB981"
              initial={{ x: 10, y: 25 }}
              animate={{ x: 190, y: 8 }}
              transition={{ 
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}