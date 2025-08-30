import React from 'react';

interface ContactsCardProps {
  className?: string;
}

export default function ContactsCard({ className = "" }: ContactsCardProps) {
  const contacts = [
    { name: "John Smith", role: "CEO" },
    { name: "Lisa Johnson", role: "Marketing" },
    { name: "David Chen", role: "CTO" },
    { name: "Sarah Wilson", role: "Sales" },
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
      <div className="px-4 py-3 h-full">
        <div className="text-xs text-gray-400 mb-2 text-center">Recent Contacts</div>
        <div className="space-y-2">
          {contacts.slice(0, 4).map((contact, i) => (
            <div 
              key={i}
              className="flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ backgroundColor: '#0FB981' }}>
                {contact.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-300 truncate">{contact.name}</div>
              </div>
              <div className="text-xs text-gray-400">{contact.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}