import { ADD_TASK, DEL_TASK, UPDATE_TASK, TOGGLE_TASK } from '../actions/tasks';
import { DEL_TODO } from '../actions/todos';

let taskId = 5;

const tasks = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return state.concat({ id: (taskId += 1), ...payload });
    case DEL_TASK:
      return state.filter(task => task.id !== payload.id);
    case UPDATE_TASK:
      return state.map(task =>
        ((task.id === payload.id) ? { ...task, title: payload.title } : task));
    case TOGGLE_TASK:
      return state.map(task =>
        ((task.id === payload.id) ? { ...task, isChecked: !task.isChecked } : task));
    case DEL_TODO:
      return state.filter(task => task.todoId !== payload.id);
    default:
      return state;
  }
};

export default tasks;
