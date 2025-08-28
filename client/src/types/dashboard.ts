export interface KPIData {
  newLeads: number;
  followUps: number;
  answeredCalls: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
}

export interface RecentSignup {
  id: string;
  date: string;
  device: 'mobile' | 'desktop';
  name: string;
  userId: string;
  status: 'completed' | 'pending' | 'error';
}

export interface DashboardData {
  kpis: KPIData;
  chartData: {
    newLeads: ChartDataPoint[];
    followUps: ChartDataPoint[];
    answeredCalls: ChartDataPoint[];
  };
  recentSignups: RecentSignup[];
}
