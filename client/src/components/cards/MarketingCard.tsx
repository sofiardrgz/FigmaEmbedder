import { motion } from "framer-motion";
import { ThumbsUp, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface MarketingCardProps {
  className?: string;
}

export default function MarketingCard({ className = "" }: MarketingCardProps) {
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState(prev => (prev + 1) % 3);
    }, 8000); // Slower transitions

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
        backgroundColor: '#1c1c1e', 
        width: '260px', 
        height: '300px',
        border: 'none',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="p-6 h-full flex flex-col">
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
                scale: [1, 1.02, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: "easeInOut"
              }}
              className="text-xl font-bold text-white"
            >
              <motion.span
                key={animationState}
                animate={{ 
                  color: ["#ffffff", "#d1d5db", "#ffffff"]
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {90.3 + animationState * 0.5}K
              </motion.span>
            </motion.div>
            <div className="text-sm" style={{ color: '#0FB981' }}>+15% this week</div>
          </motion.div>

          {/* Platform Stats */}
          <div className="space-y-3">
            {platforms.map((platform, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  backgroundColor: animationState === i ? "rgba(34, 197, 94, 0.1)" : "rgba(31, 41, 55, 0.5)",
                  scale: animationState === i ? 1.02 : 1
                }}
                transition={{ 
                  delay: i * 0.2,
                  backgroundColor: { duration: 1.5, ease: "easeInOut" },
                  scale: { duration: 1.2, ease: "easeInOut" }
                }}
                className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={animationState === i ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 15, 0]
                    } : {}}
                    transition={{ duration: 0.5 }}
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
                    animate={animationState === i ? { 
                      scale: [1, 1.05, 1],
                      color: ["#d1d5db", "#ffffff", "#d1d5db"]
                    } : {}}
                    transition={{ 
                      duration: 1.5,
                      ease: "easeInOut"
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