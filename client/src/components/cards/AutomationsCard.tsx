import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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

  const workflows = [
    { name: "Lead Qualification", status: completedSteps >= 1 ? "completed" : "pending" },
    { name: "Email Follow-up", status: completedSteps >= 2 ? "completed" : "pending" },
    { name: "CRM Update", status: completedSteps >= 3 ? "completed" : "pending" },
  ];

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
      <div className="px-4 py-3 h-full">
        <div className="text-xs text-gray-400 mb-2 text-center">Workflow Progress</div>
        <div className="space-y-2">
          {workflows.map((workflow, i) => (
            <div 
              key={i}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={workflow.status === "completed" ? { 
                  scale: [1, 1.1, 1]
                } : { opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <CheckCircle 
                  className="w-4 h-4" 
                  style={{ 
                    color: workflow.status === "completed" ? '#0FB981' : '#6b7280' 
                  }} 
                />
              </motion.div>
              <div className="text-xs text-gray-300">{workflow.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}