import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCard } from "@/components/messages/MessageCard";
import { MessageList } from "@/components/messages/MessageList";
import { NewMessageIndicator } from "@/components/messages/NewMessageIndicator";
import SafariBrowserFrame from "@/components/dashboard/SafariBrowserFrame";
import { useScrollFade } from "@/hooks/useScrollFade";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  message: string;
  timestamp: string;
  isNew?: boolean;
  type: 'received' | 'sent';
}

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "Sarah Chen",
    avatar: "SC",
    message: "Hey! The new dashboard design looks amazing. When can we schedule the review meeting?",
    timestamp: "2 min ago",
    type: "received"
  },
  {
    id: "2", 
    sender: "Mike Rodriguez",
    avatar: "MR",
    message: "Great work on the sales report. The metrics are looking really strong this quarter.",
    timestamp: "5 min ago",
    type: "received"
  },
  {
    id: "3",
    sender: "Sara R",
    avatar: "SR",
    message: "Thanks Mike! I'll have the final version ready by tomorrow.",
    timestamp: "3 min ago",
    type: "sent"
  },
  {
    id: "4",
    sender: "Emily Watson",
    avatar: "EW", 
    message: "Can you send me the latest project timeline? Need to update the client.",
    timestamp: "8 min ago",
    type: "received"
  },
  {
    id: "5",
    sender: "Alex Thompson",
    avatar: "AT",
    message: "The integration is complete. Ready for testing!",
    timestamp: "12 min ago", 
    type: "received"
  }
];

const newMessageTemplates = [
  {
    sender: "David Park",
    avatar: "DP",
    message: "Just finished the API integration. Everything is working perfectly!",
    type: "received" as const
  },
  {
    sender: "Lisa Zhang",
    avatar: "LZ", 
    message: "The client loved the demo! They want to move forward with the project.",
    type: "received" as const
  },
  {
    sender: "Ryan Miller",
    avatar: "RM",
    message: "Hey, can we schedule a quick call to discuss the database optimization?",
    type: "received" as const
  }
];

interface EmbeddableMessagingDashboardProps {
  showSafariFrame?: boolean;
  showSidebar?: boolean;
}

export default function EmbeddableMessagingDashboard({ 
  showSafariFrame = true, 
  showSidebar = true 
}: EmbeddableMessagingDashboardProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessageCount, setNewMessageCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add new messages every 8-15 seconds
      if (Math.random() > 0.6) {
        const template = newMessageTemplates[Math.floor(Math.random() * newMessageTemplates.length)];
        const newMessage: Message = {
          ...template,
          id: Date.now().toString(),
          timestamp: "now",
          isNew: true
        };

        setMessages(prev => [newMessage, ...prev]);
        setNewMessageCount(prev => prev + 1);

        // Remove "new" status after 5 seconds
        setTimeout(() => {
          setMessages(prev => 
            prev.map(msg => 
              msg.id === newMessage.id ? { ...msg, isNew: false } : msg
            )
          );
        }, 5000);
      }
    }, 4000); // Faster animation intervals (4 seconds instead of 10)

    return () => clearInterval(interval);
  }, []);



  const { elementRef, style } = useScrollFade();

  const DashboardContent = () => (
    <div 
      ref={elementRef}
      style={style}
      className="flex h-screen bg-gray-900 rounded-[10px] overflow-hidden"
    >
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-700 px-6 bg-gray-800">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold text-gray-300">Conversations</h1>
            <NewMessageIndicator count={newMessageCount} />
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Message List */}
          <div className="w-80 border-r border-gray-700 bg-gray-800">
            <MessageList messages={messages} />
          </div>

          {/* Message Details */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-6">
              <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-300">Recent Conversations</h2>
                  
                  <div className="grid gap-4">
                    <AnimatePresence mode="popLayout">
                      {messages.slice(0, 6).map((message, index) => (
                        <MessageCard 
                          key={message.id} 
                          message={message} 
                          index={index}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (showSafariFrame) {
    return (
      <div 
        ref={elementRef}
        style={style}
        className="w-[1000px] h-full mx-auto"
      >
        <SafariBrowserFrame url="messages.app.missioncontrol.com">
          <div className="flex h-screen bg-gray-900 rounded-[10px] overflow-hidden">
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-700 px-6 bg-gray-800">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold text-gray-300">Conversations</h1>
                  <NewMessageIndicator count={newMessageCount} />
                </div>
              </header>

              {/* Main Content */}
              <div className="flex-1 flex overflow-hidden">
                {/* Message List */}
                <div className="w-80 border-r border-gray-700 bg-gray-800">
                  <MessageList messages={messages} />
                </div>

                {/* Message Details */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 p-6">
                    <div className="max-w-4xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-2xl font-bold mb-6 text-gray-300">Recent Conversations</h2>
                        
                        <div className="grid gap-4">
                          <AnimatePresence mode="popLayout">
                            {messages.slice(0, 6).map((message, index) => (
                              <MessageCard 
                                key={message.id} 
                                message={message} 
                                index={index}
                              />
                            ))}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SafariBrowserFrame>
      </div>
    );
  }

  return <DashboardContent />;
}