import Axios from 'axios';

export const getAlbumList = async (setAlbumList) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/albums');
  setAlbumList(response.data);
};

export const getAuthorList = async (setAuthorList) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
  setAuthorList(response.data);
};

export const getPhotoList = async (setPhotoList) => {
  const response = await Axios.get('https://jsonplaceholder.typicode.com/photos');
  setPhotoList(response.data);
};