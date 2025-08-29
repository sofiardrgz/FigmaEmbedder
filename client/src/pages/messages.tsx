import Sidebar from "@/components/dashboard/Sidebar";
import { MessagesDashboardContent } from "@/components/messages/MessagesDashboardContent";

export default function Messages() {
  return (
    <div className="flex text-foreground" style={{ backgroundColor: '#1b1a19', maxWidth: '980px', height: '90vh', margin: '0 auto' }}>
      <Sidebar />
      <div className="flex-1">
        <MessagesDashboardContent />
      </div>
    </div>
  );
}