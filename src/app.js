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
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app')); 