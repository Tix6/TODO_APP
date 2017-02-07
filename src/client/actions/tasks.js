import requestJson from '../utils';
import { addLoading, delLoading } from './currentLoads';
import { addAlert } from './alert';

export const TASK_ADDED = 'tasks/taskAdded';
export const TASK_DELETED = 'tasks/taskDeleted';
export const TASK_UPDATED = 'tasks/taskUpdated';
export const TASKS_LOADED = 'tasks/tasksLoaded';

const dispatchMany = (dispatch, actions = []) => {
  if (dispatch) actions.forEach(action => dispatch(action));
};

const errorHandler = (error, dispatch) => {
  console.error(error.message);
  dispatchMany(dispatch, [delLoading(), addAlert(error.message)]);
  return error;
};

export const taskAdded = task => ({
  type: TASK_ADDED,
  payload: task,
});

export const addTask = (description, listId) => (dispatch) => {
  const uri = 'api/tasks';
  const body = { task: { description, listId, isCompleted: false } };
  const options = { method: 'POST', body };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(task => dispatchMany(dispatch, [delLoading(), taskAdded(task)]))
    .catch(error => errorHandler(error, dispatch));
};

export const taskDeleted = task => ({
  type: TASK_DELETED,
  payload: task,
});

export const delTask = id => (dispatch) => {
  const uri = `api/tasks/${id}`;
  const options = { method: 'DELETE', dispatch };
  dispatch(addLoading());
  return requestJson(uri, options)
    .then(task => dispatchMany(dispatch, [delLoading(), taskDeleted(task)]))
    .catch(error => errorHandler(error, dispatch));
};

export const taskUpdated = task => ({
  type: TASK_UPDATED,
  payload: task,
});

export const updateTask = task => (dispatch) => {
  const uri = 'api/tasks';
  const body = { task };
  const options = { method: 'PUT', body };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(updated => dispatchMany(dispatch, [delLoading(), taskUpdated(updated)]))
    .catch(error => errorHandler(error, dispatch));
};

export const tasksLoaded = tasks => ({
  type: TASKS_LOADED,
  payload: tasks,
});

export const loadTasks = () => (dispatch) => {
  const uri = 'api/tasks';
  dispatch(addLoading());
  requestJson(uri)
    .then(tasks => dispatchMany(dispatch, [delLoading(), tasksLoaded(tasks)]))
    .catch(error => errorHandler(error, dispatch));
};

export default { addTask, delTask, updateTask };
