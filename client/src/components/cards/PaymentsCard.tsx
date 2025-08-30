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
    // Start animation immediately
    setShowPayment(true);
    setHighlightPaid(0);
    
    const interval = setInterval(() => {
      setShowPayment(false);
      setHighlightPaid(-1);
      
      setTimeout(() => {
        setShowPayment(true);
        setHighlightPaid(0);
      }, 3000);
    }, 8000);

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
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '320px',
        border: 'none'
      }}
    >
      <div className="px-6 py-6 h-full flex flex-col justify-center">
        <div className="flex-1 space-y-5">
          {/* New Payment Notification */}
          {showPayment && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: showPayment ? 1 : 0, y: showPayment ? 0 : -20 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl mb-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2, 
                    ease: "linear" 
                  }}
                >
                  <CheckCircle className="w-4 h-4" style={{ color: '#0FB981' }} />
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
              <DollarSign className="w-5 h-5" style={{ color: '#0FB981' }} />
              <span className="text-sm text-gray-400">Total Revenue</span>
            </div>
            <motion.div 
              animate={{ 
                scale: [1, 1.01, 1],
                opacity: [1, 0.95, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3.5, 
                ease: "easeInOut",
                repeatType: "reverse"
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
            <div className="text-sm" style={{ color: '#0FB981' }}>+7% this month</div>
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
                  invoice.status === 'paid' ? 'bg-gray-600/20' : 'bg-gray-600/20 text-gray-400'
                }`}
                style={invoice.status === 'paid' ? { color: '#0FB981' } : {}}>
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