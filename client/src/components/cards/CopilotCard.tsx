import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Phone } from 'lucide-react';

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

  const conversation = [
    { type: 'user', text: 'Call Robert Miller', icon: User },
    { type: 'ai', text: 'Calling now...', icon: Bot },
    { type: 'ai', text: 'Connected! Call active', icon: Phone }
  ];

  return (
    <div 
      className={`relative rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl" />
      
      <div className="relative p-4 h-full flex flex-col justify-center">
        {/* AI Status */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-300">AI Assistant Active</span>
        </div>

        {/* Conversation Flow */}
        <div className="space-y-2">
          {conversation.slice(0, currentStep + 1).map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: msg.type === 'user' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${
                msg.type === 'user' 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-emerald-500/20 text-emerald-300'
              }`}>
                <msg.icon className="w-3 h-3" />
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}