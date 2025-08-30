import { motion } from "framer-motion";

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {
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
          <div className="text-xs text-gray-400">Sales Dashboard</div>
        </div>
        
        <div className="flex-1 space-y-3">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-800/50 p-2 rounded text-center"
            >
              <div className="text-[10px] text-gray-400">Revenue</div>
              <div className="text-sm font-bold text-gray-300">$2.4M</div>
              <div className="text-green-400 text-[9px]">+28%</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-800/50 p-2 rounded text-center"
            >
              <div className="text-[10px] text-gray-400">Deals</div>
              <div className="text-sm font-bold text-gray-300">340</div>
              <div className="text-green-400 text-[9px]">+31%</div>
            </motion.div>
          </div>

          {/* Mini Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 p-3 rounded"
          >
            <div className="text-[10px] text-gray-400 mb-2">Revenue Trend</div>
            <div className="h-12 bg-gray-700/30 rounded flex items-end justify-between px-1 pb-1">
              {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                  className="bg-green-500 w-1 rounded-sm"
                />
              ))}
            </div>
          </motion.div>

          {/* Mini Pipeline */}
          <div className="space-y-1">
            {[
              { source: "Website", value: "$340K" },
              { source: "LinkedIn", value: "$280K" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="bg-gray-800/50 p-2 rounded flex justify-between items-center"
              >
                <span className="text-[10px] text-gray-300">{item.source}</span>
                <span className="text-[10px] text-green-400 font-bold">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}