import React from 'react';
import socketIO from 'socket.io-client';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadTodos } from './actions/todos';
import { loadTasks } from './actions/tasks';
import configureStore from './store/';
import initialState from './store/initial_state';
import App from './components/App/';

console.log('mounting react app ...');  // eslint-disable-line no-console

const io = socketIO.connect();
const store = configureStore(initialState, io);

io.on('disconnect', () => console.log('socket.io disconnected'));
io.on('error', (err) => console.log(`socket.io error : ${err}`));
io.on('connect', () => {
  console.log('socket.io connected');
  store.dispatch(loadTodos());
  store.dispatch(loadTasks());
});


const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(Root, document.getElementById('__TODO__'));
