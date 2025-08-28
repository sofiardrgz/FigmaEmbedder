import { useState } from "react";
import KPICard from "./KPICard";
import RecentSignupsTable from "./RecentSignupsTable";
import Sidebar from "./Sidebar";
import SafariBrowserFrame from "./SafariBrowserFrame";
import { ChevronDown, Home } from "lucide-react";
import type { DashboardData } from "@/types/dashboard";

interface EmbeddableDashboardProps {
  data?: DashboardData;
  showSafariFrame?: boolean;
  showSidebar?: boolean;
  className?: string;
}

const defaultData: DashboardData = {
  kpis: {
    newLeads: 12000,
    followUps: 600,
    answeredCalls: 400,
  },
  chartData: {
    newLeads: Array.from({ length: 30 }, (_, i) => ({
      date: `Mar ${i + 1}`,
      value: Math.floor(Math.random() * 800 + 200),
    })),
    followUps: Array.from({ length: 30 }, (_, i) => ({
      date: `Mar ${i + 1}`,
      value: Math.floor(Math.random() * 40 + 10),
    })),
    answeredCalls: Array.from({ length: 30 }, (_, i) => ({
      date: `Mar ${i + 1}`,
      value: Math.floor(Math.random() * 25 + 5),
    })),
  },
  recentSignups: [
    {
      id: "1",
      date: "21 Jan, 12:21 PM",
      device: "mobile" as const,
      name: "James A",
      userId: "2054652",
      status: "completed" as const,
    },
    {
      id: "2",
      date: "21 Jan, 12:22 PM",
      device: "desktop" as const,
      name: "John B",
      userId: "2054652",
      status: "pending" as const,
    },
    {
      id: "3",
      date: "21 Jan, 12:22 PM",
      device: "mobile" as const,
      name: "Jane C",
      userId: "2054652",
      status: "error" as const,
    },
    {
      id: "4",
      date: "21 Jan, 12:23 PM",
      device: "desktop" as const,
      name: "Puru",
      userId: "2054652",
      status: "pending" as const,
    },
    {
      id: "5",
      date: "21 Jan, 12:24 PM",
      device: "mobile" as const,
      name: "Keshav",
      userId: "2054652",
      status: "completed" as const,
    },
  ],
};

export default function EmbeddableDashboard({ 
  data = defaultData, 
  showSafariFrame = true, 
  showSidebar = true,
  className = ""
}: EmbeddableDashboardProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 Days");

  const DashboardContent = () => (
    <div className={`flex h-full bg-background text-foreground rounded-[10px] overflow-hidden ${className}`} data-testid="embeddable-dashboard">
      {showSidebar && <Sidebar />}
      
      <div className="flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="bg-background border-b border-border px-6 py-4" data-testid="topbar">
          <div className="flex items-center space-x-4">
            <Home className="w-4 h-4 text-muted-foreground" data-testid="home-icon" />
            <span className="text-foreground font-medium" data-testid="breadcrumb-home">Home</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6" data-testid="dashboard-content">
          {/* Overview Header */}
          <div className="flex items-center justify-between mb-6" data-testid="overview-header">
            <h1 className="text-2xl font-semibold text-foreground" data-testid="overview-title">
              Overview
            </h1>
            <div 
              className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-lg cursor-pointer hover:bg-muted/80 transition-colors"
              onClick={() => {
                // TODO: Implement period selector
              }}
              data-testid="period-selector"
            >
              <span className="text-sm text-muted-foreground" data-testid="selected-period">
                {selectedPeriod}
              </span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" data-testid="chevron-down" />
            </div>
          </div>

          {/* KPI Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-testid="kpi-grid">
            <KPICard
              title="New Leads"
              value={data.kpis.newLeads}
              icon="user-plus"
              chartData={data.chartData.newLeads}
              delay={200}
            />
            <KPICard
              title="Follow-ups"
              value={data.kpis.followUps}
              icon="phone"
              chartData={data.chartData.followUps}
              delay={400}
            />
            <KPICard
              title="Answered Calls"
              value={data.kpis.answeredCalls}
              icon="phone-call"
              chartData={data.chartData.answeredCalls}
              delay={600}
            />
          </div>

          {/* Recent Signups Table */}
          <RecentSignupsTable signups={data.recentSignups} />
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