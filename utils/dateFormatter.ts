export const formatDate = (date: string) => {
  const formattedDate = date.split("-").slice(1).join("-");
  return formattedDate;
};

export const formatCurrentDay = (currentDay: string) => {
  const date = new Date(currentDay);

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
