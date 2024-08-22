"use client";

import { NotePicker } from "@/components/NotePicker";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AddJournal() {
  return (
    <>
      <Link className="flex items-center max-h-screen" href="/journals">
        <ChevronLeft />
        <header>Go Back</header>
      </Link>

      <main>
        <NotePicker />
      </main>
    </>
  );
}
