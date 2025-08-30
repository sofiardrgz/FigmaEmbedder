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
      className={`text-gray-300 rounded-2xl overflow-hidden ${className}`} 
      style={{ 
        backgroundColor: '#1c1c1e', 
        width: '260px', 
        height: '300px',
        border: 'none',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="p-6 h-full flex flex-col">
        {/* New Appointment Notification */}
        {showNewAppointment && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 1.0,
              ease: "easeOut"
            }}
            className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl mb-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              >
                <Calendar className="w-4 h-4 text-gray-300" />
              </motion.div>
              <span className="text-gray-300 font-medium text-sm">Appointment Scheduled</span>
            </div>
            <div className="text-base font-medium text-white">Meeting with Sarah</div>
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
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3"
            >
              <motion.div 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="w-2 h-8 bg-blue-500 rounded-full"
              ></motion.div>
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