import { motion } from "framer-motion";
import { Home, Megaphone } from "lucide-react";
import SafariBrowserFrame from "../dashboard/SafariBrowserFrame";

interface EmbeddableMarketingOnlyProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddableMarketingOnly({ 
  showSafariFrame = true,
  className = ""
}: EmbeddableMarketingOnlyProps) {

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
              <Megaphone className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">Marketing Analytics</span>
          </div>
        </div>

        {/* Marketing Content */}
        <div className="flex-1 overflow-hidden p-6" style={{ backgroundColor: '#0d0d0d' }}>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">Marketing Analytics</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <div className="text-sm text-gray-400">Facebook Reach</div>
              <div className="text-lg font-bold text-gray-300">45.2K</div>
              <div className="text-green-400 text-xs">+12%</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg">
              <div className="text-sm text-gray-400">Twitter Engagement</div>
              <div className="text-lg font-bold text-gray-300">8.9K</div>
              <div className="text-green-400 text-xs">+8%</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { platform: "LinkedIn", metric: "Post Views", value: "12.3K", change: "+15%" },
              { platform: "Instagram", metric: "Story Views", value: "5.7K", change: "+22%" },
              { platform: "YouTube", metric: "Video Views", value: "28.1K", change: "+18%" }
            ].map((social, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/50 p-3 rounded-lg flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-medium text-gray-300">{social.platform}</div>
                  <div className="text-xs text-gray-400">{social.metric}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-300">{social.value}</div>
                  <div className="text-xs text-green-400">{social.change}</div>
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