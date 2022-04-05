import { createStore } from 'redux';

const initialState = {
  count: 1,
};

const reducer = (state = initialState) => {
  return state;
};

export const store = createStore(reducer);
