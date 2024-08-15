"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { HabitsItemProps } from "@/types/types";
import { formatDate } from "@/utils/dateFormatter";

export function HabitsItem({ habits }: HabitsItemProps) {
  // Handle null or undefined habits
  const effectiveHabits = habits || [];

  // Collect all unique log dates and reverse their order
  const allLogDates: string[] = effectiveHabits
    .flatMap((habit) => habit.habits_log.map((log) => log.log_date))
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  // Tailwind responsive classes for column visibility
  const renderTableHeaders = (): JSX.Element[] => {
    const headers: JSX.Element[] = [];

    for (let i = 0; i < allLogDates.length; i++) {
      const date = allLogDates[i];
      let className = "w-[100px] text-center";

      if (i >= 7) className += " hidden lg:table-cell";
      if (i >= 5 && i < 7) className += " hidden md:table-cell";
      if (i >= 4 && i < 5) className += " hidden sm:table-cell";

      headers.push(
        <TableHead key={i} className={className}>
          {formatDate(date)}
        </TableHead>
      );
    }

    return headers;
  };

  return (
    <Table>
      <TableCaption>A list of your habits.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Name</TableHead>
          {renderTableHeaders()}
        </TableRow>
      </TableHeader>
      <TableBody>
        {effectiveHabits.map((habit, habitIndex) => (
          <TableRow key={habitIndex}>
            <TableCell className="font-medium">{habit.h_name}</TableCell>
            {allLogDates.map((date, dateIndex) => {
              const log = habit.habits_log.find(
                (log) => log.log_date === date
              ) || { is_completed: false };
              let checkboxClassName = "text-center";

              // Hide checkboxes on smaller screens
              if (dateIndex >= 7) checkboxClassName += " hidden lg:table-cell";
              if (dateIndex >= 5 && dateIndex < 7)
                checkboxClassName += " hidden md:table-cell";
              if (dateIndex >= 4 && dateIndex < 5)
                checkboxClassName += " hidden sm:table-cell";

              return (
                <TableCell key={dateIndex} className={checkboxClassName}>
                  <Checkbox checked={log.is_completed} disabled />
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
