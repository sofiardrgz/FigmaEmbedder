import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Card } from "@/components/ui/card";
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

interface MessageCardProps {
  message: Message;
  index: number;
}

const MessageCard = forwardRef<HTMLDivElement, MessageCardProps>(({ message, index }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, x: message.isNew ? -50 : 0, scale: message.isNew ? 0.95 : 1 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        scale: 1
      }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.2, 
        delay: message.isNew ? 0 : index * 0.05,
        type: "spring",
        stiffness: 150,
        damping: 20
      }}
      whileHover={{ scale: 1.02 }}
      data-testid={`message-card-${message.id}`}
    >
      <Card 
        className="rounded-lg shadow-sm p-4 border border-gray-600 transition-all duration-300 hover:border-gray-500 ml-[0px] mr-[0px] ambient-bg"
        style={{ backgroundColor: '#2E2E2E' }}
      >
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarFallback 
              className="text-sm font-semibold text-gray-300"
              style={{ backgroundColor: message.type === 'sent' ? '#383838' : '#2E2E2E' }}
            >
              {message.avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm text-gray-300 truncate">
                {message.sender}
              </h3>
              {message.isNew && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-2 py-0.5 text-gray-200 text-xs rounded-full font-medium"
                  style={{ backgroundColor: '#383838' }}
                >
                  NEW
                </motion.div>
              )}
              <span className="text-xs text-gray-400 ml-auto">
                {message.timestamp}
              </span>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              {message.message}
            </p>
          </div>
        </div>
        
        {message.isNew && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-primary/80 to-primary origin-left"
          />
        )}
      </Card>
    </motion.div>
  );
});

MessageCard.displayName = "MessageCard";

export { MessageCard };