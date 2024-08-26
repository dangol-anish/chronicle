export function monthConverter(numericMonth: string): string | undefined {
  switch (numericMonth) {
    case "1":
      return "Jan";
    case "2":
      return "Feb";
    case "3":
      return "Mar";
    case "4":
      return "Apr";
    case "5":
      return "May";
    case "6":
      return "Jun";
    case "7":
      return "Jul";
    case "8":
      return "Aug";
    case "9":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
    default:
      return undefined;
  }
}

export function getJournalDates(): {
  month: string;
  day: string;
  year: string;
}[] {
  const dates: { month: string; day: string; year: string }[] = [];
  const today = new Date();

  const monthOptions: Intl.DateTimeFormatOptions = { month: "numeric" };
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
