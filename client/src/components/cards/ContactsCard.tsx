import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface ContactsCardProps {
  className?: string;
}

export default function ContactsCard({ className = "" }: ContactsCardProps) {
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
          <h3 className="font-normal text-[14px] text-gray-300 mb-2">Smart Squatch</h3>
          <div className="text-xs text-gray-400">Contacts</div>
        </div>
        
        {/* New Contact Notification */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-green-600/20 border border-green-500 p-2 rounded mb-3"
        >
          <div className="flex items-center gap-1">
            <Plus className="w-3 h-3 text-green-400" />
            <span className="text-green-400 font-medium text-[9px]">New Contact</span>
          </div>
          <div className="text-[8px] text-gray-300">Robert Miller - COO</div>
        </motion.div>

        <div className="flex-1 space-y-2">
          {[
            { name: "Robert Miller", role: "COO", company: "InnovateNow", status: "new", isNew: true },
            { name: "John Smith", role: "CEO", company: "TechCorp", status: "active", isNew: false },
            { name: "Lisa Johnson", role: "Marketing Dir", company: "StartupXYZ", status: "prospect", isNew: false },
            { name: "David Chen", role: "CTO", company: "InnovateLab", status: "active", isNew: false }
          ].map((contact, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`bg-gray-800/50 p-2 rounded ${
                contact.isNew ? 'ring-1 ring-green-500/30 bg-green-600/10' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-[8px] font-bold">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-gray-300 truncate">{contact.name}</div>
                  <div className="text-[8px] text-gray-400 truncate">{contact.role}</div>
                  <div className={`text-[8px] px-1 py-0.5 rounded inline-block mt-0.5 ${
                    contact.status === 'active' ? 'bg-green-600/20 text-green-400' : 
                    contact.status === 'new' ? 'bg-blue-600/20 text-blue-400' :
                    'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {contact.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}