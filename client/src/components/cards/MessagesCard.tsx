import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MessagesCardProps {
  className?: string;
}

export default function MessagesCard({ className = "" }: MessagesCardProps) {
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewMessage(true);
      setTimeout(() => setNewMessage(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const messages = [
    { name: "John Smith", message: "Interested in demo" },
    { name: "Lisa Chen", message: "Pricing question" },
    { name: "Mike Jones", message: "Ready to purchase" },
  ];

  return (
    <div 
      className={`text-gray-300 rounded-2xl ${className}`} 
      style={{ 
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '140px',
        border: 'none',
        overflow: 'visible'
      }}
    >
      <div className="px-4 py-4 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-sm text-gray-400 mb-1">Messages</div>
          <div className="text-lg font-medium text-white">3 New</div>
        </div>

        {/* New Message Alert */}
        {newMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-sm py-1 rounded"
            style={{ backgroundColor: '#0FB981', color: 'white' }}
          >
            New message received
          </motion.div>
        )}
      </div>
    </div>
  );
}