import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MessagesCardProps {
  className?: string;
}

export default function MessagesCard({ className = "" }: MessagesCardProps) {
  const [messageCount, setMessageCount] = useState(3);
  const [highlightedMessage, setHighlightedMessage] = useState(-1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Reset to 3 messages
      setMessageCount(3);
      setHighlightedMessage(-1);
      
      // After 3 seconds, add new message and highlight it
      setTimeout(() => {
        setMessageCount(4);
        setHighlightedMessage(3);
        
        // After 4 more seconds, show it as "opened" (remove highlight)
        setTimeout(() => {
          setHighlightedMessage(-1);
        }, 4000);
      }, 3000);
    }, 12000); // Much longer cycle

    return () => clearInterval(interval);
  }, []);

  const messages = [
    { name: "Sarah Chen", message: "Dashboard design looks great!", time: "2m" },
    { name: "Mike Rodriguez", message: "Sales report completed", time: "5m" },
    { name: "Emily Watson", message: "Project timeline updated", time: "8m" },
    { name: "David Park", message: "New lead came in from website", time: "now" },
  ];

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
        <div className="flex-1 space-y-3">
          {messages.slice(0, messageCount).map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: i < 3 ? 1 : 0, y: i < 3 ? 0 : 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                backgroundColor: i === highlightedMessage ? "rgba(55, 65, 81, 0.6)" : "rgba(31, 41, 55, 0.3)",
                scale: i === highlightedMessage ? 1.02 : 1
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut",
                backgroundColor: { duration: 1.2 },
                scale: { duration: 1.2 }
              }}
              className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#0FB981' }}>
                {msg.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-200 truncate">
                  {msg.name}
                </div>
                <div className="text-xs text-gray-300 truncate mt-1">
                  {msg.message}
                </div>
                <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
              </div>
              {i === highlightedMessage && (
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#0FB981' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}