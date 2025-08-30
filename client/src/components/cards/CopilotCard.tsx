import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CopilotCardProps {
  className?: string;
}

export default function CopilotCard({ className = "" }: CopilotCardProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(current => current >= 2 ? 0 : current + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statuses = ["Listening...", "Processing...", "Calling lead..."];

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
          <div className="text-sm text-gray-400 mb-1">AI Copilot</div>
          <div className="text-lg font-medium text-white">Assistant</div>
        </div>

        {/* Status */}
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm py-1 rounded"
          style={{ backgroundColor: '#0FB981', color: 'white' }}
        >
          {statuses[currentStep]}
        </motion.div>
      </div>
    </div>
  );
}