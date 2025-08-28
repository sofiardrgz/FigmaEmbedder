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
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-lg">All Messages</h3>
        <p className="text-sm text-muted-foreground">
          {messages.filter(m => m.isNew).length} new messages
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
                duration: 0.3, 
                delay: message.isNew ? 0 : index * 0.05 
              }}
              className={`p-3 border-b border-border/50 hover:bg-accent/50 cursor-pointer transition-colors ${
                message.isNew ? 'bg-primary/5 border-l-2 border-l-primary' : ''
              }`}
              data-testid={`message-list-item-${message.id}`}
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="text-xs font-semibold">
                    {message.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm truncate">
                      {message.sender}
                    </h4>
                    {message.isNew && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {message.message}
                  </p>
                  
                  <p className="text-xs text-muted-foreground/70 mt-1">
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