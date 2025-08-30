import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MarketingCardProps {
  className?: string;
}

export default function MarketingCard({ className = "" }: MarketingCardProps) {
  const [impressions, setImpressions] = useState("142K");

  useEffect(() => {
    const values = ["142K", "145K", "148K", "151K"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % values.length;
      setImpressions(values[index]);
    }, 3000);

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
          <div className="text-sm text-gray-400 mb-1">Marketing</div>
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
            {impressions}
          </motion.div>
        </div>

        {/* Metric Bar */}
        <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: ["60%", "80%", "70%", "85%"] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className="h-full rounded-full"
            style={{ backgroundColor: '#0FB981' }}
          />
        </div>
      </div>
    </div>
  );
}