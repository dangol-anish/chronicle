export const formatDate = (date: string) => {
  const formattedDate = date.split("-").slice(1).join("-");
  return formattedDate;
};

export const formatCurrentDay = (currentDay: string) => {
  const date = new Date(currentDay);
  const fullDate = date.getDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  let ampm;

  if (hours > 11) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  return `${hours}:${minutes} ${ampm}`;
};

export const formatDateTime = (dateString: string | null): string => {
  if (!dateString) return "Invalid date";

  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");

  let ampm: string;

  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) hours -= 12;
  } else {
    ampm = "AM";
    if (hours === 0) hours = 12;
  }

  const formattedHours = String(hours).padStart(2, "0");

  return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
};
