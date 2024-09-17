"use client";

import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useMemo } from "react";

interface HabitLog {
  log_id: number;
  log_date: string;
  log_time: string;
  inserted_at: string;
  is_completed: boolean;
}

const chartConfig = {
  frequency: {
    label: "Frequency",
    color: "#3d83f6",
  },
} satisfies ChartConfig;

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
