import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

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

  const appointments = [
    { time: "10:00", title: "Sales Demo", client: "TechCorp" },
    { time: "14:30", title: "Follow-up", client: "StartupXYZ" },
    { time: "16:00", title: "Strategy", client: "InnovateLab" },
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
      <div className="px-4 py-3 h-full flex flex-col">
        {/* Header */}
        <div className="text-xs text-gray-400 mb-2 text-center flex items-center justify-center gap-1">
          <Calendar className="w-3 h-3" />
          Today's Schedule
        </div>

        {/* New Appointment Alert */}
        {newAppointment && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-2 px-2 py-1 rounded text-center"
            style={{ backgroundColor: '#0FB981', fontSize: '11px' }}
          >
            Appointment booked
          </motion.div>
        )}

        {/* Appointments */}
        <div className="space-y-1 flex-1">
          {appointments.map((apt, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 text-xs"
            >
              <div className="w-10 text-gray-400">{apt.time}</div>
              <div className="flex-1 text-gray-300 truncate">{apt.title}</div>
              <div className="text-gray-400 text-right">{apt.client}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}