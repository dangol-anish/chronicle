export function textShortener(text: string, length: number) {
  const words = text.split(" ");
  if (words.length > length) {
    return words.slice(0, length).join(" ") + "...";
  }
  return text;
}
