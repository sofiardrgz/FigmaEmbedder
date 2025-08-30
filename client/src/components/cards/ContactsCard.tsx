import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface ContactsCardProps {
  className?: string;
}

export default function ContactsCard({ className = "" }: ContactsCardProps) {
  const [showNewContact, setShowNewContact] = useState(false);
  const [highlightNew, setHighlightNew] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Show new contact notification
      setShowNewContact(true);
      setHighlightNew(true);
      
      // After 5 seconds, add to list and remove highlight
      setTimeout(() => {
        setHighlightNew(false);
      }, 5000);
      
      // Reset after 8 seconds
      setTimeout(() => {
        setShowNewContact(false);
      }, 8000);
    }, 15000); // Much longer cycle

    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { name: "John Smith", role: "CEO", company: "TechCorp" },
    { name: "Lisa Johnson", role: "Marketing Dir", company: "StartupXYZ" },
    { name: "David Chen", role: "CTO", company: "InnovateLab" },
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
        {/* New Contact Notification */}
        {showNewContact && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ 
              opacity: 1, 
              scale: highlightNew ? [1, 1.05, 1] : 1,
              y: 0
            }}
            transition={{ 
              duration: 0.8,
              scale: { 
                repeat: highlightNew ? Infinity : 0, 
                duration: 2.5,
                ease: "easeInOut" 
              }
            }}
            className="bg-green-600/20 border border-green-500 p-3 rounded mb-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Plus className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">New Lead</span>
            </div>
            <div className="text-base font-medium text-gray-200">Robert Miller</div>
            <div className="text-sm text-gray-400">COO at InnovateNow</div>
          </motion.div>
        )}

        <div className="flex-1 space-y-3">
          {contacts.map((contact, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800/50 p-3 rounded"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-200">
                    {contact.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {contact.role}
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