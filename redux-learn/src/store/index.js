import { createStore } from 'redux';

const initialState = {
  count: 0,
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    case 'GET_POST_DATA':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

export default store;
