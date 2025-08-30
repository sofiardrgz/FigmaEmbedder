import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, DollarSign } from 'lucide-react';

interface PaymentsCardProps {
  className?: string;
}

export default function PaymentsCard({ className = "" }: PaymentsCardProps) {
  const [revenue, setRevenue] = useState(24800);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const revenues = [24800, 25200, 25700, 26100];
    let index = 0;
    
    const revenueInterval = setInterval(() => {
      index = (index + 1) % revenues.length;
      setRevenue(revenues[index]);
    }, 2500);

    const paymentInterval = setInterval(() => {
      setShowPayment(true);
      setTimeout(() => setShowPayment(false), 2000);
    }, 5000);

    return () => {
      clearInterval(revenueInterval);
      clearInterval(paymentInterval);
    };
  }, []);

  const transactions = [
    { amount: 2400, status: 'paid' },
    { amount: 1800, status: 'pending' },
    { amount: 3200, status: 'paid' }
  ];

  return (
    <div 
      className={`relative rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl" />
      
      <div className="relative p-4 h-full flex flex-col justify-center">
        {/* Payment Notification */}
        {showPayment && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute -top-2 left-4 right-4 bg-emerald-500 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircle className="w-3 h-3" />
            Payment received: $2,400
          </motion.div>
        )}

        {/* Total Revenue */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-1 mb-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-400">Monthly Revenue</span>
          </div>
          <motion.div 
            key={revenue}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            ${(revenue / 1000).toFixed(1)}K
          </motion.div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-1">
          {transactions.slice(0, 2).map((tx, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-gray-300">${tx.amount.toLocaleString()}</span>
              <span className={`px-2 py-1 rounded-full ${
                tx.status === 'paid' 
                  ? 'bg-emerald-500/20 text-emerald-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {tx.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}