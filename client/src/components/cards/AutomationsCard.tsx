import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface AutomationsCardProps {
  className?: string;
}

export default function AutomationsCard({ className = "" }: AutomationsCardProps) {
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps(current => current >= 3 ? 0 : current + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const workflows = [
    'Lead qualification',
    'Email follow-up',
    'CRM update'
  ];

  return (
    <div 
      className={`relative mx-auto ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="relative p-4 h-full flex flex-col justify-center">
        {/* Main Content */}
        <div className="text-center mb-4">
          <div className="text-2xl font-medium text-white mb-1">Active</div>
          <div className="text-sm text-gray-400">workflows running</div>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-2">
          {workflows.map((workflow, i) => (
            <div key={i} className="flex items-center gap-2">
              <motion.div
                animate={{ 
                  scale: completedSteps > i ? [1, 1.1, 1] : 1,
                  opacity: completedSteps > i ? 1 : 0.4
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeInOut",
                  repeat: completedSteps > i ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                <Zap className={`w-4 h-4 ${completedSteps > i ? 'text-[#0FB981]' : 'text-gray-500'}`} />
              </motion.div>
              <span className={`text-xs ${completedSteps > i ? 'text-gray-200' : 'text-gray-500'}`}>
                {workflow}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}