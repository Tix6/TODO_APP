import requestJson from '../utils';
import { tasksSelector } from '../selectors/';
import { delTask } from './tasks';
import { addLoading, delLoading } from './currentLoads';
import { addAlert } from './alert';

export const TODO_ADDED = 'todos/todoAdded';
export const TODO_DELETED = 'todos/delTodo';
export const TODOS_LOADED = 'todos/todosLoaded';

const dispatchMany = (dispatch, actions = []) => {
  if (dispatch) actions.forEach(action => dispatch(action));
};

export const todoAdded = todo => ({
  type: TODO_ADDED,
  payload: todo,
});

export const addTodo = label => (dispatch) => {
  const uri = 'api/todo/lists';
  const body = { todo: { label } };
  const options = { method: 'POST', body };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(todo => dispatchMany(dispatch, [delLoading(), todoAdded(todo)]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

export const todoDeleted = todo => ({
  type: TODO_DELETED,
  payload: todo,
});

export const delTodo = id => (dispatch, getState) => {
  const uri = `api/todo/list/${id}`;
  const options = { method: 'DELETE' };
  const tasks = tasksSelector(getState())[id] || [];
  const tasksPromises = tasks.map(task => delTask(task.id)(dispatch));
  dispatch(addLoading());
  Promise.all([requestJson(uri, options), ...tasksPromises])
    .then(values => dispatchMany(dispatch, [delLoading(), todoDeleted(values[0])]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

const todosLoaded = todos => ({
  type: TODOS_LOADED,
  payload: todos,
});

export const loadTodos = () => (dispatch) => {
  const uri = 'api/todo/lists';
  const options = { dispatch };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(todos => dispatchMany(dispatch, [delLoading(), todosLoaded(todos)]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

export default { addTodo, delTodo };
