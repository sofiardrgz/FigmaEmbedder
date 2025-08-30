import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {
  const [revenue, setRevenue] = useState({ value: 45200, growth: 28 });

  useEffect(() => {
    const revenues = [
      { value: 45200, growth: 28 },
      { value: 46100, growth: 32 },
      { value: 47300, growth: 35 },
      { value: 48200, growth: 38 }
    ];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % revenues.length;
      setRevenue(revenues[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`relative rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-xl" />
      
      <div className="relative p-4 h-full flex flex-col">
        {/* Growth indicator */}
        <div className="flex justify-end mb-2">
          <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-full">
            <ArrowUpRight className="w-3 h-3" />
            +{revenue.growth}%
          </div>
        </div>

        {/* Main Revenue */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <motion.div 
              key={revenue.value}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-3xl font-bold text-white mb-1"
            >
              ${(revenue.value / 1000).toFixed(1)}K
            </motion.div>
            <div className="text-sm text-gray-400">Monthly Revenue</div>
          </div>
        </div>

        {/* Chart */}
        <div className="flex items-end justify-center gap-1 h-6">
          {[0.6, 0.8, 0.5, 0.9, 0.7, 1.0, 0.85].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height * 100}%` }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="w-3 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-sm min-h-[2px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}