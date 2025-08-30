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
    // Start animation immediately 
    setShowNewContact(true);
    setHighlightNew(true);
    
    const interval = setInterval(() => {
      // Smooth transition cycle
      setHighlightNew(false);
      
      setTimeout(() => {
        setShowNewContact(false);
      }, 2000);
      
      setTimeout(() => {
        setShowNewContact(true);
        setHighlightNew(true);
      }, 4000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { name: "John Smith", role: "CEO", company: "TechCorp" },
    { name: "Lisa Johnson", role: "Marketing Dir", company: "StartupXYZ" },
    { name: "David Chen", role: "CTO", company: "InnovateLab" },
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
        {/* New Contact Notification */}
        {showNewContact && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
            className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl mb-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3, 
                  ease: "linear" 
                }}
              >
                <Plus className="w-4 h-4" style={{ color: '#0FB981' }} />
              </motion.div>
              <span className="text-gray-300 font-medium text-sm">New Contact Added</span>
            </div>
            <div className="text-base font-medium text-white">Robert Miller</div>
            <div className="text-sm text-gray-400">COO at InnovateNow</div>
          </motion.div>
        )}

        <div className="flex-1 space-y-3">
          {contacts.map((contact, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl"
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