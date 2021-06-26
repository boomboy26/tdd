import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('renders app component', () => {
  const wrapper = shallow(<App />);
  const appCompoent = wrapper.find("[data-test='app-component']");

  expect(appCompoent).toHaveLength(1);
});
