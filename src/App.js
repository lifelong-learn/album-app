import React from 'react';
import './App.css';
import AlbumList from './components/AlbumList';
import Axios from 'axios';

function App() {
  const [appState, setAppState] = React.useState({
    loading: false,
    repos: null,
  });

  React.useEffect(() => {
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

  if (appState.loading) {
    return (
      <div data-test="app-loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Album Repositories</h1>
        <div className="repo-container" data-test="app-container">
          <AlbumList repos={ appState.repos } />
        </div>
      </header>
    </div>
  );
}

export default App;
