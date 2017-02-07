import requestJson from '../utils';
import { addLoading, delLoading } from './currentLoads';
import { addAlert } from './alert';

export const TODO_ADDED = 'todos/todoAdded';
export const TODO_DELETED = 'todos/delTodo';
export const TODOS_LOADED = 'todos/todosLoaded';

const dispatchMany = (dispatch, actions = []) => {
  if (dispatch) actions.forEach(action => dispatch(action));
};

const errorHandler = (error, dispatch) => {
  console.error(error.message);
  dispatchMany(dispatch, [delLoading(), addAlert(error.message)]);
  return error;
};

export const todoAdded = todo => ({
  type: TODO_ADDED,
  payload: todo,
});

export const addTodo = label => (dispatch) => {
  const uri = 'api/todos';
  const body = { todo: { label } };
  const options = { method: 'POST', body };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(todo => dispatchMany(dispatch, [delLoading(), todoAdded(todo)]))
    .catch(error => errorHandler(error, dispatch));
};

export const todoDeleted = todo => ({
  type: TODO_DELETED,
  payload: todo,
});

export const delTodo = id => (dispatch) => {
  const uri = `api/todos/${id}`;
  const options = { method: 'DELETE' };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(todo => dispatchMany(dispatch, [delLoading(), todoDeleted(todo)]))
    .catch(error => errorHandler(error, dispatch));
};

const todosLoaded = todos => ({
  type: TODOS_LOADED,
  payload: todos,
});

export const loadTodos = () => (dispatch) => {
  const uri = 'api/todos';
  const options = { method: 'GET' };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(todos => dispatchMany(dispatch, [delLoading(), todosLoaded(todos)]))
    .catch(error => errorHandler(error, dispatch));
};

export default { addTodo, delTodo };
