import { motion } from "framer-motion";
import { Zap, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface AutomationsCardProps {
  className?: string;
}

export default function AutomationsCard({ className = "" }: AutomationsCardProps) {
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    // Start animation immediately
    setShowWorkflow(true);
    setCompletedSteps(1);
    
    const interval = setInterval(() => {
      setCompletedSteps(0);
      setShowWorkflow(false);
      
      setTimeout(() => {
        setShowWorkflow(true);
        setCompletedSteps(1);
        
        setTimeout(() => setCompletedSteps(2), 2000);
        setTimeout(() => setCompletedSteps(3), 4000);
      }, 2000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const workflows = [
    { name: "Lead Qualification", status: completedSteps >= 1 ? "completed" : "pending" },
    { name: "Email Follow-up", status: completedSteps >= 2 ? "completed" : "pending" },
    { name: "CRM Update", status: completedSteps >= 3 ? "completed" : "pending" },
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
      <div className="px-3 py-2 h-full flex flex-col justify-center">
        <div className="space-y-1">
          {workflows.slice(0, 3).map((workflow, i) => (
            <div 
              key={i}
              className="bg-gray-800/30 p-2 rounded-lg flex items-center gap-2"
            >
              <motion.div
                animate={workflow.status === "completed" ? { 
                  scale: [1, 1.1, 1]
                } : { opacity: [0.5, 1, 0.5] }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <CheckCircle 
                  className="w-3 h-3" 
                  style={{ 
                    color: workflow.status === "completed" ? '#0FB981' : '#6b7280' 
                  }} 
                />
              </motion.div>
              <div className="text-xs text-gray-300">{workflow.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}