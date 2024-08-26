export function textShortener(
  text: string | undefined,
  length: number
): string | undefined {
  if (!text) return text;
  const words = text.split(" ");
  if (words.length > length) {
    return words.slice(0, length).join(" ") + "...";
  }

  return text;
}
