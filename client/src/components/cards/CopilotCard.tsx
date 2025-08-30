import { motion } from "framer-motion";
import { Bot, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface CopilotCardProps {
  className?: string;
}

export default function CopilotCard({ className = "" }: CopilotCardProps) {
  const [chatState, setChatState] = useState(0); // 0: prompt, 1: response, 2: calling

  useEffect(() => {
    // Start animation immediately
    setChatState(1);
    
    const interval = setInterval(() => {
      setChatState(2);
      
      setTimeout(() => setChatState(0), 3000);
      
      setTimeout(() => setChatState(1), 6000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`text-gray-300 rounded-2xl overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#1c1c1e', 
        width: '260px', 
        height: '300px',
        border: 'none',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="p-6 h-full flex flex-col">
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
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 text-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                  scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "reverse" }
                }}
                className="inline-block mb-2"
              >
                <Phone className="w-6 h-6" style={{ color: '#0FB981' }} />
              </motion.div>
              <div className="text-sm font-medium" style={{ color: '#0FB981' }}>Calling...</div>
              <div className="text-sm text-gray-300 mt-1">Robert Miller</div>
              <div className="text-xs text-gray-400 mt-1">COO at InnovateNow</div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}