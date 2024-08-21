"use client";

import { NotePicker } from "@/components/NotePicker";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AddJournal() {
  return (
    <>
      <Link className="flex items-center" href="/journals">
        <ChevronLeft />
        <header>Go Back</header>
      </Link>

      <main>
        <div>
          <div>This the form</div>
          <NotePicker />
        </div>
      </main>
    </>
  );
}
