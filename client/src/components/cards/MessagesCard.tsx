import { motion } from "framer-motion";

interface MessagesCardProps {
  className?: string;
}

export default function MessagesCard({ className = "" }: MessagesCardProps) {
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
          <div className="text-xs text-gray-400">Messages</div>
        </div>
        
        <div className="flex-1 space-y-2">
          {[
            { name: "Sarah Chen", message: "New dashboard design looks amazing!", time: "2m", unread: true },
            { name: "Mike Rodriguez", message: "Great work on the sales report", time: "5m", unread: false },
            { name: "Emily Watson", message: "Can you send the project timeline?", time: "8m", unread: true },
            { name: "David Park", message: "Meeting rescheduled to 3 PM", time: "12m", unread: false }
          ].map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-gray-800/50 p-2 rounded flex items-start gap-2"
            >
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0">
                {msg.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] truncate ${msg.unread ? 'font-semibold text-gray-200' : 'font-medium text-gray-300'}`}>
                  {msg.name}
                </div>
                <div className={`text-[9px] truncate ${msg.unread ? 'text-gray-300' : 'text-gray-400'}`}>
                  {msg.message}
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                {msg.unread && <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>}
                <div className="text-[8px] text-gray-500">{msg.time}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}