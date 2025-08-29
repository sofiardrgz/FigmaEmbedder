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
    <div className="rounded-lg border border-gray-700 opacity-0 animate-[slideInUp_0.6s_ease-out_0.9s_forwards] ambient-bg" style={{ backgroundColor: '#272727' }} data-testid="recent-signups-container">
      <div className="px-4 py-3 border-b border-gray-700" style={{ backgroundColor: '#272727' }} data-testid="table-header">
        <h2 className="font-normal text-[16px] text-gray-400" data-testid="table-title">
          Most recent signups
        </h2>
      </div>
      <div className="overflow-x-auto" data-testid="table-wrapper">
        <table className="w-full" data-testid="signups-table">
          <thead style={{ backgroundColor: '#1b1a19' }}>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" data-testid="header-date">
                Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" data-testid="header-device">
                Device
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" data-testid="header-name">
                Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" data-testid="header-user-id">
                User ID
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" data-testid="header-kyc-status">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" data-testid="header-actions"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700" data-testid="table-body">
            {signups.map((signup, index) => {
              const DeviceIcon = signup.device === "mobile" ? Smartphone : Monitor;
              const statusInfo = statusConfig[signup.status];

              return (
                <tr
                  key={signup.id}
                  className="table-row opacity-0 animate-[slideInUp_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${1.2 + index * 0.08}s` }}
                  data-testid={`signup-row-${signup.id}`}
                >
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300" data-testid={`date-${signup.id}`}>
                    {signup.date}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400" data-testid={`device-${signup.id}`}>
                    <div className="flex items-center space-x-2">
                      <DeviceIcon className="w-3 h-3 text-gray-400" data-testid={`device-icon-${signup.id}`} />
                      <span className="capitalize" data-testid={`device-type-${signup.id}`}>
                        {signup.device}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-300" data-testid={`name-${signup.id}`}>
                    {signup.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400" data-testid={`user-id-${signup.id}`}>
                    {signup.userId}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap" data-testid={`status-${signup.id}`}>
                    <span className="status-badge status-pending text-gray-400" data-testid={`status-badge-${signup.id}`}>
                      {statusInfo.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium" data-testid={`actions-${signup.id}`}>
                    <ChevronRight className="w-3 h-3 text-gray-400 transition-colors" data-testid={`chevron-${signup.id}`} />
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
