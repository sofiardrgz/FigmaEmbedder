import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CalendarCardProps {
  className?: string;
}

export default function CalendarCard({ className = "" }: CalendarCardProps) {
  const [newAppointment, setNewAppointment] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewAppointment(true);
      setTimeout(() => setNewAppointment(false), 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
          <div className="text-sm text-gray-400 mb-1">Calendar</div>
          <div className="text-lg font-medium text-white">5 Today</div>
        </div>

        {/* Appointment Alert */}
        {newAppointment && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center text-sm py-1 rounded"
            style={{ backgroundColor: '#0FB981', color: 'white' }}
          >
            Appointment booked
          </motion.div>
        )}
      </div>
    </div>
  );
}