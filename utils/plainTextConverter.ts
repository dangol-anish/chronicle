export function plainTextConverter(rawStr: string) {
  // Create a new DOM element to parse the HTML string
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = rawStr;

  // Get the plain text from the innerText property
  const plainText = tempDiv.innerText || tempDiv.textContent;

  return plainText;
}
