import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus } from 'lucide-react';

interface CalendarCardProps {
  className?: string;
}

export default function CalendarCard({ className = "" }: CalendarCardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showBooking, setShowBooking] = useState(false);
  const [appointmentCount, setAppointmentCount] = useState(5);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const bookingInterval = setInterval(() => {
      setShowBooking(true);
      setAppointmentCount(prev => prev + 1);
      setTimeout(() => setShowBooking(false), 4000);
    }, 8000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(bookingInterval);
    };
  }, []);

  const appointments = [
    { time: '10:00', title: 'Demo' },
    { time: '14:30', title: 'Call' },
  ];

  return (
    <div 
      className={`relative mx-auto ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="relative p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          {showBooking && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="flex items-center gap-1 text-white text-xs font-medium bg-[#0FB981] px-2 py-1 rounded-full"
            >
              <Plus className="w-3 h-3" />
              New appointment
            </motion.div>
          )}
        </div>

        {/* Date */}
        <div className="text-left mb-2">
          <div className="text-xs text-gray-400">
            {currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* Today's Count */}
        <div className="text-center mb-3">
          <motion.div 
            key={appointmentCount}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="text-2xl font-medium text-white"
          >
            {appointmentCount}
          </motion.div>
          <div className="text-sm text-gray-400">Appointments</div>
        </div>

        {/* Upcoming Appointments */}
        <div className="space-y-1 flex-1">
          {appointments.map((apt, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-gray-400">{apt.time}</span>
              <span className="text-gray-300">{apt.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}