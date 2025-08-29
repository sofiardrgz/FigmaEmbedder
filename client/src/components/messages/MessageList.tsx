import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  message: string;
  timestamp: string;
  isNew?: boolean;
  type: 'received' | 'sent';
}

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: '#1b1a19' }}>
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-gray-300">All Conversations</h3>
          {messages.filter(m => m.isNew).length > 0 && (
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#666' }}></div>
          )}
        </div>
        <p className="text-sm text-gray-400">
          {messages.filter(m => m.isNew).length} new conversations
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ 
                duration: 0.2, 
                delay: message.isNew ? 0 : index * 0.03 
              }}
              className="p-3 border-b border-gray-700 hover:opacity-80 transition-colors"
              style={{ 
                backgroundColor: message.isNew ? '#272727' : 'transparent',
                borderLeft: message.isNew ? '2px solid #666' : 'none'
              }}
              data-testid={`message-list-item-${message.id}`}
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="text-xs font-semibold text-gray-300" style={{ backgroundColor: '#272727' }}>
                    {message.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm truncate text-gray-300">
                      {message.sender}
                    </h4>
                    {message.isNew && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#666' }}
                      />
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {message.message}
                  </p>
                  
                  <p className="text-xs text-gray-500 mt-1">
                    {message.timestamp}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}