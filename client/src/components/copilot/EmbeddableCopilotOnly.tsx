import { motion } from "framer-motion";
import { Home, Bot } from "lucide-react";
import SafariBrowserFrame from "../dashboard/SafariBrowserFrame";

interface EmbeddableCopilotOnlyProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddableCopilotOnly({ 
  showSafariFrame = true,
  className = ""
}: EmbeddableCopilotOnlyProps) {

  const DashboardContent = () => (
    <div className={`flex text-gray-300 rounded-[15px] overflow-hidden ambient-bg ${className}`} style={{ backgroundColor: '#0d0d0d', width: '900px', height: '100vh', margin: '0 auto' }}>
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-700 flex-shrink-0" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-5">
            <span className="font-normal text-[18px] text-gray-300">Smart Squatch</span>
          </div>
          
          <nav className="space-y-1">
            <div className="px-4 py-2 rounded-md flex items-center space-x-3 text-gray-300 bg-green-600">
              <Bot className="w-4 h-4" />
              <span className="text-sm font-medium">Copilot</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">AI Copilot</span>
          </div>
        </div>

        {/* Copilot Content */}
        <div className="flex-1 overflow-hidden p-6" style={{ backgroundColor: '#0d0d0d' }}>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">AI Copilot</h2>
          <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-300 mb-2">You: "Create an email for our new product launch"</div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-green-600/20 border border-green-500 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <Bot className="w-5 h-5 text-green-400 mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-medium text-green-400 mb-2">AI Copilot</div>
                <div className="text-sm text-gray-300 mb-3">Sure! I'll create an email for you!</div>
                
                {/* Email Preview */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="bg-gray-900/50 border border-gray-600 rounded-lg p-4 mt-3"
                >
                  <div className="text-xs text-gray-400 mb-2">Email Draft:</div>
                  <div className="space-y-2">
                    <div className="text-xs">
                      <span className="text-gray-400">Subject:</span>
                      <span className="text-gray-300 ml-2">🚀 Introducing Our Game-Changing New Platform</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">To:</span>
                      <span className="text-gray-300 ml-2">Your Customer List</span>
                    </div>
                    <div className="border-t border-gray-600 pt-2 mt-2">
                      <div className="text-xs text-gray-300 leading-relaxed">
                        Hi [Name],<br/><br/>
                        We're excited to share something special with you...<br/><br/>
                        Our new platform delivers 10x faster results with intuitive design that your team will love.<br/><br/>
                        <span className="text-green-400">→ Get early access now</span><br/><br/>
                        Best regards,<br/>
                        The Team
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

  if (showSafariFrame) {
    return (
      <SafariBrowserFrame>
        <DashboardContent />
      </SafariBrowserFrame>
    );
  }

  return <DashboardContent />;
}