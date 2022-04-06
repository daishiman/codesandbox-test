import { combineReducers, createStore } from 'redux';

const countReducer = (
  state = {
    count: 50,
  }
) => {
  return state;
};

const postsReducer = (
  state = {
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
  }
) => {
  return state;
};

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});

const store = createStore(rootReducer);
console.log(store.getState());

export default store;
