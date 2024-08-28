export function plainTextConverter(rawStr: string) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = rawStr;

  const plainText = tempDiv.innerText || tempDiv.textContent;

  return plainText;
}
