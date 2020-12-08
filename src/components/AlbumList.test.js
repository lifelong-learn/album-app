import { shallow } from 'enzyme';
import { findElementByDataTestAttr } from '../../test/testUtils';
import AlbumList from './AlbumList';

describe('AlbumList tests', () => {
  test('AlbumList renders without errors', () => {
    const wrapper = shallow(<AlbumList />);
    const elements = findElementByDataTestAttr(wrapper, 'album-container');
    expect(elements.length).toBe(1);
  });  
});