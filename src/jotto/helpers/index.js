export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetter = secretWord.split('');
  const guessLetterSet = new Set(guessedWord);
  return secretLetter.filter((letter) => guessLetterSet.has(letter)).length;
}
