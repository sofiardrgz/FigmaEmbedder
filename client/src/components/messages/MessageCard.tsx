import { motion } from "framer-motion";
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

export function MessageCard({ message, index }: MessageCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: message.isNew ? -50 : 0, scale: message.isNew ? 0.95 : 1 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        scale: 1,
        borderColor: message.isNew ? "hsl(142.1, 76.2%, 36.3%)" : "transparent"
      }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ 
        duration: 0.4, 
        delay: message.isNew ? 0 : index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ scale: 1.02 }}
      data-testid={`message-card-${message.id}`}
    >
      <Card className={`p-4 border-2 transition-all duration-300 ${
        message.isNew 
          ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/20' 
          : 'border-border hover:border-primary/30'
      } ${
        message.type === 'sent' ? 'ml-8 bg-primary/10' : ''
      }`}>
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarFallback className={`text-sm font-semibold ${
              message.type === 'sent' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}>
              {message.avatar}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-sm text-foreground truncate">
                {message.sender}
              </h3>
              {message.isNew && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-2 py-0.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs rounded-full font-medium"
                >
                  NEW
                </motion.div>
              )}
              <span className="text-xs text-muted-foreground ml-auto">
                {message.timestamp}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
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
}