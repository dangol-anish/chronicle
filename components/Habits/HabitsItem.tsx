import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function HabitsItem({ habits }: { habits: any[] | null }) {
  return (
    <Table>
      <TableCaption>A list of your habits.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {habits?.map((habit, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{habit?.h_name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
