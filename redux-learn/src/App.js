import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App({ dispatch, count }) {
  const increase = () => {
    dispatch({ type: 'INCREASE_COUNT' });
  };
  const decrease = () => {
    dispatch({ type: 'DECREASE_COUNT' });
  };
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count:{count}</p>
      <button onClick={increase}>Up</button>
      <br />
      <button onClick={decrease}>Down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(App);
