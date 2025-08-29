import { 
  Home, 
  Users, 
  MessageCircle, 
  Calendar, 
  Zap, 
  Megaphone, 
  CreditCard, 
  Settings,
  BarChart3,
  Bot
} from "lucide-react";
import { useLocation } from "wouter";

const navigationItems = [
  { icon: Home, label: "Dashboard", href: "/", testId: "nav-home" },
  { icon: MessageCircle, label: "Messages", href: "/messages", testId: "nav-messages" },
  { icon: Users, label: "Contacts", href: "/contacts", testId: "nav-contacts" },
  { icon: Calendar, label: "Calendar", href: "/calendar", testId: "nav-calendar" },
  { icon: Zap, label: "Automations", href: "/automations", testId: "nav-automations" },
  { icon: Bot, label: "Copilot", href: "/copilot", testId: "nav-copilot" },
  { icon: Megaphone, label: "Marketing", href: "/marketing", testId: "nav-marketing" },
  { icon: CreditCard, label: "Payments", href: "/payments", testId: "nav-payments" },
  { icon: Settings, label: "Settings", href: "/settings", testId: "nav-settings" },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="w-48 border-r border-gray-700 flex-shrink-0 ambient-bg" style={{ backgroundColor: '#1b1a19' }} data-testid="sidebar">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-5" data-testid="sidebar-header">
          <span className="font-semibold text-lg text-gray-300" data-testid="logo-text">
            Mission Control
          </span>
        </div>
        
        <nav className="space-y-1" data-testid="sidebar-navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            const isZap = item.label === "Automations";
            return (
              <div
                key={item.label}
                className={`sidebar-item px-4 py-2 rounded-md flex items-center space-x-3 ${
                  isActive
                    ? "active text-gray-300"
                    : "text-gray-400"
                }`}
                style={isActive ? { backgroundColor: '#2E2E2E' } : {}}
                data-testid={item.testId}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
