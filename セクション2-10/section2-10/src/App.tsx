import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res)
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データベース取得</button>
    </div>
  );
}
