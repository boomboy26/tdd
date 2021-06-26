import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

export default function JottoHome() {
  return (
    <div>
      Hello world
      <Congrats success={false} />
      <GuessedWords />
    </div>
  );
}
