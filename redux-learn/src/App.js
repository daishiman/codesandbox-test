import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Count from './components/count';

function App({ count }) {
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count:{count}</p>
      <Count />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
