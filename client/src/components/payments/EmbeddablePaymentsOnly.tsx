import { motion } from "framer-motion";
import { Home, CreditCard } from "lucide-react";
import SafariBrowserFrame from "../dashboard/SafariBrowserFrame";

interface EmbeddablePaymentsOnlyProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddablePaymentsOnly({ 
  showSafariFrame = true,
  className = ""
}: EmbeddablePaymentsOnlyProps) {

  const DashboardContent = () => (
    <div className={`flex text-gray-300 rounded-[15px] overflow-hidden ambient-bg ${className}`} style={{ backgroundColor: '#0d0d0d', width: '900px', height: '100vh', margin: '0 auto' }}>
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-700 flex-shrink-0" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-5">
            <span className="font-semibold text-lg text-gray-300">Smart Squatch</span>
          </div>
          
          <nav className="space-y-1">
            <div className="px-4 py-2 rounded-md flex items-center space-x-3 text-gray-300 bg-green-600">
              <CreditCard className="w-4 h-4" />
              <span className="text-sm font-medium">Payments</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">Payments & Invoices</span>
          </div>
        </div>

        {/* Payments Content */}
        <div className="flex-1 overflow-hidden p-6" style={{ backgroundColor: '#0d0d0d' }}>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">Payments & Invoices</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <div className="text-sm text-gray-400">Monthly Revenue</div>
              <div className="text-lg font-bold text-gray-300">$24,500</div>
              <div className="text-green-400 text-xs">+7%</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <div className="text-sm text-gray-400">Pending Invoices</div>
              <div className="text-lg font-bold text-gray-300">12</div>
              <div className="text-yellow-400 text-xs">$8,200</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { invoice: "INV-2024-001", client: "TechCorp", amount: "$2,500", status: "paid" },
              { invoice: "INV-2024-002", client: "StartupXYZ", amount: "$1,200", status: "pending" },
              { invoice: "INV-2024-003", client: "InnovateLab", amount: "$3,800", status: "paid" }
            ].map((payment, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 p-3 rounded-lg flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-gray-300">{payment.invoice}</div>
                  <div className="text-xs text-gray-400">{payment.client}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-300">{payment.amount}</div>
                  <div className={`text-xs px-2 py-1 rounded ${
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

  if (showSafariFrame) {
    return (
      <SafariBrowserFrame>
        <DashboardContent />
      </SafariBrowserFrame>
    );
  }

  return <DashboardContent />;
}