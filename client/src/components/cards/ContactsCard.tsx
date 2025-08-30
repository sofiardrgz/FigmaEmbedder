import React from 'react';

interface ContactsCardProps {
  className?: string;
}

export default function ContactsCard({ className = "" }: ContactsCardProps) {
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
      <div className="px-4 py-4 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="text-sm text-gray-400 mb-1">Contacts</div>
          <div className="text-lg font-medium text-white">248 Total</div>
        </div>

        {/* Contact Icons */}
        <div className="flex justify-center gap-2">
          {['JS', 'LJ', 'DC', 'SW'].map((initials, i) => (
            <div 
              key={i}
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium" 
              style={{ backgroundColor: '#0FB981' }}
            >
              {initials}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}