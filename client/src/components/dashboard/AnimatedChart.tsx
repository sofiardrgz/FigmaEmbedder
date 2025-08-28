import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
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

  // Generate secondary dataset for comparison line
  const secondaryData = data.map((point, index) => ({
    ...point,
    value: Math.floor(point.value * 0.7 + Math.random() * 20),
  }));

  return (
    <div className="w-full h-full" data-testid="animated-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={animatedData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "hsl(var(--chart-1))" }}
            animationDuration={2000}
            animationBegin={0}
            data-testid="primary-line"
          />
          <Line
            type="monotone"
            dataKey="value"
            data={secondaryData.slice(0, animatedData.length)}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth={1}
            strokeDasharray="5 5"
            dot={false}
            animationDuration={2000}
            animationBegin={200}
            data-testid="secondary-line"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
