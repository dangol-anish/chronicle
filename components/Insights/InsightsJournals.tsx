"use client";

import HeatMap from "@uiw/react-heat-map";
import { useState } from "react";

interface HeatMapValue {
  date: string; // YYYY-MM-DD format
  count: number;
}

interface InsightsJournalClientProps {
  dataJournal: HeatMapValue[];
}

export default function InsightsJournal({
  dataJournal,
}: InsightsJournalClientProps) {
  const [selected, setSelected] = useState<HeatMapValue | null>(null);

  const currentYear = new Date().getFullYear();
  const startOfYear = new Date(`${currentYear}-01-01`)
    .toISOString()
    .split("T")[0]; // YYYY-MM-DD format

  const filteredDataJournal = dataJournal.filter(
    (item) => item.date >= startOfYear
  );

  // Find the highest journal count overall
  const highestCount = Math.max(
    ...filteredDataJournal.map((item) => item.count)
  );

  return (
    <>
      <div className="flex justify-center flex-col">
        <p className="text-xl ">Journal Insights</p>
        <div className="text-sm w-[400px] mb-4">
          <p>
            Date:{" "}
            {selected?.date ? selected.date : "Please hover over the heatmap"}
          </p>
          <p>No. of journals created: {selected?.count ? selected.count : 0}</p>
        </div>
        <div className="heatmap-container">
          <div className="heatmap-wrapper">
            <HeatMap
              style={{ color: "white" }}
              width={2200}
              height={300}
              rectSize={40}
              legendCellSize={0}
              value={filteredDataJournal}
              startDate={new Date(`${currentYear}-01-01`)}
              rectRender={(props, dataJournal) => {
                // Calculate the intensity based on the percentage of the highest count
                const percentage = (dataJournal.count / highestCount) * 100;
                let fillColor = "#eaecf0";

                if (percentage >= 80) fillColor = "#006400"; // Darker green
                else if (percentage >= 50)
                  fillColor = "#32CD32"; // Medium green
                else if (percentage >= 30) fillColor = "#7CFC00"; // Light green

                return (
                  <rect
                    {...props}
                    fill={fillColor}
                    onClick={() => {
                      setSelected(
                        dataJournal.date === selected?.date ? null : dataJournal
                      );
                    }}
                    onMouseEnter={() => {
                      if (selected?.date !== dataJournal.date) {
                        setSelected(dataJournal);
                      }
                    }}
                    onMouseLeave={() => {
                      if (selected?.date === dataJournal.date) {
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
