import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import GuessedWords from './GuessedWords';
const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...props} />);
};

test('render withour error ', () => {
  const wrapper = setup();
  const conponent = findByTestAttr(wrapper, 'component-guesswords');
  expect(conponent.length).toBe(1);
});
