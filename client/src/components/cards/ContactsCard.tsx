import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface ContactsCardProps {
  className?: string;
}

export default function ContactsCard({ className = "" }: ContactsCardProps) {
  const [contactCount, setContactCount] = useState(248);
  const [showNewContact, setShowNewContact] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNewContact(true);
      setContactCount(prev => prev + 1);
      
      setTimeout(() => {
        setShowNewContact(false);
      }, 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const contacts = [
    { initials: 'JS', color: 'from-blue-400 to-blue-600' },
    { initials: 'LJ', color: 'from-purple-400 to-purple-600' },
    { initials: 'DC', color: 'from-[#0FB981] to-emerald-600' },
    { initials: 'SW', color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="relative p-4 h-full flex flex-col justify-center">
        {/* New Contact Indicator */}
        {showNewContact && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-3 right-3 flex items-center gap-1 text-white text-xs font-medium bg-[#0FB981] px-2 py-1 rounded-full"
          >
            <Plus className="w-3 h-3" />
            Added
          </motion.div>
        )}

        {/* Contact Count */}
        <div className="text-center mb-4">
          <div className="text-2xl font-medium text-white mb-1">
            {contactCount.toLocaleString()}
          </div>
          <div className="text-sm text-gray-400">Total Contacts</div>
        </div>

        {/* Contact Avatars */}
        <div className="flex items-center justify-center gap-2">
          {contacts.map((contact, i) => (
            <motion.div 
              key={contact.initials}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}
            >
              {contact.initials}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}