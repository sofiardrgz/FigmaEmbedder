import { motion } from "framer-motion";
import { Bot, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface CopilotCardProps {
  className?: string;
}

export default function CopilotCard({ className = "" }: CopilotCardProps) {
  const [chatState, setChatState] = useState(0); // 0: prompt, 1: response, 2: calling

  useEffect(() => {
    const interval = setInterval(() => {
      setChatState(0);
      
      // Show response after 2 seconds
      setTimeout(() => setChatState(1), 2000);
      
      // Show calling after 5 seconds
      setTimeout(() => setChatState(2), 5000);
      
      // Reset after 10 seconds
      setTimeout(() => setChatState(0), 10000);
    }, 16000); // Much longer cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`text-gray-300 rounded-lg overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#0d0d0d', 
        width: '260px', 
        height: '300px',
        border: '1px solid #374151'
      }}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex-1 space-y-4">
          {/* User Prompt */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: chatState >= 0 ? 1 : 0 }}
            className="bg-gray-800/50 rounded p-3 ml-8"
          >
            <div className="text-sm text-gray-300">Call lead Robert Miller</div>
          </motion.div>
          
          {/* AI Response */}
          {chatState >= 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 border border-gray-600 rounded p-3 mr-8"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3, 
                    ease: "easeInOut"
                  }}
                >
                  <Bot className="w-5 h-5 flex-shrink-0" />
                </motion.div>
                <div className="flex-1">
                  <div className="text-sm text-white">
                    {chatState === 2 ? "Calling Robert Miller..." : "Sure! I'll call Robert Miller for you."}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Calling State */}
          {chatState === 2 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700/50 border border-gray-600 rounded p-4 text-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                  scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="inline-block mb-2"
              >
                <Phone className="w-6 h-6 text-gray-300" />
              </motion.div>
              <div className="text-sm font-medium text-gray-300">Calling...</div>
              <div className="text-sm text-gray-300 mt-1">Robert Miller</div>
              <div className="text-xs text-gray-400 mt-1">COO at InnovateNow</div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}