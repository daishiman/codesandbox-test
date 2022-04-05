import { createStore } from 'redux';

const initialState = {
  count: 100,
  posts: [
    {
      id: 1,
      title: 'reduxについて',
    },
    {
      id: 2,
      title: 'reduxのhooksについて',
    },
  ],
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);
console.log(store.getState());

export default store;
