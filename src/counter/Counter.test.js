import Enzymey, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Counter from './Counter';

Enzymey.configure({
  adapter: new Adapter(),
});

const wrapper = shallow(<Counter />);

test('test Render Counter component', () => {
  const counterApp = wrapper.find('[data-test="app-counter"]');
  expect(counterApp).toHaveLength(1);
});

test('test Render text Counter', () => {
  const counterApp = wrapper.find('[data-test="text-counter"]');
  expect(counterApp).toHaveLength(1);
});

test('test Render button', () => {
  const counterApp = wrapper.find('[data-test="button-counter"]');
  expect(counterApp).toHaveLength(1);
});

test('test start value = 0', () => {
  const counterApp = wrapper.find('[data-test="text-counter"]');
  expect(counterApp.text()).toBe('0');
});

test('test simulate click', () => {
  const counterApp = wrapper.find('[data-test="button-counter"]');
  counterApp.simulate('click');
  const value = wrapper.find('[data-test="text-counter"]');
  expect(value.text()).toBe('1');
});
