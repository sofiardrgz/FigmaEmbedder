import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MessagesCardProps {
  className?: string;
}

export default function MessagesCard({ className = "" }: MessagesCardProps) {
  const [messageCount, setMessageCount] = useState(3);
  const [highlightedMessage, setHighlightedMessage] = useState(-1);
  const [showNewMessage, setShowNewMessage] = useState(false);
  
  useEffect(() => {
    // Start with 3 messages, then slide in new message
    setTimeout(() => {
      setShowNewMessage(true);
      setMessageCount(4);
      setHighlightedMessage(3);
      
      // Remove highlight after 4 seconds, keep message
      setTimeout(() => {
        setHighlightedMessage(-1);
        
        // Slide out after 6 seconds total
        setTimeout(() => {
          setShowNewMessage(false);
          setMessageCount(3);
        }, 2000);
      }, 4000);
    }, 2000);
    
    const interval = setInterval(() => {
      setShowNewMessage(false);
      setMessageCount(3);
      setHighlightedMessage(-1);
      
      setTimeout(() => {
        setShowNewMessage(true);
        setMessageCount(4);
        setHighlightedMessage(3);
        
        setTimeout(() => {
          setHighlightedMessage(-1);
          
          setTimeout(() => {
            setShowNewMessage(false);
            setMessageCount(3);
          }, 2000);
        }, 4000);
      }, 3000);
    }, 12000);

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
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '320px',
        border: 'none'
      }}
    >
      <div className="px-6 py-6 h-full flex flex-col justify-center">
        <div className="flex-1 space-y-3">
          {messages.slice(0, messageCount).map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: i < 3 ? 1 : 0, y: i < 3 ? 0 : 10 }}
              animate={{ 
                opacity: i >= messageCount ? 0 : 1, 
                y: i >= messageCount ? -10 : 0,
                backgroundColor: i === highlightedMessage ? "rgba(55, 65, 81, 0.6)" : "rgba(31, 41, 55, 0.3)",
                scale: i === highlightedMessage ? 1.02 : 1
              }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut",
                backgroundColor: { duration: 1.2 },
                scale: { duration: 1.2 },
                opacity: { duration: 0.6 }
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
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut",
                    repeatType: "reverse"
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