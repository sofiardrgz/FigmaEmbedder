import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, Legend } from "recharts";
import type { ChartDataPoint } from "@/types/dashboard";

interface AnimatedChartProps {
  data: ChartDataPoint[];
  delay?: number;
}

export default function AnimatedChart({ data, delay = 0 }: AnimatedChartProps) {
  const [animatedData, setAnimatedData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    // Start with empty data
    setAnimatedData([]);

    // Animate data points one by one with delay
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= data.length) {
          setAnimatedData(data.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [data, delay]);

  // Generate chart data with both lines - ensure we have valid data
  const chartData = animatedData.length > 0 ? animatedData.map((point, index) => ({
    date: point.date,
    currentPeriod: point.value,
    previousPeriod: Math.floor(point.value * 0.75 + Math.sin(index * 0.3) * 50),
  })) : [];

  // Don't render if no data
  if (chartData.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center" data-testid="chart-loading">
        <div className="text-muted-foreground text-sm">Loading chart...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full" data-testid="animated-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 40, bottom: 80 }}>
          <XAxis 
            dataKey="date" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            interval="preserveStartEnd"
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            domain={[0, 'dataMax + 500']}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Legend 
            verticalAlign="bottom" 
            height={40}
            iconType="line"
            wrapperStyle={{ 
              paddingTop: '20px',
              fontSize: '12px',
              color: '#6b7280'
            }}
          />
          <Line
            type="monotone"
            dataKey="currentPeriod"
            stroke="#10b981"
            strokeWidth={3}
            dot={false}
            name="Mar 1 - Mar 31, 2024"
            activeDot={{ r: 5, fill: "#10b981", strokeWidth: 0 }}
            animationDuration={2000}
            connectNulls={false}
            data-testid="current-period-line"
          />
          <Line
            type="monotone"
            dataKey="previousPeriod"
            stroke="#6b7280"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Feb 1 - Feb 31, 2024"
            animationDuration={2000}
            animationBegin={500}
            connectNulls={false}
            data-testid="previous-period-line"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
