import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface CalendarCardProps {
  className?: string;
}

export default function CalendarCard({ className = "" }: CalendarCardProps) {
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Show new appointment booking
      setShowNewAppointment(true);
      
      // Hide after 6 seconds
      setTimeout(() => {
        setShowNewAppointment(false);
      }, 6000);
    }, 14000); // Much longer cycle

    return () => clearInterval(interval);
  }, []);

  const appointments = [
    { title: "Team Standup", time: "9:00 AM" },
    { title: "Client Call", time: "11:30 AM" },
    { title: "Design Review", time: "3:00 PM" },
  ];

  return (
    <div 
      className={`text-gray-300 rounded-lg overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#0d0d0d', 
        width: '260px', 
        height: '300px',
        border: '1px solid #374151'
      }}
    >
      <div className="p-4 h-full flex flex-col">
        {/* New Appointment Notification */}
        {showNewAppointment && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.5 }}
            className="bg-green-600/20 border border-green-500 p-3 rounded mb-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">Appointment Booked</span>
            </div>
            <div className="text-base font-medium text-gray-200">Meeting with Sarah</div>
            <div className="text-sm text-gray-400">Tomorrow at 2:00 PM</div>
          </motion.div>
        )}

        <div className="flex-1 space-y-3">
          <div className="text-sm font-medium text-gray-300 mb-3">Today's Schedule</div>
          {appointments.map((appointment, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-800/50 p-3 rounded flex items-center gap-3"
            >
              <div className="w-2 h-8 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-200">
                  {appointment.title}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {appointment.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}