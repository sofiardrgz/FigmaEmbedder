import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer, YAxis, XAxis, ReferenceLine } from "recharts";
import type { ChartDataPoint } from "@/types/dashboard";

interface AnimatedChartProps {
  data: ChartDataPoint[];
  delay?: number;
}

export default function AnimatedChart({ data, delay = 0 }: AnimatedChartProps) {
  const [animatedData, setAnimatedData] = useState<ChartDataPoint[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Start with empty data
    setAnimatedData([]);
    setIsAnimating(true);

    // Animate data points one by one with delay
    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= data.length) {
          setAnimatedData(data.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 30); // Faster animation

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [data, delay]);

  // Generate chart data with primary values and calculate average for reference line
  const chartData = animatedData.map((point) => ({
    ...point,
    primaryValue: point.value,
  }));

  // Calculate average value for straight reference line
  const averageValue = chartData.length > 0 
    ? chartData.reduce((sum, point) => sum + point.primaryValue, 0) / chartData.length 
    : 0;

  return (
    <div className="w-full h-full" data-testid="animated-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="date" 
            hide 
            domain={['dataMin', 'dataMax']}
          />
          <YAxis 
            hide 
            domain={['dataMin - 50', 'dataMax + 50']}
          />
          <Line
            type="monotone"
            dataKey="primaryValue"
            stroke="#10b981"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 5, fill: "#10b981", strokeWidth: 0 }}
            animationDuration={1500}
            animationBegin={0}
            connectNulls={false}
            data-testid="primary-line"
          />
          {averageValue > 0 && (
            <ReferenceLine 
              y={averageValue * 0.7} 
              stroke="#6b7280" 
              strokeWidth={2}
              strokeDasharray="5 5"
              data-testid="reference-line"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
