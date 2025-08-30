import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SalesCardProps {
  className?: string;
}

export default function SalesCard({ className = "" }: SalesCardProps) {

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
                  scale: [1, 1.05, 1, 1.08, 1],
                  textShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 8px rgba(34, 197, 94, 0.3)",
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 6px rgba(34, 197, 94, 0.2)",
                    "0 0 0px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.5, 0.8, 1]
                }}
                className="text-lg font-bold text-gray-300"
              >
                $2.4M
              </motion.div>
              <div className="text-blue-400 text-xs">+28%</div>
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
                  scale: [1, 1.06, 1, 1.04, 1],
                  textShadow: [
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 6px rgba(34, 197, 94, 0.2)",
                    "0 0 0px rgba(34, 197, 94, 0)",
                    "0 0 4px rgba(34, 197, 94, 0.1)",
                    "0 0 0px rgba(34, 197, 94, 0)"
                  ]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10,
                  delay: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.7, 1]
                }}
                className="text-lg font-bold text-gray-300"
              >
                142
              </motion.div>
              <div className="text-blue-400 text-xs">+15%</div>
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
                    delay: i * 0.1,
                    repeat: Infinity,
                    duration: 8 + i * 0.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    repeatType: "reverse"
                  }}
                  className="bg-blue-500 w-2.5 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}