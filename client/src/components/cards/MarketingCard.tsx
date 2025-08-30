import { motion } from "framer-motion";
import { ThumbsUp, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface MarketingCardProps {
  className?: string;
}

export default function MarketingCard({ className = "" }: MarketingCardProps) {
  const [animationState, setAnimationState] = useState(0);
  const [engagementValue, setEngagementValue] = useState("90.3K");

  useEffect(() => {
    // Start animation immediately
    setAnimationState(1);
    
    const interval = setInterval(() => {
      setAnimationState(prev => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const values = ["90.3K", "90.8K", "91.2K", "91.5K"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % values.length;
      setEngagementValue(values[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const platforms = [
    { name: "Facebook", likes: "45.2K", growth: "+12%" },
    { name: "Instagram", likes: "32.8K", growth: "+18%" },
    { name: "LinkedIn", likes: "12.3K", growth: "+15%" },
  ];

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
        <div className="flex-1 space-y-4">
          {/* New Post Notification */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2, 
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              >
                <TrendingUp className="w-4 h-4" style={{ color: '#0FB981' }} />
              </motion.div>
              <span className="text-gray-300 font-medium text-sm">New Post Scheduled</span>
            </div>
            <div className="text-base font-medium text-white">Instagram Story Campaign</div>
            <div className="text-sm text-gray-400">Dec 28, 2024 at 3:00 PM</div>
          </motion.div>

          {/* Engagement Summary */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4" style={{ color: '#0FB981' }} />
              <span className="text-sm text-gray-400">Total Engagement</span>
            </div>
            <motion.div 
              animate={{ 
                scale: [1, 1.01, 1],
                opacity: [1, 0.9, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                ease: "easeInOut",
                repeatType: "reverse"
              }}
              className="text-lg font-bold text-white"
            >
              {engagementValue}
            </motion.div>
            <div className="text-sm" style={{ color: '#0FB981' }}>+15% this week</div>
          </motion.div>

          {/* Platform Stats */}
          <div className="space-y-2">
            {platforms.map((platform, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0
                }}
                transition={{ 
                  delay: i * 0.1
                }}
                className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" style={{ color: '#0FB981' }} />
                  <div className="text-sm font-medium text-gray-200">{platform.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-300">{platform.likes}</div>
                  <div className="text-xs" style={{ color: '#0FB981' }}>{platform.growth}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}