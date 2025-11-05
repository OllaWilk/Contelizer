export const mixText = (text: string): string => {
  const words = text.split(' ');

  const mixedWords = words.map((word) => {
    if (word.length <= 3) return word;

    const firstLetter = word[0];
    const lastLetter = word[word.length - 1];
    const middleLetters = word.slice(1, -1).split('');

    for (let i = middleLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [middleLetters[i], middleLetters[j]] = [middleLetters[j], middleLetters[i]];
    }

    return firstLetter + middleLetters.join('') + lastLetter;
  });

  return mixedWords.join(' ');
};
