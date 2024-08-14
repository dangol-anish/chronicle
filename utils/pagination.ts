// Type for the pagination handler parameters
type PaginationHandlerParams = {
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  itemsLength: number;
};

// Handles moving to the previous set of items
export const handlePrevious = ({
  startIndex,
  setStartIndex,
  rowsPerPage,
}: Pick<
  PaginationHandlerParams,
  "startIndex" | "setStartIndex" | "rowsPerPage"
>) => {
  if (startIndex > 0) {
    setStartIndex(startIndex - rowsPerPage);
  }
};

// Handles moving to the next set of items
export const handleNext = ({
  startIndex,
  setStartIndex,
  rowsPerPage,
  itemsLength,
}: PaginationHandlerParams) => {
  const endIndex = startIndex + rowsPerPage;
  if (endIndex < itemsLength) {
    setStartIndex(startIndex + rowsPerPage);
  }
};
