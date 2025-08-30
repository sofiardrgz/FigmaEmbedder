import { motion } from "framer-motion";
import { Home, Users, Plus } from "lucide-react";
import SafariBrowserFrame from "../dashboard/SafariBrowserFrame";

interface EmbeddableContactsOnlyProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddableContactsOnly({ 
  showSafariFrame = true,
  className = ""
}: EmbeddableContactsOnlyProps) {

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
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Contacts</span>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">Contacts</span>
          </div>
        </div>

        {/* Contacts Content */}
        <div className="flex-1 overflow-hidden p-6" style={{ backgroundColor: '#0d0d0d' }}>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">Contacts</h2>
          
          {/* New Contact Added Notification */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-green-600/20 border border-green-500 p-3 rounded-lg mb-4"
          >
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">New Contact Added</span>
            </div>
            <div className="text-xs text-gray-300 mt-1">Robert Miller - COO at InnovateNow</div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Robert Miller", role: "COO", company: "InnovateNow", status: "new", isNew: true },
              { name: "John Smith", role: "CEO", company: "TechCorp", status: "active", isNew: false },
              { name: "Lisa Johnson", role: "Marketing Dir", company: "StartupXYZ", status: "prospect", isNew: false },
              { name: "David Chen", role: "CTO", company: "InnovateLab", status: "active", isNew: false },
              { name: "Maria Garcia", role: "VP Sales", company: "GrowthCo", status: "prospect", isNew: false },
              { name: "Sarah Wilson", role: "Product Manager", company: "DigitalEdge", status: "active", isNew: false },
              { name: "Kevin Brown", role: "Director", company: "CloudTech", status: "prospect", isNew: false },
              { name: "Amy Davis", role: "Founder", company: "StartupHub", status: "active", isNew: false }
            ].map((contact, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`bg-gray-800/50 p-3 rounded-lg ${
                  contact.isNew ? 'ring-1 ring-green-500/30 bg-green-600/10' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-300">{contact.name}</div>
                    <div className="text-xs text-gray-400">{contact.role} at {contact.company}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`text-xs px-2 py-0.5 rounded ${
                        contact.status === 'active' ? 'bg-green-600/20 text-green-400' : 
                        contact.status === 'new' ? 'bg-blue-600/20 text-blue-400' :
                        'bg-yellow-600/20 text-yellow-400'
                      }`}>
                        {contact.status}
                      </div>
                      {contact.isNew && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-xs text-green-400 font-medium"
                        >
                          NEW
                        </motion.div>
                      )}
                    </div>
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