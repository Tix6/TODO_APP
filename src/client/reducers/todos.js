import { TODO_ADDED, TODO_DELETED, TODOS_LOADED } from '../actions/todos';

const todos = (state = [], action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case TODO_ADDED:
      return [...state, { ...payload }];
    case TODO_DELETED:
      return state.filter(todo => todo.id !== payload.id);
    case TODOS_LOADED:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default todos;
