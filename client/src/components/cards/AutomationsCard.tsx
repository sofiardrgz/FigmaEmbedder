import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';

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
      className={`relative rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl" />
      
      <div className="relative p-4 h-full flex flex-col justify-center">
        {/* Progress Status */}
        <div className="text-center mb-4">
          <motion.div 
            key={completedSteps}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold text-white mb-1"
          >
            {completedSteps}/3
          </motion.div>
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
                {completedSteps > i ? (
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-500" />
                )}
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