import React from 'react';
import { mount } from 'enzyme';

import JottoHome from './JottoHome';
import { findByTestAttr } from '../test/testUtils';

const setup = (state = {}) => {
  // TODO : apply state
  const wrapper = mount(<App />);
  //add value to input
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });
  //simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });
  return wrapper;
};

describe('no words guessed', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = setup({
            secretWord : 'party',
            success : false,
            guessedWords :[]
        })
    })
    test('create Guessedword table with one row'.()=>{
        
    })
});

describe('some words guessed', () => {});

describe('guess secret word', () => {});
