import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

interface PaymentsCardProps {
  className?: string;
}

export default function PaymentsCard({ className = "" }: PaymentsCardProps) {
  const [invoiceStatuses, setInvoiceStatuses] = useState(["paid", "pending", "paid"]);
  const [totalRevenue, setTotalRevenue] = useState("$7,500");

  useEffect(() => {
    const interval = setInterval(() => {
      // Change pending to paid and update revenue
      setInvoiceStatuses(["paid", "paid", "paid"]);
      setTotalRevenue("$8,700");
      
      // Reset after 6 seconds
      setTimeout(() => {
        setInvoiceStatuses(["paid", "pending", "paid"]);
        setTotalRevenue("$7,500");
      }, 6000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const invoices = [
    { invoice: "INV-001", amount: "$2,500", status: invoiceStatuses[0] },
    { invoice: "INV-002", amount: "$1,200", status: invoiceStatuses[1] },
    { invoice: "INV-003", amount: "$3,800", status: invoiceStatuses[2] },
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
        <div className="flex-1 space-y-4">
          {/* Revenue Summary */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
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
              className="text-lg font-bold text-white"
            >
              {totalRevenue}
            </motion.div>
            <div className="text-sm" style={{ color: '#0FB981' }}>+18% this month</div>
          </motion.div>

          {/* Invoice List */}
          <div className="space-y-2">
            {invoices.map((invoice, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0
                }}
                transition={{ 
                  delay: i * 0.1
                }}
                className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-xl flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-gray-200">{invoice.invoice}</div>
                  <div className="text-xs text-gray-400">{invoice.amount}</div>
                </div>
                <motion.div
                  animate={invoice.status === "paid" ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 0.5, repeat: invoice.status === "paid" ? Infinity : 0, repeatType: "reverse" }}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    invoice.status === "paid" 
                      ? "text-white" 
                      : "bg-gray-600/50 text-gray-400"
                  }`}
                  style={{ 
                    backgroundColor: invoice.status === "paid" ? '#0FB981' : undefined
                  }}
                >
                  {invoice.status === "paid" ? "Paid" : "Pending"}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}