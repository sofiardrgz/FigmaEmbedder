import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCycle(prev => prev + 1);
    }, 5000); // Loop every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
        <div className="flex-1 space-y-4">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-3">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-3 rounded text-center"
            >
              <div className="text-xs text-gray-400">Revenue</div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5, 
                  ease: "easeInOut" 
                }}
                className="text-lg font-bold text-gray-300"
              >
                $2.4M
              </motion.div>
              <div className="text-green-400 text-xs">+28%</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 p-3 rounded text-center"
            >
              <div className="text-xs text-gray-400">Deals</div>
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5, 
                  delay: 0.5,
                  ease: "easeInOut" 
                }}
                className="text-lg font-bold text-gray-300"
              >
                142
              </motion.div>
              <div className="text-green-400 text-xs">+15%</div>
            </motion.div>
          </div>

          {/* Animated Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 p-4 rounded"
          >
            <div className="text-sm text-gray-300 mb-3">Sales Growth</div>
            <div className="h-16 bg-gray-700/30 rounded flex items-end justify-between px-2 pb-2">
              {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ 
                    height: [`${height * 0.6}%`, `${height}%`, `${height * 0.8}%`, `${height}%`]
                  }}
                  transition={{ 
                    delay: 1 + i * 0.2,
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                  className="bg-green-500 w-2 rounded-sm"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}