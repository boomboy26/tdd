import React from 'react';
import PropTypes from 'prop-types';
function Congrats(props) {
  return (
    <div data-test='component-congrats'>
      {props.success && (
        <span data-test='congrats-message'>
          Congratulation! you guessed the world!
        </span>
      )}
    </div>
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
