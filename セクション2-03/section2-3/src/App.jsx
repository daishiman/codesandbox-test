import logo from './logo.svg';
import { useState } from "react";
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    console.log("App");
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>hello React</h1>
      <h2>start React</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </div>
  );
}
