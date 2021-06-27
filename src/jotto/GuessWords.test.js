import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';
const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...props} />);
};

test('does not throw warning with expected prop', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if this are no words guess', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('render withour error ', () => {
    const conponent = findByTestAttr(wrapper, 'component-guesswords');
    expect(conponent.length).toBe(1);
  });

  test('render instruction guess word ', () => {
    const instruction = findByTestAttr(wrapper, 'guesswords-instruction');
    expect(instruction.text().length).not.toBe(0);
  });
});

describe('if there are words guess', () => {
  let wrapper;

  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('render without error', () => {
    const conponent = findByTestAttr(wrapper, 'component-guesswords');
    expect(conponent.length).toBe(1);
  });
  test('render guess word section', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guesswords');
    expect(guessedWordNode.length).toBe(1);
  });
  test('correct number', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessword');
    expect(guessedWordNode.length).toBe(guessedWords.length);
  });
});
