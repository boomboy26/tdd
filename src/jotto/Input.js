import React from 'react';
import PropTypes from 'prop-types';
function Input({ secretWord, success }) {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const formInput = (
    <form>
      <input
        data-test='input-box'
        type='text'
        placeholder='Guess Wrod'
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
      />
      <button
        type='submit'
        data-test='submit-button'
        onClick={(evt) => {
          evt.preventDefault();
          //TODO: update guessedWords
          //TODO: check against secretword
          setCurrentGuess('');
        }}
      >
        Submit
      </button>
    </form>
  );
  return <div data-test='component-input'>{!success && formInput}</div>;
}

Input.propTypes = {
  secretWord: PropTypes.string,
  success: PropTypes.bool,
};

export default Input;
