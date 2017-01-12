import { createSelector } from 'reselect';

/*
** Reselect provides a function createSelector for creating memoized selectors.
** createSelector takes an array of input-selectors and a transform function.
**
** If the Redux state tree is mutated in a way that causes the value of an input-selector to change,
** the selector will call its transform function with the values of the input-selectors
** as arguments and return the result.
**
** If the values of the input-selectors are the same as the previous call to the selector,
** it will return the previously computed value instead of calling the transform function.
*/

/* Filter Functions */

const reduceTasksWithTodoId = tasks =>
  tasks.reduce((acc, task) => ({
    ...acc,
    [task.todoId]: (acc[task.todoId]) ? [...acc[task.todoId], task] : [task],
  }),
  {});

const filterCompletedTodos = (todos, tasks = []) =>
  todos.filter(todo =>
    tasks[todo.id].some(task => task.isChecked === false) || tasks[todo.id].length === 0);

const sortTodos = todos =>
  todos.sort((t1, t2) => t1.title - t2.title);

const filterTodos = (todos, tasks, options) => {
  let filtered = [...todos];
  filtered = (options.showCompleted) ? filtered : filterCompletedTodos(filtered, tasks);
  filtered = sortTodos(filtered);
  filtered = (options.sortByAsc) ? filtered : filtered.reverse();
  return filtered;
};

/* Input Selectors */

const getTodos = state => state.todos;
const getTasks = state => state.tasks;
const getOptions = state => state.options;

/* Selectors */

const tasksSelector = createSelector(
  [getTasks],
  reduceTasksWithTodoId,
);

const todosSelector = createSelector(
  [getTodos, tasksSelector, getOptions],
  filterTodos,
);

export { tasksSelector, todosSelector };
