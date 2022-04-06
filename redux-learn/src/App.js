import React from 'react';
import './App.css';
import Count from './components/count';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <Count />
      <Post />
    </div>
  );
}

export default App;
