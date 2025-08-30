import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MessagesCardProps {
  className?: string;
}

export default function MessagesCard({ className = "" }: MessagesCardProps) {
  const [showNewMessage, setShowNewMessage] = useState(false);
  const [highlightedMessage, setHighlightedMessage] = useState(-1);
  
  useEffect(() => {
    // Start with 3 messages, then slide in new message from top
    setTimeout(() => {
      setShowNewMessage(true);
      setHighlightedMessage(0); // New message at index 0 (top)
      
      // Remove highlight after 4 seconds, keep message
      setTimeout(() => {
        setHighlightedMessage(-1);
        
        // Slide out after 6 seconds total
        setTimeout(() => {
          setShowNewMessage(false);
        }, 2000);
      }, 4000);
    }, 2000);
    
    const interval = setInterval(() => {
      setShowNewMessage(false);
      setHighlightedMessage(-1);
      
      setTimeout(() => {
        setShowNewMessage(true);
        setHighlightedMessage(0);
        
        setTimeout(() => {
          setHighlightedMessage(-1);
          
          setTimeout(() => {
            setShowNewMessage(false);
          }, 2000);
        }, 4000);
      }, 3000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const messages = [
    { name: "David Park", message: "New lead came in from website", time: "now" },
    { name: "Sarah Chen", message: "Dashboard design looks great!", time: "2m" },
    { name: "Mike Rodriguez", message: "Sales report completed", time: "5m" },
    { name: "Emily Watson", message: "Project timeline updated", time: "8m" },
  ];

  return (
    <div 
      className={`text-gray-300 rounded-2xl ${className}`} 
      style={{ 
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '320px',
        border: 'none',
        overflow: 'visible'
      }}
    >
      <div className="px-6 py-4 h-full flex flex-col">
        <div className="flex-1 space-y-3 overflow-visible">
          {/* New message slides in from top */}
          {showNewMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-xl flex items-start gap-3 border"
              style={{ 
                borderColor: highlightedMessage === 0 ? '#0FB981' : 'transparent', 
                borderWidth: '1px',
                backgroundColor: highlightedMessage === 0 ? 'rgba(15, 185, 129, 0.1)' : undefined
              }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#0FB981' }}>
                {messages[0].name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-200">{messages[0].name}</div>
                <div className="text-sm text-gray-400">{messages[0].message}</div>
                <div className="text-xs text-gray-500 mt-1">{messages[0].time}</div>
              </div>
              {highlightedMessage === 0 && (
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut",
                    repeatType: "reverse"
                  }}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#0FB981' }}
                />
              )}
            </motion.div>
          )}
          
          {/* Static messages below */}
          {messages.slice(1, 4).map((msg, i) => (
            <motion.div 
              key={i + 1}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-xl flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#0FB981' }}>
                {msg.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-200">{msg.name}</div>
                <div className="text-sm text-gray-400">{msg.message}</div>
                <div className="text-xs text-gray-500 mt-1">{msg.time}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}