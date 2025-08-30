import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CalendarCardProps {
  className?: string;
}

export default function CalendarCard({ className = "" }: CalendarCardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const bookingInterval = setInterval(() => {
      setShowBooking(true);
      setTimeout(() => setShowBooking(false), 2000);
    }, 7000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(bookingInterval);
    };
  }, []);

  const appointments = [
    { time: '10:00', title: 'Product Demo' },
    { time: '14:30', title: 'Follow-up Call' },
    { time: '16:00', title: 'Strategy Meeting' },
  ];

  return (
    <div 
      className={`relative rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm ${className}`} 
      style={{ width: '260px', height: '140px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-xl" />
      
      <div className="relative p-4 h-full flex flex-col">
        {/* Current Time */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-gray-300">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          {showBooking && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full"
            >
              Booked
            </motion.div>
          )}
        </div>

        {/* Today's Count */}
        <div className="text-center mb-3">
          <div className="text-2xl font-bold text-white">5</div>
          <div className="text-xs text-gray-400">appointments today</div>
        </div>

        {/* Upcoming Appointments */}
        <div className="space-y-1 flex-1">
          {appointments.slice(0, 2).map((apt, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-gray-400">{apt.time}</span>
              <span className="text-gray-300 truncate ml-2">{apt.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}