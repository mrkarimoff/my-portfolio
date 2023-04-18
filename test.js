import { createStore } from "redux";

function reducer(state, action) {
  return { ...state };
}

const initialState = {
  count: 0,
};

const store = createStore(reducer, initialState);
