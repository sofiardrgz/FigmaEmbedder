import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MarketingCardProps {
  className?: string;
}

export default function MarketingCard({ className = "" }: MarketingCardProps) {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % 5); // 2 top metrics + 3 social platforms
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`text-gray-300 rounded-lg overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#0d0d0d', 
        width: '220px', 
        height: '300px',
        border: '1px solid #374151'
      }}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="text-center mb-4">
          <div className="text-xs text-gray-400">Marketing Analytics</div>
        </div>
        
        <div className="flex-1 space-y-3">
          {/* Top Metrics */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: highlightIndex === 0 ? [1, 1.05, 1] : 1, 
                opacity: 1,
                backgroundColor: highlightIndex === 0 ? "rgba(34, 197, 94, 0.1)" : "rgba(31, 41, 55, 0.5)"
              }}
              transition={{ 
                delay: 0.2,
                scale: { duration: 1 },
                backgroundColor: { duration: 0.3 }
              }}
              className="bg-gray-800/50 p-2 rounded text-center"
            >
              <div className="text-[10px] text-gray-400">Facebook</div>
              <div className="text-sm font-bold text-gray-300">45.2K</div>
              <div className="text-green-400 text-[9px]">+12%</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: highlightIndex === 1 ? [1, 1.05, 1] : 1, 
                opacity: 1,
                backgroundColor: highlightIndex === 1 ? "rgba(34, 197, 94, 0.1)" : "rgba(31, 41, 55, 0.5)"
              }}
              transition={{ 
                delay: 0.4,
                scale: { duration: 1 },
                backgroundColor: { duration: 0.3 }
              }}
              className="bg-gray-800/50 p-2 rounded text-center"
            >
              <div className="text-[10px] text-gray-400">Twitter</div>
              <div className="text-sm font-bold text-gray-300">8.9K</div>
              <div className="text-green-400 text-[9px]">+8%</div>
            </motion.div>
          </div>

          {/* Social Platforms */}
          <div className="space-y-1">
            {[
              { platform: "LinkedIn", metric: "Post Views", value: "12.3K", change: "+15%" },
              { platform: "Instagram", metric: "Story Views", value: "5.7K", change: "+22%" },
              { platform: "YouTube", metric: "Video Views", value: "28.1K", change: "+18%" }
            ].map((social, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  backgroundColor: highlightIndex === i + 2 ? "rgba(34, 197, 94, 0.1)" : "rgba(31, 41, 55, 0.5)",
                  scale: highlightIndex === i + 2 ? [1, 1.02, 1] : 1
                }}
                transition={{ 
                  delay: 0.6 + i * 0.1,
                  backgroundColor: { duration: 0.3 },
                  scale: { duration: 1 }
                }}
                className="bg-gray-800/50 p-2 rounded flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] font-medium text-gray-300">{social.platform}</div>
                  <div className="text-[8px] text-gray-400">{social.metric}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-gray-300">{social.value}</div>
                  <div className="text-[8px] text-green-400">{social.change}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}