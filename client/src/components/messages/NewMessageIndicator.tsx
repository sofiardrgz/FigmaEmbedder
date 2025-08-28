import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NewMessageIndicatorProps {
  count: number;
}

export function NewMessageIndicator({ count }: NewMessageIndicatorProps) {
  if (count === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        data-testid="new-message-indicator"
      >
        <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-md px-3 py-1 text-sm font-medium">
        
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
          >
            <span className="text-xs font-bold text-white">
              {count > 99 ? '99+' : count}
            </span>
          </motion.div>
          
          <span className="relative z-10">New Messages</span>
          
          {/* Subtle glow effect */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-primary/10 blur-sm -z-10"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}