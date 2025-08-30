import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {
  const [revenueValue, setRevenueValue] = useState("$45.2K");
  const [dealsValue, setDealsValue] = useState("12");

  useEffect(() => {
    const revenueValues = ["$45.2K", "$46.1K", "$47.3K", "$48.2K"];
    const dealsValues = ["12", "13", "14", "15"];
    let revenueIndex = 0;
    let dealsIndex = 0;
    
    const interval1 = setInterval(() => {
      revenueIndex = (revenueIndex + 1) % revenueValues.length;
      setRevenueValue(revenueValues[revenueIndex]);
    }, 2000);
    
    const interval2 = setInterval(() => {
      dealsIndex = (dealsIndex + 1) % dealsValues.length;  
      setDealsValue(dealsValues[dealsIndex]);
    }, 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
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
      <div className="px-4 py-3 h-full flex flex-col">
        {/* KPI Row */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Revenue</div>
            <motion.div 
              animate={{ 
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              className="text-white"
              style={{ fontSize: '14px', fontWeight: '500' }}
            >
              {revenueValue}
            </motion.div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400 mb-1">Deals</div>
            <motion.div 
              animate={{ 
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              className="text-white"
              style={{ fontSize: '14px', fontWeight: '500' }}
            >
              {dealsValue}
            </motion.div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 flex items-end justify-between gap-1 px-2">
          {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
            <motion.div
              key={i}
              animate={{ 
                height: [`${height * 0.7}%`, `${height}%`, `${height * 0.8}%`, `${height}%`]
              }}
              transition={{ 
                delay: i * 0.1,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              className="flex-1 rounded-sm"
              style={{ backgroundColor: '#0FB981', minHeight: '4px' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}