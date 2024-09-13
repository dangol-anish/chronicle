"use client";

import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useMemo } from "react";

// Sample habit log interface
interface HabitLog {
  log_id: number;
  log_date: string;
  log_time: string;
  inserted_at: string;
  is_completed: boolean;
}

// Config for chart colors
const chartConfig = {
  frequency: {
    label: "Frequency",
    color: "#34d399", // A green color
  },
} satisfies ChartConfig;

// List of all months
const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function to aggregate log data by month
function aggregateLogsByMonth(logs: HabitLog[]) {
  // Initialize an object with all months set to 0 frequency
  const monthMap: Record<string, number> = allMonths.reduce((acc, month) => {
    acc[month] = 0;
    return acc;
  }, {} as Record<string, number>);

  // Increment the frequency for each completed log
  logs.forEach((log) => {
    if (log.is_completed) {
      const month = new Date(log.log_date).toLocaleString("default", {
        month: "long",
      });
      monthMap[month]++;
    }
  });

  // Convert the monthMap to an array of objects with month and frequency
  return allMonths.map((month) => ({
    month,
    frequency: monthMap[month],
  }));
}

// HabitDetailsChart component
export function HabitDetailsChart({ logs }: { logs: HabitLog[] }) {
  // Aggregate the logs by month to calculate frequency
  const chartData = useMemo(() => aggregateLogsByMonth(logs), [logs]);

  return (
    <>
      <p className="text-2xl mb-5 text-center">Frequency</p>
      <ChartContainer
        config={chartConfig}
        className="min-h-[500px] max-h-[500px] w-full"
      >
        <BarChart width={600} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="frequency"
            fill={chartConfig.frequency.color}
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </>
  );
}
