import { UserPlus, Phone, PhoneCall } from "lucide-react";
import AnimatedChart from "./AnimatedChart";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import type { ChartDataPoint } from "@/types/dashboard";

interface KPICardProps {
  title: string;
  value: number;
  icon: "user-plus" | "phone" | "phone-call";
  chartData: ChartDataPoint[];
  delay?: number;
}

const iconMap = {
  "user-plus": UserPlus,
  "phone": Phone,
  "phone-call": PhoneCall,
};

export default function KPICard({ title, value, icon, chartData, delay = 0 }: KPICardProps) {
  const Icon = iconMap[icon];
  const animatedValue = useCounterAnimation(value, 2000, delay);

  return (
    <div 
      className="kpi-card rounded-lg border-[0.5px] border-gray-700 p-4 opacity-0 animate-[slideInUp_0.6s_ease-out_forwards] ambient-bg"
      style={{ backgroundColor: '#272727', animationDelay: `${delay}ms` }}
      data-testid={`kpi-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center justify-between mb-3" data-testid="kpi-header">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1b1a19' }} data-testid="kpi-icon-container">
            <Icon className="text-gray-400 w-3 h-3" data-testid="kpi-icon" />
          </div>
          <span className="text-xs text-gray-400" data-testid="kpi-title">{title}</span>
        </div>
      </div>
      <div className="mb-3 text-lg font-medium text-[#757778]" data-testid="kpi-value">
        {animatedValue.toLocaleString()}
      </div>
      <div className="h-[120px] w-full" data-testid="kpi-chart-container">
        <AnimatedChart data={chartData} delay={delay + 500} />
      </div>
    </div>
  );
}
