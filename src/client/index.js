import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/';
import initialState from './mockup';
import App from './components/App/';

console.log('mounting react app ...');  // eslint-disable-line no-console
const store = configureStore(initialState);
const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(Root, document.getElementById('__TODO__'));
