import React from 'react';
import Axios from 'axios';
const PhotoList = ({ match }) => {
  const albumId = match ? match.params.albumId : 1;
  const [photos, setPhotos] = React.useState([]);
  React.useEffect(() => {
    Axios.get(`http://jsonplaceholder.typicode.com/album/${albumId}/photos`)
    .then(res => setPhotos(res.data));
  }, [setPhotos, albumId]);

  if(!photos || photos.length === 0) return <p data-test="photo-container">No photos are available</p>;
  return (
    <div data-test="photo-container">
      <ul id='photo_collection'>
        {photos && photos.map((photo) => {
          return (
            <li key={photo.id}>
              <a href={photo.url}>
                <img alt={photo.title} src={photo.thumbnailUrl} />
                <span className="photo_title">{photo.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PhotoList;