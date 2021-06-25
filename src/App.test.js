import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });
// const wrapper = shallow(<App />);
// expect(wrapper.exists()).toBe(true);
// console.log(wrapper.debug());
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error ', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('render increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');

  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter display start at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});

test('clicking button increament counter display', () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});

//Code challenge

test('render decrement button', () => {
  const wrapper = setup();
  const buttonDecrement = findByTestAttr(wrapper, 'decrement-button');
  expect(buttonDecrement.length).toBe(1);
});
