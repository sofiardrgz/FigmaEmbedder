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
        height: '320px',
        border: 'none'
      }}
    >
      <div className="px-6 py-6 h-full flex flex-col justify-center">
        <div className="flex-1 space-y-5">
          {/* Total Engagement */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5" style={{ color: '#0FB981' }} />
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
              className="text-xl font-bold text-white"
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
                  x: 0,
                  backgroundColor: animationState === i ? "rgba(15, 185, 129, 0.1)" : "rgba(31, 41, 55, 0.3)",
                  scale: animationState === i ? 1.01 : 1
                }}
                transition={{ 
                  delay: i * 0.1,
                  backgroundColor: { duration: 2, ease: "easeInOut" },
                  scale: { duration: 2, ease: "easeInOut" }
                }}
                className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      scale: animationState === i ? [1, 1.1, 1] : [1, 1.02, 1],
                      rotate: animationState === i ? [0, 5, 0] : [0, 0, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ThumbsUp className="w-4 h-4" style={{ color: '#0FB981' }} />
                  </motion.div>
                  <div>
                    <div className="text-sm font-medium text-gray-200">{platform.name}</div>
                    <div className="text-xs text-gray-400">Likes</div>
                  </div>
                </div>
                <div className="text-right">
                  <motion.div 
                    animate={{ 
                      scale: animationState === i ? [1, 1.03, 1] : [1, 1.01, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="text-sm font-bold text-gray-300"
                  >
                    {platform.likes}
                  </motion.div>
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