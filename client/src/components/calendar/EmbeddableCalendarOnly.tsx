import { motion } from "framer-motion";
import { Home, Calendar, Check, Clock } from "lucide-react";
import SafariBrowserFrame from "../dashboard/SafariBrowserFrame";

interface EmbeddableCalendarOnlyProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddableCalendarOnly({ 
  showSafariFrame = true,
  className = ""
}: EmbeddableCalendarOnlyProps) {

  const DashboardContent = () => (
    <div className={`flex text-gray-300 rounded-[15px] overflow-hidden ambient-bg ${className}`} style={{ backgroundColor: '#0d0d0d', width: '900px', height: '100vh', margin: '0 auto' }}>
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-700 flex-shrink-0" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-5">
            <span className="font-semibold text-lg text-gray-300">Smart Squatch</span>
          </div>
          
          <nav className="space-y-1">
            <div className="px-4 py-2 rounded-md flex items-center space-x-3 text-gray-300 bg-green-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Calendar</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">Calendar</span>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="flex-1 overflow-hidden p-6" style={{ backgroundColor: '#0d0d0d' }}>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">Calendar</h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-600/20 border border-green-500 p-4 rounded-lg mb-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">Appointment Added</span>
            </div>
            <div className="text-sm text-gray-300">Meeting with Sarah Chen - Product Review</div>
            <div className="text-xs text-gray-400">Tomorrow at 2:00 PM</div>
          </motion.div>
          <div className="space-y-2">
            {[
              { title: "Team Standup", time: "9:00 AM", status: "upcoming" },
              { title: "Client Presentation", time: "11:30 AM", status: "in-progress" },
              { title: "Design Review", time: "3:00 PM", status: "upcoming" }
            ].map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 p-3 rounded-lg flex items-center gap-3"
              >
                <Clock className="w-4 h-4 text-gray-400" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-300">{event.title}</div>
                  <div className="text-xs text-gray-400">{event.time}</div>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${
                  event.status === 'in-progress' ? 'bg-green-600/20 text-green-400' : 'bg-gray-600/20 text-gray-400'
                }`}>
                  {event.status}
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