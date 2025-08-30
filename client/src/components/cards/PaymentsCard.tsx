import { motion } from "framer-motion";

interface PaymentsCardProps {
  className?: string;
}

export default function PaymentsCard({ className = "" }: PaymentsCardProps) {
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
          <div className="text-xs text-gray-400">Payments & Invoices</div>
        </div>
        
        <div className="flex-1 space-y-3">
          {/* Revenue Metrics */}
          <div className="grid grid-cols-2 gap-2">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-2 rounded text-center"
            >
              <div className="text-[10px] text-gray-400">Revenue</div>
              <div className="text-sm font-bold text-gray-300">$24.5K</div>
              <div className="text-green-400 text-[9px]">+7%</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 p-2 rounded text-center"
            >
              <div className="text-[10px] text-gray-400">Pending</div>
              <div className="text-sm font-bold text-gray-300">12</div>
              <div className="text-yellow-400 text-[9px]">$8.2K</div>
            </motion.div>
          </div>

          {/* Recent Invoices */}
          <div className="space-y-1">
            {[
              { invoice: "INV-001", client: "TechCorp", amount: "$2,500", status: "paid" },
              { invoice: "INV-002", client: "StartupXYZ", amount: "$1,200", status: "pending" },
              { invoice: "INV-003", client: "InnovateLab", amount: "$3,800", status: "paid" }
            ].map((payment, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="bg-gray-800/50 p-2 rounded flex items-center justify-between"
              >
                <div>
                  <div className="text-[10px] font-medium text-gray-300">{payment.invoice}</div>
                  <div className="text-[8px] text-gray-400">{payment.client}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-gray-300">{payment.amount}</div>
                  <div className={`text-[8px] px-1 py-0.5 rounded ${
                    payment.status === 'paid' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {payment.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}