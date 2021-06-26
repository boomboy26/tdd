import { shallow } from 'enzyme';

import checkPropTypes from 'check-prop-types';

import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('render no text when `success` props is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` props is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expect props', () => {
  const expectProp = { success: false };
  const propError = checkPropTypes(
    Congrats.propTypes,
    expectProp,
    'prop',
    Congrats.name
  );
  expect(propError).toBeUndefined();
});
