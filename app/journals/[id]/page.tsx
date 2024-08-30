"use client";

import { formatDate, formatDateTime } from "@/utils/dateFormatter";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const currentMood = searchParams.get("cM");
  const insertedAt = searchParams.get("iA");
  const journalText = searchParams.get("jT");

  console.log({
    currentMood,
    insertedAt,
    journalText,
  });
  return (
    <>
      <main>
        <div>{formatDateTime(insertedAt)}</div>
        <div></div>
      </main>
    </>
  );
}
