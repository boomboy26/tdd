import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
export default function JottoHome() {
  return (
    <div data-test='component-app'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}
