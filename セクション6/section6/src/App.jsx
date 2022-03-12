import React    from 'react';
import ReactDom from 'react-dom';

const App = () => {
  const onClickButton = () => alert();
  const contetStyle = {
    color: 'blue',
    fontSize: '18px',
  };
	return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <p style={contetStyle}>おげんきですか？</p>
      <button onClick={ onClickButton }>ボタン</button>
    </>
	);
};

export default App;
