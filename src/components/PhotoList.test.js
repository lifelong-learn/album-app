import { shallow } from 'enzyme';
import { findElementByDataTestAttr } from '../../test/testUtils';
import PhotoList from './PhotoList';
import moxios from 'moxios';
import Axios from 'axios';
import { assert } from 'chai';

const setup = async (props) => await shallow(<PhotoList { ...props } />);
const defaultMatch = {
  params: {
    albumId: 1
  }
};

describe('PhotoList tests', () => {
  let axiosInstance;
  beforeEach(() => {
    axiosInstance = Axios.create();
    moxios.install(axiosInstance);
    moxios.stubRequest('https://jsonplaceholder.typicode.com/album/1/photos', {
      status: 200,
      response: [
        {
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "albumId": 1,
          "id": 2,
          "title": "reprehenderit est deserunt velit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
      ]
    });
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  test('It renders', (done) => {
    setup({ match: defaultMatch })
    .then(wrapper => findElementByDataTestAttr(wrapper, 'photo-container'))
    .then(elements => assert(elements.length === 1))
    .finally(done);
  });

  test('PhotoList API call returns correct data', (done) => {
    axiosInstance.get('https://jsonplaceholder.typicode.com/album/1/photos')
    .then(res => assert(res.data.length === 2))
    .finally(done);
  });
});