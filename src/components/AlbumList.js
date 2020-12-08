import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PhotoList from './PhotoList';
const AlbumList = (props) => {
  const { repos } = props;
  if (!repos || repos.albums.length === 0 || repos.users.length === 0) return <p data-test="album-container">Loading...</p>;
  return (
    <div data-test="album-container">
      <Router>
        <ul id="album_collection">
          <h2 className='album-list-title'>List of Album Titles</h2>
          {repos.albums.map((repo) => {
            return (
              <li key={repo.id} className='list'>
                <Link to={`/album/${repo.id}`}>
                  <span className='album'>{repo.title}</span>
                  <span className='author'> by {repos.users.filter((user) => user.id === repo.userId)[0].name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Route path="/album/:albumId" component={PhotoList} />
      </Router>
    </div>
    
  );
};

export default AlbumList;