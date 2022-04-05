import React from 'react';
import './App.css';
import { store } from './store';

export default function App() {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count:{store.getState().count}</p>
    </div>
  );
}
