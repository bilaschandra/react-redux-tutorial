import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import modalReducer from './modalReducer';
import TodoList from './components';

const cReducer = combineReducers({
    reducer,
	modalReducer
});
console.log(cReducer);
const store = createStore(cReducer);
//console.log(store);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);

