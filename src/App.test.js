import { shallow } from 'enzyme';
import { findElementByDataTestAttr } from '../test/testUtils';
import App from './App';

describe('App tests', () => {
  test('App renders without errors', () => {
    const wrapper = shallow(<App />);
    const elements = findElementByDataTestAttr(wrapper, 'app-container');
    expect(elements.length).toBe(1);
  });  
});