const redux = require("redux");

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// store
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// subsription
const counterSubscriber = () => {
  const latestSate = store.getState();
  console.log(latestSate);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
