import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface MarketingCardProps {
  className?: string;
}

export default function MarketingCard({ className = "" }: MarketingCardProps) {
  const [metrics, setMetrics] = useState({ impressions: 142000, engagement: 68 });

  useEffect(() => {
    const data = [
      { impressions: 142000, engagement: 68 },
      { impressions: 145000, engagement: 72 },
      { impressions: 148000, engagement: 75 },
      { impressions: 151000, engagement: 78 }
    ];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % data.length;
      setMetrics(data[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="relative p-4 pb-6 h-full flex flex-col justify-center">
        {/* Trending Indicator */}
        <div className="flex justify-end mb-2">
          <div className="flex items-center gap-1 text-white text-xs font-medium bg-[#0FB981] px-2 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" />
            +12%
          </div>
        </div>

        {/* Main Metrics */}
        <div className="text-center mb-4">
          <div className="text-2xl font-medium text-white mb-1">
            {(metrics.impressions / 1000).toFixed(0)}K
          </div>
          <div className="text-sm text-gray-400">campaign impressions</div>
        </div>

        {/* Engagement Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Engagement</span>
            <span>{metrics.engagement}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${metrics.engagement}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-[#0FB981] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}