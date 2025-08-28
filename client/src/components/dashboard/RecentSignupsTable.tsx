import { Smartphone, Monitor, ChevronRight } from "lucide-react";
import type { RecentSignup } from "@/types/dashboard";

interface RecentSignupsTableProps {
  signups: RecentSignup[];
}

const statusConfig = {
  completed: {
    className: "status-completed",
    label: "Completed",
  },
  pending: {
    className: "status-pending",
    label: "Pending",
  },
  error: {
    className: "status-error",
    label: "Error",
  },
};

export default function RecentSignupsTable({ signups }: RecentSignupsTableProps) {
  return (
    <div className="bg-card rounded-lg border border-border fade-in" data-testid="recent-signups-container">
      <div className="px-6 py-4 border-b border-border" data-testid="table-header">
        <h2 className="text-lg font-semibold text-foreground" data-testid="table-title">
          Most recent signups
        </h2>
      </div>
      <div className="overflow-x-auto" data-testid="table-wrapper">
        <table className="w-full" data-testid="signups-table">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider" data-testid="header-date">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider" data-testid="header-device">
                Device
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider" data-testid="header-name">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider" data-testid="header-user-id">
                User ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider" data-testid="header-kyc-status">
                KYC Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider" data-testid="header-actions"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border" data-testid="table-body">
            {signups.map((signup) => {
              const DeviceIcon = signup.device === "mobile" ? Smartphone : Monitor;
              const statusInfo = statusConfig[signup.status];

              return (
                <tr
                  key={signup.id}
                  className="table-row cursor-pointer"
                  data-testid={`signup-row-${signup.id}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground" data-testid={`date-${signup.id}`}>
                    {signup.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground" data-testid={`device-${signup.id}`}>
                    <div className="flex items-center space-x-2">
                      <DeviceIcon className="w-3 h-3" data-testid={`device-icon-${signup.id}`} />
                      <span className="capitalize" data-testid={`device-type-${signup.id}`}>
                        {signup.device}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground" data-testid={`name-${signup.id}`}>
                    {signup.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground" data-testid={`user-id-${signup.id}`}>
                    {signup.userId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" data-testid={`status-${signup.id}`}>
                    <span className={`status-badge ${statusInfo.className}`} data-testid={`status-badge-${signup.id}`}>
                      {statusInfo.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-testid={`actions-${signup.id}`}>
                    <ChevronRight className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-primary transition-colors" data-testid={`chevron-${signup.id}`} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
