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
  // Collect all unique log dates and reverse their order
  const allLogDates = habits
    ?.flatMap((habit) => habit.habits_log.map((log) => log.log_date))
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <Table>
      <TableCaption>A list of your habits.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Name</TableHead>
          {allLogDates?.map((date, index) => (
            <TableHead key={index} className="w-[100px]">
              {formatDate(date)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {habits?.map((habit, habitIndex) => (
          <TableRow key={habitIndex}>
            <TableCell className="font-medium">{habit.h_name}</TableCell>
            {allLogDates?.map((date, dateIndex) => {
              const log = habit.habits_log.find((log) => log.log_date === date);
              return (
                <TableCell key={dateIndex} className="text-center">
                  <Checkbox checked={log ? log.is_completed : false} disabled />
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
