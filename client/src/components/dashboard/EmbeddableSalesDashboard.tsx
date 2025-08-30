import { motion } from "framer-motion";
import { Home } from "lucide-react";
import SafariBrowserFrame from "./SafariBrowserFrame";

interface EmbeddableSalesDashboardProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddableSalesDashboard({ 
  showSafariFrame = true,
  className = ""
}: EmbeddableSalesDashboardProps) {

  const DashboardContent = () => (
    <div className={`flex text-gray-300 rounded-[15px] overflow-hidden ambient-bg ${className}`} style={{ backgroundColor: '#0d0d0d', width: '900px', height: '100vh', margin: '0 auto' }}>
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-700 flex-shrink-0" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-5">
            <span className="font-normal text-[18px] text-gray-300">Smart Squatch</span>
          </div>
          
          <nav className="space-y-1">
            <div className="px-4 py-2 rounded-md flex items-center space-x-3 text-gray-300 bg-green-600">
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">Home</span>
          </div>
        </div>

        {/* Sales Dashboard Content */}
        <div className="flex-1 overflow-hidden p-6" style={{ backgroundColor: '#0d0d0d' }}>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">Sales Dashboard</h2>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-sm text-gray-400">New Leads</div>
              <div className="text-2xl font-bold text-gray-300">12,000</div>
              <div className="text-green-400 text-sm">+24%</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-sm text-gray-400">Follow-ups</div>
              <div className="text-2xl font-bold text-gray-300">600</div>
              <div className="text-green-400 text-sm">+18%</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-sm text-gray-400">Closed Deals</div>
              <div className="text-2xl font-bold text-gray-300">340</div>
              <div className="text-green-400 text-sm">+31%</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-sm text-gray-400">Revenue</div>
              <div className="text-2xl font-bold text-gray-300">$2.4M</div>
              <div className="text-green-400 text-sm">+28%</div>
            </div>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-3">Revenue Trend</h3>
              <div className="h-24 bg-gray-700/30 rounded flex items-end justify-between px-2 pb-2">
                {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-green-500 w-2 rounded-sm"
                  />
                ))}
              </div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-3">Conversion Rate</h3>
              <div className="h-24 flex items-center justify-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
                  <motion.div
                    initial={{ strokeDasharray: "0 100" }}
                    animate={{ strokeDasharray: "72 100" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 rounded-full border-4 border-green-500"
                    style={{ 
                      transform: 'rotate(-90deg)',
                      strokeDasharray: '72 100'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-300">
                    72%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leads Pipeline Table */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-300 mb-3">Leads Pipeline</h3>
            <div className="space-y-2">
              <div className="grid grid-cols-4 gap-4 text-xs text-gray-400 border-b border-gray-600 pb-2">
                <div>Lead Source</div>
                <div>Contacts</div>
                <div>Qualified</div>
                <div>Value</div>
              </div>
              {[
                { source: "Website", contacts: 245, qualified: 89, value: "$340K" },
                { source: "LinkedIn", contacts: 156, qualified: 67, value: "$280K" },
                { source: "Email Campaign", contacts: 98, qualified: 45, value: "$190K" },
                { source: "Referral", contacts: 67, qualified: 34, value: "$150K" }
              ].map((pipeline, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-4 gap-4 text-sm py-2 border-b border-gray-700/50"
                >
                  <div className="text-gray-300 font-medium">{pipeline.source}</div>
                  <div className="text-gray-400">{pipeline.contacts}</div>
                  <div className="text-green-400">{pipeline.qualified}</div>
                  <div className="text-gray-300 font-bold">{pipeline.value}</div>
                </motion.div>
              ))}
            </div>
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