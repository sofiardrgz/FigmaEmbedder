import { motion } from "framer-motion";
import { DollarSign, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface PaymentsCardProps {
  className?: string;
}

export default function PaymentsCard({ className = "" }: PaymentsCardProps) {
  const [showPayment, setShowPayment] = useState(false);
  const [highlightPaid, setHighlightPaid] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Show new payment notification
      setShowPayment(true);
      setHighlightPaid(0); // Highlight first invoice as newly paid
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowPayment(false);
        setHighlightPaid(-1);
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const invoices = [
    { invoice: "INV-001", amount: "$2,500", status: "paid" },
    { invoice: "INV-002", amount: "$1,200", status: "pending" },
    { invoice: "INV-003", amount: "$3,800", status: "paid" },
  ];

  return (
    <div 
      className={`text-gray-300 rounded-lg overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#0d0d0d', 
        width: '260px', 
        height: '300px',
        border: '1px solid #374151'
      }}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex-1 space-y-4">
          {/* New Payment Notification */}
          {showPayment && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.5 }}
              className="bg-green-600/20 border border-green-500 p-3 rounded"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-semibold text-sm">Invoice Paid</span>
              </div>
              <div className="text-base font-medium text-gray-200">$2,500 received</div>
              <div className="text-sm text-gray-400">INV-001 from TechCorp</div>
            </motion.div>
          )}

          {/* Revenue Summary */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 p-4 rounded text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Total Revenue</span>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ 
                repeat: Infinity, 
                duration: 5, 
                ease: "easeInOut" 
              }}
              className="text-xl font-bold text-gray-300"
            >
              $24.5K
            </motion.div>
            <div className="text-green-400 text-sm">+7% this month</div>
          </motion.div>

          {/* Invoice List */}
          <div className="space-y-2">
            {invoices.map((invoice, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  backgroundColor: i === highlightPaid ? "rgba(34, 197, 94, 0.1)" : "rgba(31, 41, 55, 0.5)",
                  scale: i === highlightPaid ? 1.02 : 1
                }}
                transition={{ 
                  delay: i * 0.1,
                  backgroundColor: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="bg-gray-800/50 p-3 rounded flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-gray-200">{invoice.invoice}</div>
                  <div className="text-sm font-bold text-gray-300 mt-1">{invoice.amount}</div>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${
                  invoice.status === 'paid' ? 'bg-green-600/20 text-green-400' : 'bg-gray-600/20 text-gray-400'
                }`}>
                  {invoice.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}