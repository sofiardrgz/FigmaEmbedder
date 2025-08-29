import Sidebar from "@/components/dashboard/Sidebar";
import { MessagesDashboardContent } from "@/components/messages/MessagesDashboardContent";

export default function Messages() {
  return (
    <div className="flex text-foreground rounded-[15px] overflow-hidden" style={{ backgroundColor: '#0d0d0d', width: '900px', height: '100vh', margin: '0 auto' }}>
      <Sidebar />
      <div className="flex-1">
        <MessagesDashboardContent />
      </div>
    </div>
  );
}