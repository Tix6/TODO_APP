import chai from 'chai';
import tasksReducer from '../tasks';
import { addTask, delTask, updateTask, toggleTask } from '../../actions/tasks';
import { delTodo } from '../../actions/todos';

const { describe, it } = global;
const { expect } = chai;

const addAction = addTask('task test 4', 2);
const delAction = delTask(1);
const updateAction = updateTask(1, 'updated');
const toggleAction = toggleTask(1);
const delTodoAction = delTodo(1);

const initialState = [
  { id: 1, todoId: 1, title: 'task test 1', isChecked: false },
  { id: 2, todoId: 1, title: 'task test 2', isChecked: false },
  { id: 3, todoId: 2, title: 'task test 3', isChecked: true },
];

const stateAfterAdd = [
  ...initialState,
  { id: 6, todoId: 2, title: 'task test 4', isChecked: false },
];

const stateAfterDel = initialState.filter(task => task.id !== 1);

const stateAfterUpdate = [
  { id: 1, todoId: 1, title: 'updated', isChecked: false },
  { id: 2, todoId: 1, title: 'task test 2', isChecked: false },
  { id: 3, todoId: 2, title: 'task test 3', isChecked: true },
];

const stateAfterToggle = [
  { id: 1, todoId: 1, title: 'task test 1', isChecked: true },
  { id: 2, todoId: 1, title: 'task test 2', isChecked: false },
  { id: 3, todoId: 2, title: 'task test 3', isChecked: true },
];

const stateAfterDelTodo = initialState.filter(task => task.todoId !== 1);

describe('[UT] [Reducer] tasks', () => {
  it('should return the initial state when action is undefined', () => {
    expect(tasksReducer(initialState, undefined)).to.deep.equal(initialState);
  });

  it('should return an empty state when state is undefined', () => {
    expect(tasksReducer(undefined, undefined)).to.deep.equal([]);
  });

  it('should add a task', () => {
    expect(tasksReducer(initialState, addAction)).to.deep.equal(stateAfterAdd);
  });

  it('should delete a task', () => {
    expect(tasksReducer(initialState, delAction)).to.deep.equal(stateAfterDel);
  });

  it('should update a task', () => {
    expect(tasksReducer(initialState, updateAction)).to.deep.equal(stateAfterUpdate);
  });

  it('should toggle a task', () => {
    expect(tasksReducer(initialState, toggleAction)).to.deep.equal(stateAfterToggle);
  });

  it('should delete tasks with same todo id', () => {
    expect(tasksReducer(initialState, delTodoAction)).to.deep.equal(stateAfterDelTodo);
  });
});
