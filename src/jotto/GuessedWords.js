import React from 'react';
import PropTypes from 'prop-types';
function GuessedWords(props) {
  const guessedWordsRows = props.guessedWords.map((word, index) => {
    return (
      <tr key={index} data-test='guessword'>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    );
  });
  return (
    <div data-test='component-guesswords'>
      {props.guessedWords.length === 0 ? (
        <p data-test='guesswords-instruction'>Try to guess Word</p>
      ) : (
        <div data-test='guesswords'>
          <h3>Guess word</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letter</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};

export default GuessedWords;
