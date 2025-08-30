import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MessagesCardProps {
  className?: string;
}

export default function MessagesCard({ className = "" }: MessagesCardProps) {
  const [showNewMessage, setShowNewMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNewMessage(true);
      
      setTimeout(() => {
        setShowNewMessage(false);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`relative overflow-visible ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="relative p-4 h-full flex flex-col justify-center">

        {/* Message Previews */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0FB981] to-emerald-600 flex items-center justify-center text-sm font-bold text-white">
              J
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-200">John Smith</div>
              <div className="text-xs text-gray-400 truncate">Interested in product demo</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-sm font-bold text-white">
              L
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-200">Lisa Chen</div>
              <div className="text-xs text-gray-400 truncate">Pricing for enterprise</div>
            </div>
          </div>
        </div>

        {/* New Message Notification */}
        <AnimatePresence>
          {showNewMessage && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute -top-2 left-4 right-4 bg-[#0FB981] text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg"
            >
              New message from Mike Jones
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}