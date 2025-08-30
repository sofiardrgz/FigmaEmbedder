import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

interface CalendarCardProps {
  className?: string;
}

export default function CalendarCard({ className = "" }: CalendarCardProps) {
  const [showNewAppointment, setShowNewAppointment] = useState(false);

  useEffect(() => {
    // Start with just today's schedule, then slide in appointment
    setTimeout(() => {
      setShowNewAppointment(true);
      
      // Slide out after 6 seconds
      setTimeout(() => {
        setShowNewAppointment(false);
        
        // Slide in again after 4 seconds
        setTimeout(() => {
          setShowNewAppointment(true);
        }, 4000);
      }, 6000);
    }, 2000);
    
    const interval = setInterval(() => {
      setShowNewAppointment(false);
      
      setTimeout(() => {
        setShowNewAppointment(true);
        
        setTimeout(() => {
          setShowNewAppointment(false);
        }, 6000);
      }, 4000);
    }, 14000);

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
        backgroundColor: 'transparent', 
        width: '260px', 
        height: '280px',
        border: 'none'
      }}
    >
      <div className="px-6 py-6 h-full flex flex-col justify-center">
        {/* New Appointment Notification */}
        {showNewAppointment && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: showNewAppointment ? 1 : 0, y: showNewAppointment ? 0 : -20 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
            className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl mb-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Calendar className="w-4 h-4" style={{ color: '#0FB981' }} />
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
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut",
                  repeatType: "reverse" 
                }}
                className="w-2 h-8 rounded-full"
                style={{ backgroundColor: '#0FB981' }}
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