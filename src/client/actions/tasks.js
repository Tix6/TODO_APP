import requestJson from '../utils';
import { addLoading, delLoading } from './currentLoads';
import { addAlert } from './alert';

export const TASK_ADDED = 'tasks/taskAdded';
export const TASK_DELETED = 'tasks/taskDeleted';
export const TASK_UPDATED = 'tasks/taskUpdated';
export const TASK_TOGGLED = 'tasks/taskToggled';
export const TASKS_LOADED = 'tasks/tasksLoaded';

const dispatchMany = (dispatch, actions = []) => {
  if (dispatch) actions.forEach(action => dispatch(action));
};

export const taskAdded = task => ({
  type: TASK_ADDED,
  payload: task,
});

export const addTask = (description, listId) => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task: { description, listId, isCompleted: false } };
  const options = { method: 'POST', body };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(task => dispatchMany(dispatch, [delLoading(), taskAdded(task)]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

export const taskDeleted = task => ({
  type: TASK_DELETED,
  payload: task,
});

export const delTask = id => (dispatch) => {
  const uri = `api/todo/task/${id}`;
  const options = { method: 'DELETE', dispatch };
  dispatch(addLoading());
  return requestJson(uri, options)
    .then(task => dispatchMany(dispatch, [delLoading(), taskDeleted(task)]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

export const taskUpdated = task => ({
  type: TASK_UPDATED,
  payload: task,
});

export const updateTask = task => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task };
  const options = { method: 'PUT', body };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(updated => dispatchMany(dispatch, [delLoading(), taskUpdated(updated)]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

export const taskToggled = task => ({
  type: TASK_TOGGLED,
  payload: task,
});

export const toggleTask = task => (dispatch) => {
  const uri = 'api/todo/tasks';
  const body = { task: { ...task, isCompleted: !task.isCompleted } };
  const options = { method: 'PUT', body };
  dispatch(addLoading());
  requestJson(uri, options)
    .then(updated => dispatchMany(dispatch, [delLoading(), taskUpdated(updated)]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

export const tasksLoaded = tasks => ({
  type: TASKS_LOADED,
  payload: tasks,
});

export const loadTasks = () => (dispatch) => {
  const uri = 'api/todo/tasks';
  dispatch(addLoading());
  requestJson(uri)
    .then(tasks => dispatchMany(dispatch, [delLoading(), tasksLoaded(tasks)]))
    .catch(error => dispatchMany(dispatch, [delLoading(), addAlert(error.message)]));
};

export default { addTask, delTask, updateTask, toggleTask };
