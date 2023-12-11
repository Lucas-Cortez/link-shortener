export function removeSpecialChars(inputString: string): string {
  const specialCharsMap: { [key: string]: string } = {
    á: "a",
    à: "a",
    ã: "a",
    â: "a",
    é: "e",
    è: "e",
    ê: "e",
    í: "i",
    ì: "i",
    ó: "o",
    ò: "o",
    õ: "o",
    ô: "o",
    ú: "u",
    ù: "u",
    ç: "c",
  };

  const regex = new RegExp(Object.keys(specialCharsMap).join("|"), "g");

  return inputString
    .toLowerCase()
    .replace(regex, (match) => specialCharsMap[match])
    .replace(/[^a-zA-Z\s]/g, "")
    .replace(/ +/g, " ")
    .trim()
    .replace(/\s/g, "-");
}
