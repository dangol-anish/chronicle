"use client";

import HeatMap from "@uiw/react-heat-map";
import { useState } from "react";

interface HeatMapValue {
  date: string; // YYYY-MM-DD format
  count: number;
}

interface InsightsHabitsClientProps {
  dataHabits: HeatMapValue[];
}

export default function InsightsHabitsClient({
  dataHabits,
}: InsightsHabitsClientProps) {
  const [selected, setSelected] = useState<HeatMapValue | null>(null);

  const currentYear = new Date().getFullYear();
  const startOfYear = new Date(`${currentYear}-01-01`)
    .toISOString()
    .split("T")[0]; // YYYY-MM-DD format

  const filteredDataHabits = dataHabits.filter(
    (item) => item.date >= startOfYear
  );

  return (
    <>
      <div className="flex justify-center flex-col">
        <p className="text-xl ">Habits Insights</p>
        <div className="text-sm w-[400px] mb-4">
          <p>
            Date:{" "}
            {selected?.date ? selected.date : "Please hover over the heatmap"}
          </p>
          <p>No. of habits performed: {selected?.count ? selected.count : 0}</p>
        </div>
        <div className="heatmap-container">
          <div className="heatmap-wrapper">
            <HeatMap
              style={{ color: "white" }}
              width={2200}
              height={300}
              rectSize={40}
              legendCellSize={0}
              value={filteredDataHabits}
              startDate={new Date(`${currentYear}-01-01`)}
              rectRender={(props, dataHabits) => {
                return (
                  <rect
                    {...props}
                    onClick={() => {
                      setSelected(
                        dataHabits.date === selected?.date ? null : dataHabits
                      );
                    }}
                    onMouseEnter={() => {
                      if (selected?.date !== dataHabits.date) {
                        setSelected(dataHabits);
                      }
                    }}
                    onMouseLeave={() => {
                      if (selected?.date === dataHabits.date) {
                        setSelected(null);
                      }
                    }}
                  />
                );
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
