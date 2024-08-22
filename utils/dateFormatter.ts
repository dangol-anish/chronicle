export const formatDate = (date: string) => {
  const formattedDate = date.split("-").slice(1).join("-");
  return formattedDate;
};
