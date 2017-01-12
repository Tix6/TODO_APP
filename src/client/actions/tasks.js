export const ADD_TASK = 'tasks/addTask';
export const DEL_TASK = 'tasks/delTask';
export const UPDATE_TASK = 'tasks/updateTask';
export const TOGGLE_TASK = 'tasks/toggleTask';

export const addTask = (title, todoId) => ({
  type: ADD_TASK,
  payload: { title, todoId, isChecked: false },
});

export const delTask = id => ({
  type: DEL_TASK,
  payload: { id },
});

export const updateTask = (id, title) => ({
  type: UPDATE_TASK,
  payload: { id, title },
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export default { addTask, delTask, updateTask, toggleTask };
