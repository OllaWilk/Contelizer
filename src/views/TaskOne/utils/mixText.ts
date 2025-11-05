export const mixText = (text: string): string => {
  const words = text.split(' ');

  const mixedWords = words.map((word) => {
    if (word.length <= 3) return word;

    const firstLetter = word[0];
    const lastLetter = word[word.length - 1];
    const middleLetters = word.slice(1, -1).split('');
    console.log('FIRST', firstLetter);
    console.log('LAST', lastLetter);

    console.log('middle,', middleLetters);

    return firstLetter + middleLetters.join('') + lastLetter;
  });

  return mixedWords.join(' ');
};
