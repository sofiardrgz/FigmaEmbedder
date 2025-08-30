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
      // Slide out after 6 seconds
      setShowNewContact(false);
      
      setTimeout(() => {
        setShowNewContact(true);
        setHighlightNew(true);
      }, 4000);
    }, 12000);

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
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '140px',
        border: 'none'
      }}
    >
      <div className="px-3 py-2 h-full flex flex-col justify-center">
        <div className="space-y-1">
          {contacts.slice(0, 3).map((contact, i) => (
            <div 
              key={i}
              className="bg-gray-800/30 p-2 rounded-lg flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ backgroundColor: '#0FB981' }}>
                {contact.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-xs text-gray-300">{contact.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}