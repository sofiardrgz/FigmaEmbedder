import { motion } from "framer-motion";
import { Bot, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface CopilotCardProps {
  className?: string;
}

export default function CopilotCard({ className = "" }: CopilotCardProps) {
  const [chatState, setChatState] = useState(0); // 0: prompt, 1: response, 2: calling

  useEffect(() => {
    // Start calling animation quickly
    setChatState(2);
    
    const interval = setInterval(() => {
      setChatState(0);
      
      setTimeout(() => setChatState(1), 1000);
      
      setTimeout(() => setChatState(2), 2000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`text-gray-300 rounded-2xl overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '320px',
        border: 'none'
      }}
    >
      <div className="px-6 py-6 h-full flex flex-col justify-center">
        <div className="flex-1 space-y-4">
          {/* User Prompt */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: chatState >= 0 ? 1 : 0 }}
            className="backdrop-blur-sm rounded-xl p-4 ml-6"
            style={{ backgroundColor: 'rgba(15, 185, 129, 0.1)' }}
          >
            <div className="text-sm text-gray-300">Call lead Robert Miller</div>
          </motion.div>
          
          {/* AI Response */}
          {chatState >= 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 mr-6"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  animate={{ 
                    scale: [1, 1.03, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5, 
                    ease: "easeInOut",
                    repeatType: "reverse"
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
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 text-center space-y-3"
            >
              <div className="inline-block mb-2">
                <Phone className="w-6 h-6" style={{ color: '#0FB981' }} />
              </div>
              <div className="text-sm font-medium" style={{ color: '#0FB981' }}>Calling...</div>
              <div className="text-sm text-gray-300 mt-1">Robert Miller</div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="bg-gray-700/50 p-2 rounded text-xs text-gray-400"
              >
                📞 Connected - Duration: 2:34
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}