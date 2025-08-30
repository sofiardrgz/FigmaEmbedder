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
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowPayment(false);
        setHighlightPaid(-1);
      }, 5000);
    }, 13000); // Much longer cycle

    return () => clearInterval(interval);
  }, []);

  const invoices = [
    { invoice: "INV-001", amount: "$2,500", status: "paid" },
    { invoice: "INV-002", amount: "$1,200", status: "pending" },
    { invoice: "INV-003", amount: "$3,800", status: "paid" },
  ];

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
          {/* New Payment Notification */}
          {showPayment && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 1.0,
                ease: "easeOut"
              }}
              className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl mb-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <CheckCircle className="w-4 h-4 text-gray-300" />
                </motion.div>
                <span className="text-gray-300 font-medium text-sm">Payment Received</span>
              </div>
              <div className="text-base font-medium text-white">$2,500 received</div>
              <div className="text-sm text-gray-400">INV-001 from TechCorp</div>
            </motion.div>
          )}

          {/* Revenue Summary */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-800/30 backdrop-blur-sm p-5 rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Total Revenue</span>
            </div>
            <motion.div 
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [1, 0.9, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5, 
                ease: "easeInOut"
              }}
              className="text-xl font-bold text-white"
            >
              <motion.span
                animate={{ 
                  color: ["#ffffff", "#d1d5db", "#ffffff"]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3, 
                  ease: "easeInOut"
                }}
              >
                $24.5K
              </motion.span>
            </motion.div>
            <div className="text-blue-400 text-sm">+7% this month</div>
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
                className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-gray-200">{invoice.invoice}</div>
                  <div className="text-sm font-bold text-gray-300 mt-1">{invoice.amount}</div>
                </div>
                <div className={`text-xs px-3 py-1 rounded-full ${
                  invoice.status === 'paid' ? 'bg-blue-600/20 text-blue-400' : 'bg-gray-600/20 text-gray-400'
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