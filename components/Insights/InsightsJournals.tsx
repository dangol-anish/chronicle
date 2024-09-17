"use client";

import HeatMap from "@uiw/react-heat-map";
import { useState } from "react";

interface HeatMapValue {
  date: string;
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
    .split("T")[0];

  const filteredDataJournal = dataJournal.filter(
    (item) => item.date >= startOfYear
  );

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
          <div className="heatmap-wrapper ml-2">
            <HeatMap
              style={{ color: "gray" }}
              width={2500}
              height={210}
              rectSize={25}
              rectProps={{
                rx: 5,
              }}
              legendCellSize={0}
              value={filteredDataJournal}
              startDate={new Date(`${currentYear}-01-01`)}
              rectRender={(props, dataJournal) => {
                // Calculate the intensity based on the percentage of the highest count
                const percentage = (dataJournal.count / highestCount) * 100;
                let fillColor = "#CBD5E1";

                if (percentage >= 80) fillColor = "#006400"; // Darker green
                else if (percentage >= 50)
                  fillColor = "#8EAE7D"; // Medium green
                else if (percentage >= 30) fillColor = "#B7E0A1"; // Light green

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
