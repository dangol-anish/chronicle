"use client";

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
  return <></>;
}
