import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

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
    { type: "user", text: "Call lead Robert Miller" },
    { type: "ai", text: "Calling now..." },
    { type: "ai", text: "Connected! Call in progress" },
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
      <div className="px-4 py-3 h-full flex flex-col">
        {/* Header */}
        <div className="text-xs text-gray-400 mb-2 text-center flex items-center justify-center gap-1">
          <Bot className="w-3 h-3" />
          AI Assistant
        </div>

        {/* Conversation */}
        <div className="space-y-2 flex-1">
          {conversation.slice(0, currentStep + 1).map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2"
            >
              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" 
                   style={{ backgroundColor: msg.type === 'ai' ? '#0FB981' : '#6b7280' }}>
                {msg.type === 'ai' ? (
                  <Bot className="w-2 h-2" />
                ) : (
                  <User className="w-2 h-2" />
                )}
              </div>
              <div className="text-xs text-gray-300 flex-1">{msg.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}