import { combineReducers } from 'redux';
import todos from './todos';
import tasks from './tasks';
import options from './options';
import alert from './alert';
import currentLoads from './currentLoads';

const rootReducer = combineReducers({
  todos,
  tasks,
  options,
  alert,
  currentLoads,
});

export default rootReducer;
