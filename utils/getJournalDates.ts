export function getJournalDates(): {
  month: string;
  day: string;
  year: string;
}[] {
  const dates: { month: string; day: string; year: string }[] = [];
  const today = new Date();

  const monthOptions: Intl.DateTimeFormatOptions = { month: "short" };
  const dayOptions: Intl.DateTimeFormatOptions = { day: "2-digit" };
  const yearOptions: Intl.DateTimeFormatOptions = { year: "numeric" };

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const month = date.toLocaleDateString(undefined, monthOptions);
    const day = date.toLocaleDateString(undefined, dayOptions);
    const year = date.toLocaleDateString(undefined, yearOptions);

    dates.push({ month, day, year });
  }

  return dates;
}
