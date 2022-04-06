import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Count from './components/count';

export default function App() {
  const count = useSelector((state) => state.countReducer.count);
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count:{count}</p>
      <Count />
    </div>
  );
}
