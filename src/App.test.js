import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });
// const wrapper = shallow(<App />);
// expect(wrapper.exists()).toBe(true);
// console.log(wrapper.debug());
test('renders without error ', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('render increment button', () => {});

test('renders counter display', () => {});

test('counter display start at 0', () => {});

test('clicking button increament counter display', () => {});
