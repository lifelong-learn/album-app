import React from 'react';
import { shallow } from 'enzyme';
import { findElementByDataTestAttr } from '../test/testUtils';
import App from './App';

const setup = () => shallow(<App />);

describe('App tests', () => {
  test('App renders without errors', () => {
    const wrapper = setup();
    const elements = findElementByDataTestAttr(wrapper, 'app-container');
    expect(elements.length).toBe(1);
  });  
});
