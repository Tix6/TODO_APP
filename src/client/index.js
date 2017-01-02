import React from 'react';
import { render } from 'react-dom';
import App from './components/App/';
import { createStore, Provider } from './store';
import initialState from './mockup';
import actions from './actions';

console.log('mounting react app ...');  // eslint-disable-line no-console
const store = createStore(initialState);
const Root = (
  <Provider store={store} actions={actions}>
    <App />
  </Provider>
);

render(Root, document.getElementById('__TODO__'));
