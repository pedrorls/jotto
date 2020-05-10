export const letterMatchCounting = (guessedWord, secretWord) => {
  const guessed = new Set(guessedWord.split(""));
  const secret = new Set(secretWord.split(""));

  return [...secret].filter((letter) => guessed.has(letter)).length;
};
