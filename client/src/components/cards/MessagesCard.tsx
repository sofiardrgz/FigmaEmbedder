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
      <div className="px-4 py-3 h-full flex flex-col">
        {/* New Message Indicator */}
        {newMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-2 px-2 py-1 rounded text-center"
            style={{ backgroundColor: '#0FB981', fontSize: '11px' }}
          >
            New message received
          </motion.div>
        )}

        {/* Messages List */}
        <div className="space-y-2 flex-1">
          {messages.map((msg, i) => (
            <div 
              key={i}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ backgroundColor: '#0FB981' }}>
                {msg.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-300 truncate">{msg.name}</div>
                <div className="text-xs text-gray-400 truncate">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}