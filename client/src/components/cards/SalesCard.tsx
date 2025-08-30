import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {
  const [revenueValue, setRevenueValue] = useState("$2.1M");
  const [dealsValue, setDealsValue] = useState("138");
  
  useEffect(() => {
    const revenueValues = ["$2.1M", "$2.2M", "$2.3M", "$2.4M"];
    const dealsValues = ["138", "139", "141", "142"];
    
    let revenueIndex = 0;
    let dealsIndex = 0;
    
    const interval1 = setInterval(() => {
      revenueIndex = (revenueIndex + 1) % revenueValues.length;
      setRevenueValue(revenueValues[revenueIndex]);
    }, 2000);
    
    const interval2 = setInterval(() => {
      dealsIndex = (dealsIndex + 1) % dealsValues.length;  
      setDealsValue(dealsValues[dealsIndex]);
    }, 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div 
      className={`text-gray-300 rounded-2xl overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '280px',
        border: 'none'
      }}
    >
      <div className="px-6 py-6 h-full flex flex-col justify-center">
        <div className="flex-1 space-y-5">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl text-center"
            >
              <div className="text-xs text-gray-400">Revenue</div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [1, 0.9, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="text-lg font-bold text-gray-300"
              >
{revenueValue}
              </motion.div>
              <div style={{ color: '#0FB981' }} className="text-xs">+28%</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl text-center"
            >
              <div className="text-xs text-gray-400">Deals</div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.03, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="text-lg font-bold text-gray-300"
              >
{dealsValue}
              </motion.div>
              <div style={{ color: '#0FB981' }} className="text-xs">+15%</div>
            </motion.div>
          </div>

          {/* Animated Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-xl"
          >
            <div className="text-sm text-gray-200 mb-4 font-medium">Sales Growth</div>
            <div className="h-16 bg-gray-700/20 rounded-lg flex items-end justify-between px-3 pb-2">
              {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ 
                    height: [
                      `${height * 0.7}%`, 
                      `${height}%`, 
                      `${height * 0.85}%`, 
                      `${height * 1.1}%`,
                      `${height * 0.9}%`,
                      `${height}%`
                    ],
                    opacity: [0.7, 1, 0.8, 1, 0.9, 1]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    repeatType: "reverse"
                  }}
                  className="w-2.5 rounded-full"
                  style={{ backgroundColor: '#0FB981' }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}