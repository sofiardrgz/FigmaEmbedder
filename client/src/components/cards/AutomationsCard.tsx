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
        height: '320px',
        border: 'none'
      }}
    >
      <div className="px-6 py-6 h-full flex flex-col justify-center">
        <div className="flex-1 space-y-4">
          {/* New Workflow Notification */}
          {showWorkflow && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: showWorkflow ? 1 : 0, y: showWorkflow ? 0 : -20 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl mb-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2, 
                    ease: "easeInOut",
                    repeatType: "reverse"
                  }}
                >
                  <Zap className="w-4 h-4" style={{ color: '#0FB981' }} />
                </motion.div>
                <span className="text-gray-300 font-medium text-sm">Workflow Triggered</span>
              </div>
              <div className="text-base font-medium text-white">New Lead Processing</div>
              <div className="text-sm text-gray-400">Auto-pilot engaged</div>
            </motion.div>
          )}

          {/* Workflow Steps */}
          <div className="space-y-3">
            {workflows.map((workflow, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  backgroundColor: workflow.status === "completed" ? "rgba(15, 185, 129, 0.1)" : "rgba(31, 41, 55, 0.3)"
                }}
                transition={{ 
                  delay: i * 0.1,
                  backgroundColor: { duration: 0.8, ease: "easeInOut" }
                }}
                className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-xl flex items-center gap-3"
              >
                <motion.div
                  animate={workflow.status === "completed" ? { 
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  } : { opacity: [0.5, 1, 0.5] }}
                  transition={{ 
                    duration: workflow.status === "completed" ? 1 : 2,
                    ease: "easeInOut",
                    repeat: workflow.status === "pending" ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                >
                  <CheckCircle 
                    className="w-4 h-4" 
                    style={{ 
                      color: workflow.status === "completed" ? '#0FB981' : '#6b7280' 
                    }} 
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-200">{workflow.name}</div>
                  <div 
                    className="text-xs"
                    style={{ 
                      color: workflow.status === "completed" ? '#0FB981' : '#6b7280' 
                    }}
                  >
                    {workflow.status === "completed" ? "Completed" : "Processing..."}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}