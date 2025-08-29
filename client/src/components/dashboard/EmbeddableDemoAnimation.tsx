import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  MessageCircle, 
  Users, 
  Calendar, 
  Zap, 
  Bot, 
  Megaphone, 
  CreditCard,
  Settings,
  Plus,
  TrendingUp,
  DollarSign,
  Check,
  Clock
} from "lucide-react";
import SafariBrowserFrame from "./SafariBrowserFrame";

interface NavigationItem {
  icon: any;
  label: string;
  content: React.ReactNode;
}

const DemoContent = {
  Dashboard: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Sales Dashboard</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm text-gray-400">New Leads</div>
          <div className="text-2xl font-bold text-gray-300">12,000</div>
          <div className="text-green-400 text-sm">+24%</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm text-gray-400">Follow-ups</div>
          <div className="text-2xl font-bold text-gray-300">600</div>
          <div className="text-green-400 text-sm">+18%</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm text-gray-400">Closed Deals</div>
          <div className="text-2xl font-bold text-gray-300">340</div>
          <div className="text-green-400 text-sm">+31%</div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="text-sm text-gray-400">Revenue</div>
          <div className="text-2xl font-bold text-gray-300">$2.4M</div>
          <div className="text-green-400 text-sm">+28%</div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300 mb-3">Revenue Trend</h3>
          <div className="h-24 bg-gray-700/30 rounded flex items-end justify-between px-2 pb-2">
            {[40, 60, 45, 75, 85, 70, 90].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-green-500 w-2 rounded-sm"
              />
            ))}
          </div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-300 mb-3">Conversion Rate</h3>
          <div className="h-24 flex items-center justify-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
              <motion.div
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: "72 100" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 rounded-full border-4 border-green-500"
                style={{ 
                  transform: 'rotate(-90deg)',
                  strokeDasharray: '72 100'
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-300">
                72%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leads Pipeline Table */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-300 mb-3">Leads Pipeline</h3>
        <div className="space-y-2">
          <div className="grid grid-cols-4 gap-4 text-xs text-gray-400 border-b border-gray-600 pb-2">
            <div>Lead Source</div>
            <div>Contacts</div>
            <div>Qualified</div>
            <div>Value</div>
          </div>
          {[
            { source: "Website", contacts: 245, qualified: 89, value: "$340K" },
            { source: "LinkedIn", contacts: 156, qualified: 67, value: "$280K" },
            { source: "Email Campaign", contacts: 98, qualified: 45, value: "$190K" },
            { source: "Referral", contacts: 67, qualified: 34, value: "$150K" }
          ].map((pipeline, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-4 gap-4 text-sm py-2 border-b border-gray-700/50"
            >
              <div className="text-gray-300 font-medium">{pipeline.source}</div>
              <div className="text-gray-400">{pipeline.contacts}</div>
              <div className="text-green-400">{pipeline.qualified}</div>
              <div className="text-gray-300 font-bold">{pipeline.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  ),
  
  Messages: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Messages</h2>
      <div className="space-y-3">
        {[
          { name: "Sarah Chen", message: "New dashboard design looks amazing!", time: "2 min ago", unread: true },
          { name: "Mike Rodriguez", message: "Great work on the sales report", time: "5 min ago", unread: false },
          { name: "Emily Watson", message: "Can you send the project timeline?", time: "8 min ago", unread: true },
          { name: "David Park", message: "Meeting rescheduled to 3 PM", time: "12 min ago", unread: false },
          { name: "Lisa Johnson", message: "Budget approval needed for Q2", time: "15 min ago", unread: true },
          { name: "Alex Thompson", message: "Client feedback on the proposal", time: "18 min ago", unread: false },
          { name: "Maria Garcia", message: "New lead from LinkedIn campaign", time: "22 min ago", unread: true },
          { name: "Tom Wilson", message: "Demo scheduled for Friday", time: "25 min ago", unread: false }
        ].map((msg, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-gray-800/50 p-3 rounded-lg flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-xs font-bold">
              {msg.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className={`text-sm ${msg.unread ? 'font-semibold text-gray-200' : 'font-medium text-gray-300'}`}>
                {msg.name}
              </div>
              <div className={`text-xs ${msg.unread ? 'text-gray-300' : 'text-gray-400'}`}>
                {msg.message}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {msg.unread && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
              <div className="text-xs text-gray-500">{msg.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),

  Contacts: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Contacts</h2>
      
      {/* New Contact Added Notification */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-green-600/20 border border-green-500 p-3 rounded-lg mb-4"
      >
        <div className="flex items-center gap-2">
          <Plus className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium text-sm">New Contact Added</span>
        </div>
        <div className="text-xs text-gray-300 mt-1">Robert Miller - COO at InnovateNow</div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "Robert Miller", role: "COO", company: "InnovateNow", status: "new", isNew: true },
          { name: "John Smith", role: "CEO", company: "TechCorp", status: "active", isNew: false },
          { name: "Lisa Johnson", role: "Marketing Dir", company: "StartupXYZ", status: "prospect", isNew: false },
          { name: "David Chen", role: "CTO", company: "InnovateLab", status: "active", isNew: false },
          { name: "Maria Garcia", role: "VP Sales", company: "GrowthCo", status: "prospect", isNew: false },
          { name: "Sarah Wilson", role: "Product Manager", company: "DigitalEdge", status: "active", isNew: false },
          { name: "Kevin Brown", role: "Director", company: "CloudTech", status: "prospect", isNew: false },
          { name: "Amy Davis", role: "Founder", company: "StartupHub", status: "active", isNew: false }
        ].map((contact, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`bg-gray-800/50 p-3 rounded-lg ${
              contact.isNew ? 'ring-1 ring-green-500/30 bg-green-600/10' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                {contact.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-300">{contact.name}</div>
                <div className="text-xs text-gray-400">{contact.role} at {contact.company}</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`text-xs px-2 py-0.5 rounded ${
                    contact.status === 'active' ? 'bg-green-600/20 text-green-400' : 
                    contact.status === 'new' ? 'bg-blue-600/20 text-blue-400' :
                    'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {contact.status}
                  </div>
                  {contact.isNew && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-xs text-green-400 font-medium"
                    >
                      NEW
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),

  Calendar: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Calendar</h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-600/20 border border-green-500 p-4 rounded-lg mb-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <Check className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium">Appointment Added</span>
        </div>
        <div className="text-sm text-gray-300">Meeting with Sarah Chen - Product Review</div>
        <div className="text-xs text-gray-400">Tomorrow at 2:00 PM</div>
      </motion.div>
      <div className="space-y-2">
        {[
          { title: "Team Standup", time: "9:00 AM", status: "upcoming" },
          { title: "Client Presentation", time: "11:30 AM", status: "in-progress" },
          { title: "Design Review", time: "3:00 PM", status: "upcoming" }
        ].map((event, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800/50 p-3 rounded-lg flex items-center gap-3"
          >
            <Clock className="w-4 h-4 text-gray-400" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-300">{event.title}</div>
              <div className="text-xs text-gray-400">{event.time}</div>
            </div>
            <div className={`text-xs px-2 py-1 rounded ${
              event.status === 'in-progress' ? 'bg-green-600/20 text-green-400' : 'bg-gray-600/20 text-gray-400'
            }`}>
              {event.status}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),

  Automations: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Automations</h2>
      <div className="space-y-3">
        {[
          { name: "Lead Follow-up", status: "active", triggers: 45 },
          { name: "Welcome Email Sequence", status: "active", triggers: 23 },
          { name: "Abandoned Cart Recovery", status: "paused", triggers: 12 }
        ].map((automation, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800/50 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-300">{automation.name}</div>
                <div className="text-xs text-gray-400">{automation.triggers} triggers today</div>
              </div>
              <div className={`text-xs px-2 py-1 rounded ${
                automation.status === 'active' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
              }`}>
                {automation.status}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),

  Copilot: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">AI Copilot</h2>
      <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
        <div className="text-sm text-gray-300 mb-2">You: "Create an email for our new product launch"</div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-green-600/20 border border-green-500 rounded-lg p-4"
      >
        <div className="flex items-start gap-3">
          <Bot className="w-5 h-5 text-green-400 mt-0.5" />
          <div className="flex-1">
            <div className="text-sm font-medium text-green-400 mb-2">AI Copilot</div>
            <div className="text-sm text-gray-300 mb-3">Sure! I'll create an email for you!</div>
            
            {/* Email Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="bg-gray-900/50 border border-gray-600 rounded-lg p-4 mt-3"
            >
              <div className="text-xs text-gray-400 mb-2">Email Draft:</div>
              <div className="space-y-2">
                <div className="text-xs">
                  <span className="text-gray-400">Subject:</span>
                  <span className="text-gray-300 ml-2">🚀 Introducing Our Game-Changing New Platform</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400">To:</span>
                  <span className="text-gray-300 ml-2">Your Customer List</span>
                </div>
                <div className="border-t border-gray-600 pt-2 mt-2">
                  <div className="text-xs text-gray-300 leading-relaxed">
                    Hi [Name],<br/><br/>
                    We're excited to share something special with you...<br/><br/>
                    Our new platform delivers 10x faster results with intuitive design that your team will love.<br/><br/>
                    <span className="text-green-400">→ Get early access now</span><br/><br/>
                    Best regards,<br/>
                    The Team
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  ),

  Marketing: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Marketing Analytics</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800/50 p-3 rounded-lg">
          <div className="text-sm text-gray-400">Facebook Reach</div>
          <div className="text-lg font-bold text-gray-300">45.2K</div>
          <div className="text-green-400 text-xs">+12%</div>
        </div>
        <div className="bg-gray-800/50 p-3 rounded-lg">
          <div className="text-sm text-gray-400">Twitter Engagement</div>
          <div className="text-lg font-bold text-gray-300">8.9K</div>
          <div className="text-green-400 text-xs">+8%</div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { platform: "LinkedIn", metric: "Post Views", value: "12.3K", change: "+15%" },
          { platform: "Instagram", metric: "Story Views", value: "5.7K", change: "+22%" },
          { platform: "YouTube", metric: "Video Views", value: "28.1K", change: "+18%" }
        ].map((social, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800/50 p-3 rounded-lg flex items-center justify-between"
          >
            <div>
              <div className="text-sm font-medium text-gray-300">{social.platform}</div>
              <div className="text-xs text-gray-400">{social.metric}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-300">{social.value}</div>
              <div className="text-xs text-green-400">{social.change}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  ),

  Payments: (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-300 mb-6">Payments & Invoices</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800/50 p-3 rounded-lg">
          <div className="text-sm text-gray-400">Monthly Revenue</div>
          <div className="text-lg font-bold text-gray-300">$24,500</div>
          <div className="text-green-400 text-xs">+7%</div>
        </div>
        <div className="bg-gray-800/50 p-3 rounded-lg">
          <div className="text-sm text-gray-400">Pending Invoices</div>
          <div className="text-lg font-bold text-gray-300">12</div>
          <div className="text-yellow-400 text-xs">$8,200</div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { invoice: "INV-2024-001", client: "TechCorp", amount: "$2,500", status: "paid" },
          { invoice: "INV-2024-002", client: "StartupXYZ", amount: "$1,200", status: "pending" },
          { invoice: "INV-2024-003", client: "InnovateLab", amount: "$3,800", status: "paid" }
        ].map((payment, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800/50 p-3 rounded-lg flex items-center justify-between"
          >
            <div>
              <div className="text-sm font-medium text-gray-300">{payment.invoice}</div>
              <div className="text-xs text-gray-400">{payment.client}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-300">{payment.amount}</div>
              <div className={`text-xs px-2 py-1 rounded ${
                payment.status === 'paid' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
              }`}>
                {payment.status}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
};

interface EmbeddableDemoAnimationProps {
  showSafariFrame?: boolean;
  className?: string;
}

export default function EmbeddableDemoAnimation({ 
  showSafariFrame = true,
  className = ""
}: EmbeddableDemoAnimationProps) {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    { icon: Home, label: "Dashboard", content: DemoContent.Dashboard },
    { icon: MessageCircle, label: "Messages", content: DemoContent.Messages },
    { icon: Users, label: "Contacts", content: DemoContent.Contacts },
    { icon: Calendar, label: "Calendar", content: DemoContent.Calendar },
    { icon: Zap, label: "Automations", content: DemoContent.Automations },
    { icon: Bot, label: "Copilot", content: DemoContent.Copilot },
    { icon: Megaphone, label: "Marketing", content: DemoContent.Marketing },
    { icon: CreditCard, label: "Payments", content: DemoContent.Payments },
  ];

  useEffect(() => {
    let currentIndex = 0;
    console.log("Starting embeddable demo animation with", navigationItems.length, "items");
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % navigationItems.length;
      console.log("Switching to:", navigationItems[currentIndex].label);
      setHoveredItem(navigationItems[currentIndex].label);
      setActiveSection(navigationItems[currentIndex].label);
    }, 3000);

    return () => {
      console.log("Clearing embeddable demo animation interval");
      clearInterval(interval);
    };
  }, []);

  const DashboardContent = () => (
    <div className={`flex text-gray-300 rounded-[15px] overflow-hidden ambient-bg ${className}`} style={{ backgroundColor: '#0d0d0d', width: '900px', height: '100vh', margin: '0 auto' }}>
      {/* Sidebar */}
      <div className="w-48 border-r border-gray-700 flex-shrink-0" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-5">
            <span className="font-semibold text-lg text-gray-300">Smart Squatch</span>
          </div>
          
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.label;
              const isHovered = hoveredItem === item.label;
              
              return (
                <motion.div
                  key={item.label}
                  className={`px-4 py-2 rounded-md flex items-center space-x-3 transition-all duration-300 ${
                    isActive || isHovered
                      ? "text-gray-300 bg-green-600"
                      : "text-gray-400"
                  }`}
                  animate={{
                    backgroundColor: isActive || isHovered ? "#16a34a" : "transparent",
                    scale: isHovered ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="border-b border-gray-700 px-4 py-3" style={{ backgroundColor: '#0d0d0d' }}>
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-gray-400" />
            <span className="text-[14px] font-normal text-[#7d7d7d]">Home</span>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-hidden" style={{ backgroundColor: '#0d0d0d' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              {navigationItems.find(item => item.label === activeSection)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  if (showSafariFrame) {
    return (
      <SafariBrowserFrame>
        <DashboardContent />
      </SafariBrowserFrame>
    );
  }

  return <DashboardContent />;
}