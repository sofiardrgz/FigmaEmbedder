import { useEffect, useState } from "react";
import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis } from "recharts";
import type { ChartDataPoint } from "@/types/dashboard";

interface AnimatedChartProps {
  data: ChartDataPoint[];
  delay?: number;
}

export default function AnimatedChart({ data, delay = 0 }: AnimatedChartProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(0);
      const animationDuration = 2000;
      const steps = 60;
      const stepDuration = animationDuration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setProgress(currentStep / steps);
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [data, delay]);

  // Create smooth data for the area chart
  const chartData = data.map((point, index) => ({
    name: point.date,
    value: point.value,
    smoothValue: point.value * 0.9 + Math.sin(index * 0.1) * (point.value * 0.1),
  }));

  return (
    <div className="w-full h-full relative" data-testid="animated-chart">
      <div className="absolute inset-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 20 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              hide
            />
            <YAxis 
              hide
              domain={['dataMin - 100', 'dataMax + 100']}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#colorGradient)"
              animationDuration={2000}
              strokeDasharray={`${progress * 100}% 100%`}
              data-testid="area-chart"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Trend indicator */}
      <div className="absolute top-2 right-2 flex items-center space-x-1">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-green-500 font-medium">+12%</span>
      </div>
    </div>
  );
}
