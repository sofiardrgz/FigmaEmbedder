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
    }, 3000);

    const paymentInterval = setInterval(() => {
      setShowPayment(true);
      setTimeout(() => setShowPayment(false), 4000);
    }, 7000);

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
      className={`relative ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="relative p-4 h-full flex flex-col justify-center">
        {/* Payment Notification */}
        {showPayment && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute -top-2 left-4 right-4 bg-[#0FB981] text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircle className="w-3 h-3" />
            Payment received: $2,400
          </motion.div>
        )}

        {/* Total Revenue */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-1 mb-2">
            <DollarSign className="w-4 h-4 text-[#0FB981]" />
            <span className="text-sm text-gray-400 font-medium">Monthly Revenue</span>
          </div>
          <div className="text-2xl font-medium text-white">
            ${(revenue / 1000).toFixed(1)}K
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-1">
          {transactions.slice(0, 2).map((tx, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-gray-300 font-medium">${tx.amount.toLocaleString()}</span>
              <span className={`px-2 py-1 rounded-full font-medium ${
                tx.status === 'paid' 
                  ? 'bg-[#0FB981]/20 text-[#0FB981]' 
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