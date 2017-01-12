export const ADD_TODO = 'todos/addTodo';
export const DEL_TODO = 'todos/delTodo';

export const addTodo = title => ({
  type: ADD_TODO,
  payload: { title },
});

export const delTodo = id => ({
  type: DEL_TODO,
  payload: { id },
});

export default { addTodo, delTodo };
