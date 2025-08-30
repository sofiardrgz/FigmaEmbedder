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
      
      // After 1 second, add new message and highlight it
      setTimeout(() => {
        setMessageCount(4);
        setHighlightedMessage(3);
        
        // After 2 more seconds, show it as "opened" (remove highlight)
        setTimeout(() => {
          setHighlightedMessage(-1);
        }, 2000);
      }, 1000);
    }, 5000);

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
          {messages.slice(0, messageCount).map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: i < 3 ? 1 : 0, x: i < 3 ? 0 : 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                backgroundColor: i === highlightedMessage ? "rgba(34, 197, 94, 0.1)" : "rgba(31, 41, 55, 0.5)",
                scale: i === highlightedMessage ? 1.02 : 1
              }}
              transition={{ 
                duration: 0.5,
                backgroundColor: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              className="bg-gray-800/50 p-3 rounded flex items-start gap-3"
            >
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
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
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}