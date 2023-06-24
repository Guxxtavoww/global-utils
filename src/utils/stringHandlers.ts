export function limitCharacters(
  text: string,
  maxStringLength?: number
): string {
  const maxLength = maxStringLength ?? 13;

  return text.length > maxLength
    ? `${text.trim().substring(0, maxLength)}...`
    : text;
}

export function capitalize(text: string): string {
  const words = text.trim().split(' ');

  const mappedText = words.map((word) => {
    const [firstLetter, ...rest] = word;

    return firstLetter?.toLocaleUpperCase().concat(...rest);
  });

  return mappedText.join(' ');
}

export const isValidRegex = (text: string, regex?: RegExp | string): boolean =>
  new RegExp(
    regex ?? '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
  ).test(text);
