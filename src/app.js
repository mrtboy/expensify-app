import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisisbleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 2000}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 5000, createdAt: 109500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 555, createdAt: 22 }));
// store.dispatch(setTextFilter("Water"));


// setTimeout(()=>{
//   store.dispatch(setTextFilter("bill"));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app')); 