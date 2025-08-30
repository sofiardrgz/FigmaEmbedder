import { motion } from "framer-motion";
import { Home, MessageCircle } from "lucide-react";
import SafariBrowserFrame from "../dashboard/SafariBrowserFrame";

interface EmbeddableMessagesOnlyProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddableMessagesOnly({ 
  showSafariFrame = true,
  className = ""
}: EmbeddableMessagesOnlyProps) {

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
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Messages</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">Messages</span>
          </div>
        </div>

        {/* Messages Content */}
        <div className="flex-1 overflow-hidden p-6" style={{ backgroundColor: '#0d0d0d' }}>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">Messages</h2>
          <div className="space-y-3">
            {[
              { name: "Sarah Chen", message: "New dashboard design looks amazing!", time: "2 min ago", unread: true },
              { name: "Mike Rodriguez", message: "Great work on the sales report", time: "5 min ago", unread: false },
              { name: "Emily Watson", message: "Can you send the project timeline?", time: "8 min ago", unread: true },
              { name: "David Park", message: "Meeting rescheduled to 3 PM", time: "12 min ago", unread: false },
              { name: "Lisa Johnson", message: "Budget approval needed for Q2", time: "15 min ago", unread: true },
              { name: "Alex Thompson", message: "Client feedback on the proposal", time: "18 min ago", unread: false },
              { name: "Maria Garcia", message: "New lead from LinkedIn campaign", time: "22 min ago", unread: true },
              { name: "Tom Wilson", message: "Demo scheduled for Friday", time: "25 min ago", unread: false }
            ].map((msg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-800/50 p-3 rounded-lg flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                  {msg.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className={`text-sm ${msg.unread ? 'font-semibold text-gray-200' : 'font-medium text-gray-300'}`}>
                    {msg.name}
                  </div>
                  <div className={`text-xs ${msg.unread ? 'text-gray-300' : 'text-gray-400'}`}>
                    {msg.message}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {msg.unread && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                  <div className="text-xs text-gray-500">{msg.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
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