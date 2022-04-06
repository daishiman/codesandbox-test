import React from 'react';
import { connect } from 'react-redux';
import './App.css';

function App({ count, increase, decrease }) {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({ type: 'INCREASE_COUNT' }),
    decrease: () => dispatch({ type: 'DECREASE_COUNT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
