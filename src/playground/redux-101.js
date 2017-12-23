import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setValue } = {}) => ({
  type: 'SET',
  setValue
});

const resetCount = () => ({
  type: 'RESET'
});

//Reducers

const countReducer = (state = { count: 0 }, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: state.count = 0
      };
    case 'SET':
      return {
        count: state.count = action.setValue
      };
    default:
      return state;
  }
};


const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  }
);  

//Increament
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(setCount({ setValue: 101 }));
store.dispatch(resetCount());

