import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface NewMessageIndicatorProps {
  count: number;
  onClick: () => void;
}

export function NewMessageIndicator({ count, onClick }: NewMessageIndicatorProps) {
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
        <Button
          variant="outline"
          size="sm"
          onClick={onClick}
          className="relative bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 hover:from-primary/20 hover:to-primary/10 transition-all duration-300"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center"
          >
            <span className="text-xs font-bold text-primary-foreground">
              {count > 99 ? '99+' : count}
            </span>
          </motion.div>
          
          <span className="text-sm font-medium">New Messages</span>
          
          {/* Subtle glow effect */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-primary/10 blur-sm -z-10"
          />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}