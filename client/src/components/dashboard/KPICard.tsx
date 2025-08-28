import { UserPlus, Phone, PhoneCall } from "lucide-react";
import AnimatedChart from "./AnimatedChart";
import type { ChartDataPoint } from "@/types/dashboard";

interface KPICardProps {
  title: string;
  value: number;
  icon: "user-plus" | "phone" | "phone-call";
  chartData: ChartDataPoint[];
}

const iconMap = {
  "user-plus": UserPlus,
  "phone": Phone,
  "phone-call": PhoneCall,
};

export default function KPICard({ title, value, icon, chartData }: KPICardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="kpi-card bg-card rounded-lg border border-border p-6" data-testid={`kpi-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between mb-4" data-testid="kpi-header">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center" data-testid="kpi-icon-container">
            <Icon className="text-primary w-4 h-4" data-testid="kpi-icon" />
          </div>
          <span className="text-sm text-muted-foreground" data-testid="kpi-title">{title}</span>
        </div>
      </div>
      <div className="text-3xl font-bold text-foreground mb-4" data-testid="kpi-value">
        {value.toLocaleString()}
      </div>
      <div className="h-[180px] w-full" data-testid="kpi-chart-container">
        <AnimatedChart data={chartData} />
      </div>
    </div>
  );
}
