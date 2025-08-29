import { 
  Home, 
  Users, 
  MessageCircle, 
  Calendar, 
  Zap, 
  Megaphone, 
  CreditCard, 
  Settings,
  BarChart3
} from "lucide-react";
import { useLocation } from "wouter";

const navigationItems = [
  { icon: Home, label: "Dashboard", href: "/", testId: "nav-home" },
  { icon: MessageCircle, label: "Messages", href: "/messages", testId: "nav-messages" },
  { icon: Users, label: "Contacts", href: "/contacts", testId: "nav-contacts" },
  { icon: Calendar, label: "Calendar", href: "/calendar", testId: "nav-calendar" },
  { icon: Zap, label: "Automations", href: "/automations", testId: "nav-automations" },
  { icon: Megaphone, label: "Marketing", href: "/marketing", testId: "nav-marketing" },
  { icon: CreditCard, label: "Payments", href: "/payments", testId: "nav-payments" },
  { icon: Settings, label: "Settings", href: "/settings", testId: "nav-settings" },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="w-64 border-r border-gray-700 flex-shrink-0 ambient-bg bg-[#121212]" style={{ backgroundColor: '#383838' }} data-testid="sidebar">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8" data-testid="sidebar-header">
          <span className="text-[14px] font-medium text-[#919191]" data-testid="logo-text">
            Mission Control
          </span>
        </div>
        
        <nav className="space-y-2" data-testid="sidebar-navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            return (
              <div
                key={item.label}
                className={`sidebar-item px-3 py-2 rounded-md flex items-center space-x-3 ${
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
