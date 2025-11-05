export const mixText = (text: string): string => {
  return text
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};
