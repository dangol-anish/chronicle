import { Button } from "../ui/button";
import Link from "next/link";

export function AddJournals() {
  return (
    <>
      <Link href="journals/add">
        <Button>Add</Button>
      </Link>
    </>
  );
}
