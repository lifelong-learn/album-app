import React, { useState, useEffect } from 'react';
import './App.css';
import AlbumList from './components/AlbumList';
import withListLoading from './components/withListLoading';
import Axios from 'axios';

function App() {
  const AlbumListLoading = withListLoading(AlbumList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    Axios.all([
      Axios.get('http://jsonplaceholder.typicode.com/albums'),
      Axios.get('http://jsonplaceholder.typicode.com/users')
    ])
    .then((res) => ({ albums: res[0].data, users: res[1].data }))
    .then((repos) => {
      setAppState({ loading: false, repos: repos });
    });
  }, [setAppState]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Repositories</h1>
        <div className="repo-container" data-test="app-container">
          <AlbumListLoading isLoading={ appState.loading } repos={ appState.repos } />
        </div>
      </header>
    </div>
  );
}

export default App;
