import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import JottoHome from './JottoHome';

const setup = () => {
  return shallow(<JottoHome />);
};

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});
