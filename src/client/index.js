import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadTodos } from './actions/todos';
import { loadTasks } from './actions/tasks';
import configureStore from './store/';
import initialState from './store/initial_state';
import App from './components/App/';

console.log('mounting react app ...');  // eslint-disable-line no-console
const store = configureStore(initialState);

store.dispatch(loadTodos());
store.dispatch(loadTasks());

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(Root, document.getElementById('__TODO__'));
