import { Button } from "../ui/button";
import Link from "next/link";

export function JournalsHeader() {
  return (
    <header className="flex justify-between items-center">
      <h2 className="text-[28px] lg:text-[32px] lg:flex">Journals</h2>
      <Link href="/journals/add">
        <Button variant="outline" className="flex gap-2 items-center text-md">
          Add
        </Button>
      </Link>
    </header>
  );
}
