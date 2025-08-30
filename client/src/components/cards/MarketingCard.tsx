import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, MousePointer } from 'lucide-react';

interface MarketingCardProps {
  className?: string;
}

export default function MarketingCard({ className = "" }: MarketingCardProps) {
  const [campaignMetrics, setCampaignMetrics] = useState({
    impressions: "142K",
    clicks: "3.2K", 
    conversions: "89"
  });

  useEffect(() => {
    const impressionsValues = ["142K", "145K", "148K", "151K"];
    const clicksValues = ["3.2K", "3.4K", "3.6K", "3.8K"];
    const conversionsValues = ["89", "92", "95", "98"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % impressionsValues.length;
      setCampaignMetrics({
        impressions: impressionsValues[index],
        clicks: clicksValues[index],
        conversions: conversionsValues[index]
      });
    }, 3000);

    return () => clearInterval(interval);
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
      <div className="px-4 py-3 h-full flex flex-col">
        {/* Header */}
        <div className="text-xs text-gray-400 mb-2 text-center flex items-center justify-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Campaign Performance
        </div>

        {/* Main Metric */}
        <div className="text-center mb-2">
          <div className="text-xs text-gray-400 mb-1">Total Impressions</div>
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
            className="text-white"
            style={{ fontSize: '14px', fontWeight: '500' }}
          >
            {campaignMetrics.impressions}
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <MousePointer className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400">Clicks</span>
            </div>
            <div className="text-xs text-gray-300">{campaignMetrics.clicks}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Eye className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-400">Conversions</span>
            </div>
            <div className="text-xs text-gray-300">{campaignMetrics.conversions}</div>
          </div>
        </div>
      </div>
    </div>
  );
}