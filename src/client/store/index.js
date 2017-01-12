import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/';

const configureStore = initialState => createStore(
    rootReducer,
    initialState,
    applyMiddleware(createLogger()),
  );

export default configureStore;
