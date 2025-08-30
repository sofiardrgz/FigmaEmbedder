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
    { initials: 'DC', color: 'from-emerald-400 to-emerald-600' },
    { initials: 'SW', color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <div 
      className={`relative rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl" />
      
      <div className="relative p-4 h-full flex flex-col justify-center">
        {/* New Contact Indicator */}
        {showNewContact && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-3 right-3 flex items-center gap-1 text-emerald-400 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-full"
          >
            <Plus className="w-3 h-3" />
            Added
          </motion.div>
        )}

        {/* Contact Count */}
        <div className="text-center mb-4">
          <motion.div 
            key={contactCount}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="text-3xl font-bold text-white mb-1"
          >
            {contactCount.toLocaleString()}
          </motion.div>
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