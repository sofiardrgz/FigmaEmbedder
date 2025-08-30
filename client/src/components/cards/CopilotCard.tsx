import { motion } from "framer-motion";
import { Bot } from "lucide-react";

interface CopilotCardProps {
  className?: string;
}

export default function CopilotCard({ className = "" }: CopilotCardProps) {
  return (
    <div 
      className={`text-gray-300 rounded-lg overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#0d0d0d', 
        width: '220px', 
        height: '300px',
        border: '1px solid #374151'
      }}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="text-center mb-4">
          <h3 className="font-normal text-[14px] text-gray-300 mb-2">Smart Squatch</h3>
          <div className="text-xs text-gray-400">AI Copilot</div>
        </div>
        
        <div className="flex-1 space-y-2">
          {/* User Query */}
          <div className="bg-gray-800/50 rounded p-2">
            <div className="text-[9px] text-gray-300">You: "Create an email for our new product launch"</div>
          </div>
          
          {/* AI Response */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 border border-gray-600 rounded p-2"
          >
            <div className="flex items-start gap-2">
              <Bot className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-[9px] font-medium text-gray-300 mb-1">AI Copilot</div>
                <div className="text-[8px] text-white mb-2">Sure! I'll create an email for you!</div>
                
                {/* Mini Email Preview */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-900/50 border border-gray-600 rounded p-2"
                >
                  <div className="text-[8px] text-gray-400 mb-1">Email Draft:</div>
                  <div className="space-y-1">
                    <div className="text-[7px]">
                      <span className="text-gray-400">Subject:</span>
                      <span className="text-gray-300 ml-1">🚀 New Platform Launch</span>
                    </div>
                    <div className="text-[7px]">
                      <span className="text-gray-400">To:</span>
                      <span className="text-gray-300 ml-1">Customer List</span>
                    </div>
                    <div className="border-t border-gray-600 pt-1">
                      <div className="text-[7px] text-gray-300 leading-relaxed">
                        Hi [Name],<br/>
                        We're excited to share something special...<br/>
                        <span className="text-green-400">→ Get early access</span><br/>
                        Best regards, The Team
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}