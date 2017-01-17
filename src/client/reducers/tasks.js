import { TASK_ADDED, TASK_DELETED, TASK_UPDATED, TASK_TOGGLED, TASKS_LOADED } from '../actions/tasks';

const tasks = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case TASK_ADDED:
      return [...state, payload];
    case TASK_DELETED:
      return state.filter(task => task.id !== payload.id);
    case TASK_UPDATED:
      return state.map(task =>
        ((task.id === payload.id) ? payload : task));
    case TASK_TOGGLED:
      return state.map(task =>
        ((task.id === payload.id) ? payload : task));
    case TASKS_LOADED:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default tasks;
