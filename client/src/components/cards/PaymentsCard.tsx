import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';

interface PaymentsCardProps {
  className?: string;
}

export default function PaymentsCard({ className = "" }: PaymentsCardProps) {
  const [revenueValue, setRevenueValue] = useState("$24.8K");
  const [newPayment, setNewPayment] = useState(false);

  useEffect(() => {
    const values = ["$24.8K", "$25.2K", "$25.7K", "$26.1K"];
    let index = 0;
    
    const interval1 = setInterval(() => {
      index = (index + 1) % values.length;
      setRevenueValue(values[index]);
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

  const transactions = [
    { client: "TechCorp", amount: "$2,400", status: "Paid" },
    { client: "StartupXYZ", amount: "$1,800", status: "Pending" },
    { client: "InnovateLab", amount: "$3,200", status: "Paid" },
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
      <div className="px-4 py-3 h-full flex flex-col">
        {/* Header with Revenue */}
        <div className="text-center mb-2">
          <div className="text-xs text-gray-400 mb-1 flex items-center justify-center gap-1">
            <DollarSign className="w-3 h-3" />
            Monthly Revenue
          </div>
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
            {revenueValue}
          </motion.div>
        </div>

        {/* Payment Alert */}
        {newPayment && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-1 px-2 py-1 rounded text-center"
            style={{ backgroundColor: '#0FB981', fontSize: '11px' }}
          >
            Payment received
          </motion.div>
        )}

        {/* Recent Transactions */}
        <div className="space-y-1 flex-1">
          {transactions.map((tx, i) => (
            <div 
              key={i}
              className="flex items-center justify-between text-xs"
            >
              <div className="text-gray-300 truncate">{tx.client}</div>
              <div className="text-gray-400">{tx.amount}</div>
              <div className={`px-1 rounded text-xs ${tx.status === 'Paid' ? 'text-green-400' : 'text-yellow-400'}`}>
                {tx.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}