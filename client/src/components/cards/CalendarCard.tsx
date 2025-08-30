import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

interface CalendarCardProps {
  className?: string;
}

export default function CalendarCard({ className = "" }: CalendarCardProps) {
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
          <div className="text-xs text-gray-400">Calendar</div>
        </div>
        
        {/* New Appointment Notification */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-green-600/20 border border-green-500 p-2 rounded mb-3"
        >
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-green-400" />
            <span className="text-green-400 font-medium text-[9px]">Appointment Added</span>
          </div>
          <div className="text-[8px] text-gray-300">Meeting with Sarah Chen</div>
          <div className="text-[8px] text-gray-400">Tomorrow at 2:00 PM</div>
        </motion.div>

        <div className="flex-1 space-y-2">
          {[
            { title: "Team Standup", time: "9:00 AM", status: "upcoming" },
            { title: "Client Presentation", time: "11:30 AM", status: "in-progress" },
            { title: "Design Review", time: "3:00 PM", status: "upcoming" },
            { title: "Marketing Sync", time: "4:30 PM", status: "upcoming" }
          ].map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-gray-800/50 p-2 rounded flex items-center gap-2"
            >
              <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium text-gray-300 truncate">{event.title}</div>
                <div className="text-[8px] text-gray-400">{event.time}</div>
              </div>
              <div className={`text-[8px] px-1 py-0.5 rounded ${
                event.status === 'in-progress' ? 'bg-green-600/20 text-green-400' : 'bg-gray-600/20 text-gray-400'
              }`}>
                {event.status === 'in-progress' ? 'now' : 'soon'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}