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

const navigationItems = [
  { icon: Home, label: "Home", active: true, testId: "nav-home" },
  { icon: Users, label: "Contacts", active: false, testId: "nav-contacts" },
  { icon: MessageCircle, label: "Conversations", active: false, testId: "nav-conversations" },
  { icon: Calendar, label: "Calendar", active: false, testId: "nav-calendar" },
  { icon: Zap, label: "Automations", active: false, testId: "nav-automations" },
  { icon: Megaphone, label: "Marketing", active: false, testId: "nav-marketing" },
  { icon: CreditCard, label: "Payments", active: false, testId: "nav-payments" },
  { icon: Settings, label: "Settings", active: false, testId: "nav-settings" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex-shrink-0" data-testid="sidebar">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8" data-testid="sidebar-header">
          <span className="font-semibold text-lg text-sidebar-foreground" data-testid="logo-text">
            Mission Control
          </span>
        </div>
        
        <nav className="space-y-2" data-testid="sidebar-navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`sidebar-item px-3 py-2 rounded-md cursor-pointer flex items-center space-x-3 ${
                  item.active
                    ? "active"
                    : "text-muted-foreground hover:text-sidebar-foreground"
                }`}
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
