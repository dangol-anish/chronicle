"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { HabitsItemProps } from "@/types/types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { HabitCheckBox } from "./HabitCheckBox";
import Link from "next/link";
import { formatDate } from "@/utils/dateFormatter";
import { textShortener } from "@/utils/textShortener";

export function HabitsItem({ habits }: HabitsItemProps) {
  const effectiveHabits = habits || [];
  const rowsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(effectiveHabits.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const allLogDates: string[] = effectiveHabits
    .flatMap((habit) => habit.habits_log.map((log) => log.log_date))
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  const past7Days = allLogDates.filter((date) => {
    const dateDiff =
      (new Date().getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
    return dateDiff < 7;
  });

  const renderTableHeaders = (): JSX.Element[] => {
    return past7Days.map((date, i) => {
      let className = "w-[100px] text-center";

      // Control visibility based on screen size and index
      if (i >= 4 && i < 5) className += " hidden sm:table-cell";
      if (i >= 5 && i < 7) className += " hidden md:table-cell";
      if (i >= 7) className += " hidden lg:table-cell";

      return (
        <TableHead key={i} className={className}>
          {formatDate(date)}
        </TableHead>
      );
    });
  };

  return (
    <>
      <Table className="mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Name</TableHead>
            {renderTableHeaders()}
          </TableRow>
        </TableHeader>
        <TableBody>
          {effectiveHabits
            .slice(startIndex, endIndex)
            .map((habit, habitIndex) => (
              <TableRow key={habitIndex}>
                <TableCell className="font-medium">
                  <Link href={`/habits/${habit.h_id}`}>
                    {textShortener(habit.h_name, 18)}
                  </Link>
                </TableCell>
                {past7Days.map((date, dateIndex) => {
                  const log = habit.habits_log.find(
                    (log) => log.log_date === date
                  ) || { is_completed: false, log_id: null };

                  let checkboxClassName = "text-center";

                  // Control visibility based on screen size and index
                  if (dateIndex >= 4 && dateIndex < 5)
                    checkboxClassName += " hidden sm:table-cell";
                  if (dateIndex >= 5 && dateIndex < 7)
                    checkboxClassName += " hidden md:table-cell";
                  if (dateIndex >= 7)
                    checkboxClassName += " hidden lg:table-cell";

                  return (
                    <TableCell key={dateIndex} className={checkboxClassName}>
                      <HabitCheckBox log={log} />
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Pagination className="mt-5">
        <PaginationContent className="flex gap-5">
          <PaginationItem>
            <PaginationPrevious
              className={`cursor-pointer ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePrevious}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>
              Page {currentPage} of {totalPages}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={`cursor-pointer ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleNext}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
