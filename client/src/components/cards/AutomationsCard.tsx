import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AutomationsCardProps {
  className?: string;
}

export default function AutomationsCard({ className = "" }: AutomationsCardProps) {
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps(current => current >= 3 ? 0 : current + 1);
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
          <div className="text-sm text-gray-400 mb-1">Automations</div>
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
            {completedSteps}/3 Active
          </motion.div>
        </div>

        {/* Progress Circles */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((step, i) => (
            <motion.div 
              key={i}
              animate={{ 
                scale: completedSteps >= step ? [1, 1.1, 1] : 1,
                opacity: completedSteps >= step ? 1 : 0.3
              }}
              transition={{ 
                duration: 1,
                ease: "easeInOut",
                repeat: completedSteps >= step ? Infinity : 0,
                repeatType: "reverse"
              }}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: '#0FB981' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}