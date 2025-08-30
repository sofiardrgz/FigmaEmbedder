import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useEffect, useState } from "react";

interface CopilotCardProps {
  className?: string;
}

export default function CopilotCard({ className = "" }: CopilotCardProps) {
  const [typingEffect, setTypingEffect] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingEffect(prev => (prev + 1) % 3);
    }, 4000);

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
        
        <div className="flex-1 space-y-3">
          {/* User Query */}
          <div className="bg-gray-800/50 rounded p-3">
            <div className="text-sm text-gray-300">"Create an email for our new product launch"</div>
          </div>
          
          {/* AI Response */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 border border-gray-600 rounded p-3"
          >
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  color: ["#9ca3af", "#22c55e", "#9ca3af"]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut"
                }}
              >
                <Bot className="w-4 h-4 mt-1 flex-shrink-0" />
              </motion.div>
              <div className="flex-1">
                <div className="text-sm text-white mb-3">Sure! I'll create an email for you!</div>
                
                {/* Simplified Email Preview */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    borderColor: ["#4b5563", "#22c55e", "#4b5563"]
                  }}
                  transition={{ 
                    delay: 0.6,
                    borderColor: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                  }}
                  className="bg-gray-900/50 border border-gray-600 rounded p-3"
                >
                  <div className="text-xs text-gray-400 mb-2">Email Draft Generated</div>
                  <div className="text-sm text-gray-300">
                    🚀 New Platform Launch
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Ready to send to customer list
                  </div>
                  <div className="text-green-400 text-xs mt-2">→ Get early access now</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}