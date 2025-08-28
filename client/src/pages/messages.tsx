import Sidebar from "@/components/dashboard/Sidebar";
import { MessagesDashboardContent } from "@/components/messages/MessagesDashboardContent";

export default function Messages() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1">
        <MessagesDashboardContent />
      </div>
    </div>
  );
}