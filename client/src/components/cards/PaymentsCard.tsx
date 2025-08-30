import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PaymentsCardProps {
  className?: string;
}

export default function PaymentsCard({ className = "" }: PaymentsCardProps) {
  const [revenue, setRevenue] = useState("$24.8K");
  const [newPayment, setNewPayment] = useState(false);

  useEffect(() => {
    const values = ["$24.8K", "$25.2K", "$25.7K", "$26.1K"];
    let index = 0;
    
    const interval1 = setInterval(() => {
      index = (index + 1) % values.length;
      setRevenue(values[index]);
    }, 2500);

    const interval2 = setInterval(() => {
      setNewPayment(true);
      setTimeout(() => setNewPayment(false), 2000);
    }, 5000);

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
      <div className="px-4 py-4 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-sm text-gray-400 mb-1">Payments</div>
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className="text-lg font-medium text-white"
          >
            {revenue}
          </motion.div>
        </div>

        {/* Payment Alert */}
        {newPayment && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-sm py-1 rounded"
            style={{ backgroundColor: '#0FB981', color: 'white' }}
          >
            Payment received
          </motion.div>
        )}
      </div>
    </div>
  );
}