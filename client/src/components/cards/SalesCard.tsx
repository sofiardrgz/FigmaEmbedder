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
        height: '140px',
        border: 'none'
      }}
    >
      <div className="px-3 py-2 h-full flex flex-col justify-center">
        <div className="space-y-1">
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-gray-800/30 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-400">Revenue</div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="text-xs text-gray-300"
              >
                {revenueValue}
              </motion.div>
            </div>
            <div className="bg-gray-800/30 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-400">Deals</div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
                className="text-xs text-gray-300"
              >
                {dealsValue}
              </motion.div>
            </div>
          </div>
          <div className="bg-gray-800/30 p-2 rounded-lg">
            <div className="h-8 flex items-end justify-between gap-1">
              {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    height: [`${height * 0.7}%`, `${height}%`, `${height * 0.8}%`, `${height}%`]
                  }}
                  transition={{ 
                    delay: i * 0.1,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse"
                  }}
                  className="flex-1 rounded-sm"
                  style={{ backgroundColor: '#0FB981', minHeight: '4px' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}