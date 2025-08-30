import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {
  const [revenueValue, setRevenueValue] = useState("$45.2K");

  useEffect(() => {
    const values = ["$45.2K", "$46.1K", "$47.3K", "$48.2K"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % values.length;
      setRevenueValue(values[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`text-gray-300 rounded-2xl overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '140px',
        border: 'none'
      }}
    >
      <div className="px-4 py-4 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-sm text-gray-400 mb-1">Sales Dashboard</div>
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className="text-lg font-medium text-white"
          >
            {revenueValue}
          </motion.div>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-center gap-1 h-8">
          {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${height * 0.7}%`, `${height}%`, `${height * 0.8}%`, `${height}%`] }}
              transition={{ 
                delay: i * 0.1,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              className="w-2 rounded-sm"
              style={{ backgroundColor: '#0FB981', minHeight: '4px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}