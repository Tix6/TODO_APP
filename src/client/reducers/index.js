import { combineReducers } from 'redux';
import todos from './todos';
import tasks from './tasks';
import options from './options';

const rootReducer = combineReducers({
  todos,
  tasks,
  options,
});

export default rootReducer;
